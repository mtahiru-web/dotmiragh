import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Star, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Dotmira GH" },
      { name: "description", content: "Real feedback from real businesses we have helped get online." },
      { property: "og:title", content: "Reviews — Dotmira GH" },
      { property: "og:description", content: "What our clients say about Dotmira GH." },
    ],
  }),
  component: ReviewsPage,
});

const placeholders = [
  { name: "Your Business", role: "Coming soon" },
  { name: "Your Business", role: "Coming soon" },
  { name: "Your Business", role: "Coming soon" },
];

function ReviewsPage() {
  return (
    <Layout>
      <PageHero eyebrow="Reviews" title="What our clients say" subtitle="Real feedback from real businesses we have helped get online." />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {placeholders.map((p, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4 text-muted-foreground italic">"Review coming soon; we'd love to feature your story here."</p>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-10 w-10 rounded-full" style={{ background: "var(--gradient-brand)" }} />
                <div>
                  <div className="font-semibold text-sm">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl p-10 text-center bg-card border border-border">
          <h2 className="text-2xl md:text-3xl font-bold">Had a great experience with us?</h2>
          <p className="mt-2 text-muted-foreground">We would love to hear from you.</p>
          <a href="https://wa.me/233272178796?text=I'd%20like%20to%20leave%20a%20review%20for%20Dotmira%20GH" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
            <MessageCircle className="h-4 w-4" /> Leave a Review
          </a>
        </div>
      </section>
    </Layout>
  );
}