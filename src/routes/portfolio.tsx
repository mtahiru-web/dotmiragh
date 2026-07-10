import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import portfolioImg from "@/assets/portfolio-mockup.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Dotmira GH" },
      { name: "description", content: "A look at some of the websites we have built for our clients." },
      { property: "og:title", content: "Our Work — Dotmira GH" },
      { property: "og:description", content: "Real websites for real Ghanaian businesses." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <Layout>
      <PageHero eyebrow="Portfolio" title="Our Work" subtitle="A look at some of the websites we have built for our clients." />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="rounded-2xl overflow-hidden border border-border bg-card group">
            <div className="overflow-hidden aspect-[4/3]">
              <img src={portfolioImg} alt="Produsell Distribution" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="text-xs text-primary font-semibold uppercase tracking-wider">Distribution</div>
              <h3 className="mt-1.5 font-bold text-lg">Produsell Distribution</h3>
              <p className="mt-2 text-sm text-muted-foreground">A clean, professional business website built for Produsell Distribution, a product distribution company based in Ghana.</p>
              <a href="https://www.produsell.lovable.app" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Visit website <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
          {[1, 2, 3].map((i) => (
            <article key={i} className="rounded-2xl border border-dashed border-border bg-card/50 p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-secondary"><Sparkles className="h-6 w-6" /></div>
              <h3 className="mt-4 font-bold">Coming soon</h3>
              <p className="mt-1 text-sm text-muted-foreground">More projects in the works.</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl p-10 text-center" style={{ background: "var(--gradient-brand)" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">Want your business featured here?</h2>
          <p className="mt-2 text-primary-foreground/90">Let's build your website today.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-background text-primary px-6 py-3 text-sm font-bold hover:scale-105 transition">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}