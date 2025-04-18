import posts from "@/data/posts.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

/* ① — Pré‑génère toutes les routes statiques */
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

/* ② — Server component (pas de "use client") */
export default function Blog({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  /* Format FR : 18 avril 2025 */
  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl p-6">
      {/* ───── Entête ───── */}
      <header className="mb-10">
        <Image
          src={post.cover}
          alt={post.title}
          width={1280}
          height={720}
          className="rounded-xl shadow-md"
          priority
        />
        <h1 className="mt-6 text-4xl font-bold tracking-tight">
          {post.title}
        </h1>
        <time
          dateTime={post.date}
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          {formattedDate}
        </time>
      </header>

      {/* ───── Contenu Markdown ───── */}
      <section className="prose prose-indigo dark:prose-invert max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </section>

      {/* ───── Galerie d’images associées ───── */}
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {["/images/ex1.png", "/images/ex2.png", "/images/ex3.webp"].map(
          (src, i) => (
            <Image
              key={i}
              src={src}
              alt={`illustration ${i + 1}`}
              width={400}
              height={260}
              className="h-64 w-full object-cover rounded-lg shadow-sm"
            />
          )
        )}
      </section>
    </article>
  );
}
