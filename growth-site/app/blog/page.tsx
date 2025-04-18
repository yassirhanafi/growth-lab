"use client";

import posts from "@/data/posts.json";
import Link from "next/link";
import { notFound } from "next/navigation";


export default function BlogList() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center">📰 Tous les articles</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">
              {post.content.slice(0, 120)}…
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              Lire l'article →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
