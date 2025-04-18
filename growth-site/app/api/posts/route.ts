import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  slug: z.string().min(3).regex(/^[a-z0-9-]+$/),
  title: z.string().min(3),
  markdown: z.string().min(10),
  cover: z.string().optional(),       // champ libre
  date: z.string().optional()         // ISO; défaut = now()
});

export async function POST(req: NextRequest) {
  const token = req.headers.get("x-api-key");   // simple auth
  if (token !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const data = schema.parse(body);
  const today = data.date ?? new Date().toISOString().slice(0, 10);

  /* 1── Écrit le fichier Markdown */
  const mdPath = path.join(
    process.cwd(),
    "content",
    "posts",
    `${data.slug}.md`
  );
  await fs.writeFile(mdPath, data.markdown, "utf8");

  /* 2── Met à jour index.json (en début de tableau) */
  const indexPath = path.join(process.cwd(), "data", "index.json");
  const list = JSON.parse(await fs.readFile(indexPath, "utf8"));
  list.unshift({
    slug: data.slug,
    title: data.title,
    date: today,
    cover: data.cover ?? ""
  });
  await fs.writeFile(indexPath, JSON.stringify(list, null, 2));

  /* 3── Revalidation ISR (pour un site déjà déployé) */
  revalidatePath("/blog");
  revalidatePath(`/blog/${data.slug}`);

  return NextResponse.json({ ok: true });
}
