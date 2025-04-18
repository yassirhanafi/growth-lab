/* app/page.tsx — Homepage v2 : minimal assets, emoji-based hero, motion */
"use client";

import Link from "next/link";
import posts from "@/data/posts.json";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const latest = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  const fade = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  } as const;

  return (
    <main className="flex flex-col gap-24 px-4 sm:px-8">
      {/* ─────────── Hero ─────────── */}
      <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[rgb(var(--color-primary))]/90 via-fuchsia-600 to-rose-500 text-[rgb(var(--color-primary-fg))] shadow-xl">
        {/* décor animé */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1], rotate: [0, 10, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-24">
          {/* Texte gauche */}
          <div className="space-y-6">
            <motion.h1
              variants={fade}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl font-extrabold leading-tight text-[rgb(var(--color-primary-fg))] drop-shadow lg:max-w-md"
            >
              👋 Yassir Hanafi
            </motion.h1>
            <motion.p
              custom={1}
              variants={fade}
              initial="hidden"
              animate="show"
              className="text-lg/relaxed font-medium lg:max-w-md text-[rgb(var(--color-primary-fg))]/90"
            >
              Full‑Stack Growth Hacker & « Quantitative Marketer ». <br />
              Je booste votre ROI grâce à la data, l’IA et l’automatisation.
            </motion.p>
            <motion.div
              custom={2}
              variants={fade}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4"
            >
              <Link
                href="mailto:yassirhanafi17@gmail.com"
                className="btn-primary"
              >
                🚀 Discutons croissance <ArrowRight size={18} />
              </Link>
              <Link
                href="/Yassir_Hanafi_CV.pdf"
                className="rounded-xl border border-white/30 bg-white/20 px-6 py-3 text-base font-semibold text-[rgb(var(--color-primary-fg))] backdrop-blur hover:bg-white/30"
                target="_blank"
              >
                📄 Télécharger le CV
              </Link>
            </motion.div>
          </div>

          {/* Placeholder fun emoji droite */}
          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="flex items-center justify-center text-8xl lg:text-[9rem]"
          >
            🎯
          </motion.div>
        </div>
        {/* Wave separator */}
        <svg className="absolute inset-x-0 -bottom-1 h-12 w-full text-[rgb(var(--color-bg))]" viewBox="0 0 1440 320"><path fill="currentColor" d="M0 256L48 229.3C96 203 192 149 288 122.7C384 96 480 96 576 133.3C672 171 768 245 864 245.3C960 245 1056 171 1152 144C1248 117 1344 139 1392 149.3L1440 160V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0Z"/></svg>
      </section>

      {/* ─────────── Services ─────────── */}
      <section id="services" className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Comment je propulse votre croissance</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Acquisition & Growth",
              emoji: "🚀",
              desc: "Campagnes multi‑plateformes, funnels optimisés, ROAS scalable.",
            },
            {
              title: "IA & Automatisation",
              emoji: "🤖",
              desc: "Workflows no‑code / agents IA pour SEO & Ads.",
            },
            {
              title: "Data & Analytics",
              emoji: "📊",
              desc: "Dashboards temps réel, modèles prédictifs précis.",
            },
            {
              title: "E‑commerce & CRO",
              emoji: "🛒",
              desc: "Optimisation UX, LTV et stratégies de rétention.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="card h-full flex flex-col"
            >
              <span className="text-3xl">{s.emoji}</span>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm/relaxed opacity-80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────── Achievements ─────────── */}
      <section className="bg-[rgb(var(--color-muted))]/50 py-16 dark:bg-white/5">
        <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-3 text-center">
          {[
            { value: "5M€+", label: "Budget Ads géré" },
            { value: "500K€", label: "Revenus e‑commerce" },
            { value: "Station F", label: "Start‑up acceptée" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-4xl font-extrabold text-[rgb(var(--color-primary))]">
                {item.value}
              </p>
              <p className="mt-2 font-medium opacity-80">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────── Blog Teaser ─────────── */}
      <section id="blog" className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Derniers articles</h2>
          <Link href="/blog" className="flex items-center gap-1 text-[rgb(var(--color-primary))] hover:underline">
            Tous les articles <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {latest.map((post, i) => (
            <motion.div
              key={post.slug}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-lg card p-6 flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-xs opacity-70 mb-4">
                {new Date(post.date).toLocaleDateString("fr-FR")}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-auto inline-flex items-center gap-1 text-[rgb(var(--color-primary))] font-medium hover:underline"
              >
                Lire l’article <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────── Final CTA ─────────── */}
      <section className="my-24 text-center space-y-6">
        <motion.h2
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl font-bold"
        >
          🚀 Prêt·e à booster votre ROI ?
        </motion.h2>
        <Link
          href="mailto:yassirhanafi17@gmail.com"
          className="btn-primary text-lg"
        >
          Écrivez‑moi maintenant
        </Link>
      </section>
    </main>
  );
}