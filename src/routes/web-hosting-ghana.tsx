import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Server, Check, Shield, Zap, Globe, ArrowRight, MessageCircle } from "lucide-react";
import serviceHosting from "@/assets/service-hosting.jpg";

export const Route = createFileRoute("/web-hosting-ghana")({
  head: () => ({
    meta: [
      { title: "Web Hosting Ghana — Fast, Reliable Hosting for Small Businesses" },
      { name: "description", content: "Affordable web hosting in Ghana for small businesses and startups. Reliable servers, SSL, email, and local support from Dotmira GH." },
      { property: "og:title", content: "Web Hosting Ghana — Dotmira GH" },
      { property: "og:description", content: "Fast, reliable web hosting for Ghanaian businesses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dotmiragh.com/web-hosting-ghana" },
    ],
    links: [{ rel: "canonical", href: "https://dotmiragh.com/web-hosting-ghana" }],
  }),
  component: WebHostingGhanaPage,
});

const features = [
  { icon: Zap, title: "Fast loading speeds", desc: "Hosting configured for quick load times so visitors stay on your site." },
  { icon: Shield, title: "SSL & security", desc: "Every plan includes SSL encryption and basic security hardening." },
  { icon: Globe, title: "Custom business email", desc: "Professional email addresses that match your domain name." },
  { icon: Server, title: "Daily backups", desc: "Peace of mind with regular backups of your website files." },
];

const plans = [
  { name: "Starter", price: "Gh₵3,600", period: "/year", features: ["SSL certificate included", "99.9% uptime", "Daily backups", "Email support"] },
  { name: "Standard", price: "Gh₵4,800", period: "/year", features: ["Everything in Starter", "Faster server resources", "Priority support", "Monthly uptime reports"], featured: true },
];

function WebHostingGhanaPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Web Hosting Ghana"
        title="Reliable web hosting for Ghanaian businesses"
        subtitle="Fast, secure hosting with local support. Whether you are launching your first website or moving an existing one, Dotmira GH sets everything up so you can focus on your business."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Why your business needs hosting in Ghana</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Web hosting is what makes your website visible on the internet. Without it, your domain name and website files have nowhere to live. For small businesses in Ghana, choosing the right hosting means faster load times for local visitors, reliable uptime, and support from a team that understands the market.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Dotmira GH handles the full setup — server configuration, SSL, email, and ongoing support — so you do not need any technical knowledge.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl opacity-25 blur-2xl" style={{ background: "var(--gradient-brand)" }} />
          <img src={serviceHosting} alt="Modern server room with warm lighting" loading="lazy" className="relative rounded-3xl w-full aspect-[4/3] object-cover shadow-[var(--shadow-soft)]" />
        </div>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">What's included with our hosting</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-card border border-border p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Simple hosting plans for small businesses</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-7 border ${p.featured ? "border-transparent text-primary-foreground" : "border-border bg-card"}`} style={p.featured ? { background: "var(--gradient-brand)" } : undefined}>
              {p.featured && <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">Most popular</div>}
              <div className="text-sm font-semibold uppercase tracking-wider">{p.name}</div>
              <div className={`mt-2 text-4xl font-bold ${p.featured ? "" : "text-foreground"}`}>{p.price}<span className="text-sm font-medium opacity-80">{p.period}</span></div>
              <ul className="mt-5 space-y-2 text-sm">
                {p.features.map((it) => (
                  <li key={it} className="flex gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" />{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 md:pb-24">
        <div className="rounded-3xl p-10 text-center bg-card border border-border">
          <h3 className="text-2xl font-bold">Ready to get your site online?</h3>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Get in touch and we'll recommend the right hosting plan for your business.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/233272178796" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-bold hover:scale-105 transition">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold hover:bg-accent transition">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
