import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Check, Star, ArrowRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Dotmira GH" },
      { name: "description", content: "Affordable website creation, web hosting, website maintenance, and Excel business tracker pricing for small businesses in Ghana." },
      { property: "og:title", content: "Pricing — Dotmira GH" },
      { property: "og:description", content: "Affordable website creation, web hosting, website maintenance, and Excel business tracker pricing for small businesses in Ghana." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dotmiragh.com/pricing" },
    ],
    links: [{ rel: "canonical", href: "https://dotmiragh.com/pricing" }],
  }),
  component: PricingPage,
});

const WA_URL = "https://wa.me/233272178796";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
      {children}
    </span>
  );
}

function PricingCard({
  name,
  price,
  period,
  badge,
  featured,
  children,
}: {
  name: string;
  price: string;
  period: string;
  badge?: string;
  featured?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-7 ${
        featured
          ? "border-transparent text-primary-foreground"
          : "border border-border bg-card"
      }`}
      style={featured ? { background: "var(--gradient-brand)" } : undefined}
    >
      {badge && (
        <div className="mb-3">
          <Badge>{badge}</Badge>
        </div>
      )}
      <div className={`text-sm font-semibold uppercase tracking-wider ${featured ? "text-white/80" : "text-primary"}`}>{name}</div>
      <div className={`mt-2 text-4xl font-bold ${featured ? "" : "text-foreground"}`}>
        {price}
        <span className={`ml-1 text-sm font-medium ${featured ? "text-white/80" : "text-muted-foreground"}`}>{period}</span>
      </div>
      <div className="mt-5 flex-1 space-y-3 text-sm">
        {children}
      </div>
      <Link
        to="/contact"
        className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition hover:scale-105 ${
          featured
            ? "bg-background text-primary"
            : "text-primary-foreground shadow-[var(--shadow-soft)]"
        }`}
        style={featured ? undefined : { background: "var(--gradient-brand)" }}
      >
        Get Started <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function Feature({ children, featured }: { children: React.ReactNode; featured?: boolean }) {
  return (
    <div className="flex items-start gap-2.5">
      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${featured ? "text-white/90" : "text-primary"}`} />
      <span className={featured ? "text-white/90" : "text-muted-foreground"}>{children}</span>
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</div>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function PricingPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Pricing"
        title="Simple, honest pricing for your website"
        subtitle="Two straightforward packages. No hidden fees, just tell us what you need."
      />

      {/* Website Creation */}
      <section id="website-creation" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="Website Creation"
          title="Website Creation"
          subtitle="Choose a package that fits your business, or ask us for a custom quote."
        />
        <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <PricingCard name="Starter" price="Gh₵1,000" period="one-time">
            <Feature>Up to 3 pages (Home, About, Contact)</Feature>
            <Feature>Mobile-friendly responsive design</Feature>
            <Feature>Contact form</Feature>
            <Feature>WhatsApp click-to-chat integration</Feature>
            <Feature>Basic on-page SEO setup</Feature>
            <Feature>1 to 2 week delivery</Feature>
            <Feature>Domain and hosting quoted separately</Feature>
          </PricingCard>
          <PricingCard name="Standard" price="Gh₵1,800" period="one-time" badge="Most Popular" featured>
            <Feature featured>Up to 6 pages (add Services, Portfolio/Gallery, FAQ, etc.)</Feature>
            <Feature featured>Mobile-friendly responsive design</Feature>
            <Feature featured>Contact form</Feature>
            <Feature featured>WhatsApp click-to-chat integration</Feature>
            <Feature featured>On-page SEO setup</Feature>
            <Feature featured>Social media integration</Feature>
            <Feature featured>1 to 2 week delivery</Feature>
            <Feature featured>Domain and hosting quoted separately</Feature>
          </PricingCard>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Need something custom, like e-commerce, more pages, or advanced features?{" "}
          <Link to="/contact" className="font-semibold text-primary hover:underline">
            Reach out for a free quote
          </Link>
          .
        </p>
      </section>

      {/* Web Hosting */}
      <section id="hosting" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="Web Hosting"
          title="Web Hosting"
          subtitle="Reliable hosting so your website stays fast and online, billed annually."
        />
        <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <PricingCard name="Starter" price="Gh₵3,600" period="/year">
            <Feature>SSL certificate included</Feature>
            <Feature>99.9% uptime</Feature>
            <Feature>Daily backups</Feature>
            <Feature>Email support</Feature>
            <div className="pt-2 text-xs text-muted-foreground">Save vs. paying monthly.</div>
          </PricingCard>
          <PricingCard name="Standard" price="Gh₵4,800" period="/year" badge="Best Value" featured>
            <Feature featured>Everything in Starter</Feature>
            <Feature featured>Faster server resources</Feature>
            <Feature featured>Priority support</Feature>
            <Feature featured>Monthly uptime reports</Feature>
          </PricingCard>
        </div>
      </section>

      {/* Website Maintenance */}
      <section id="maintenance" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="Website Maintenance"
          title="Website Maintenance"
          subtitle="Keep your site secure, updated, and running smoothly, billed annually."
        />
        <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <PricingCard name="Basic" price="Gh₵650" period="/year">
            <Feature>Security monitoring and malware checks</Feature>
            <Feature>Software/plugin updates</Feature>
            <Feature>Regular backups</Feature>
            <Feature>Uptime monitoring</Feature>
            <Feature>Broken link fixes</Feature>
          </PricingCard>
          <PricingCard name="Standard" price="Gh₵900" period="/year" badge="Recommended" featured>
            <Feature featured>Everything in Basic</Feature>
            <Feature featured>Up to 2 minor content updates per month (text/images)</Feature>
            <Feature featured>Performance checks</Feature>
            <Feature featured>Monthly status check-in</Feature>
          </PricingCard>
        </div>
      </section>

      {/* Excel Business Tracker */}
      <section id="excel-tracker" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="Excel Business Tracker"
          title="Excel Business Tracker"
          subtitle="A ready-to-use business dashboard in Excel to track sales, expenses, and profit in one place."
        />
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Sales Tracker",
              "Customer Records",
              "Supplier Directory",
              "Stock Inventory Tracker",
              "Expense Tracker",
              "Monthly Profit and Loss Summary",
              "Cash Flow Tracker",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <PricingCard name="Basic" price="Gh₵150" period="one-time">
            <Feature>Sales + Customer sheets</Feature>
          </PricingCard>
          <PricingCard name="Standard" price="Gh₵250" period="one-time">
            <Feature>Sales + Customer + Supplier + Inventory</Feature>
          </PricingCard>
          <PricingCard name="Premium" price="Gh₵380" period="one-time" badge="Most Popular" featured>
            <Feature featured>All sheets + Dashboard + Monthly Summary</Feature>
          </PricingCard>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Star className="h-4 w-4 text-primary fill-primary" />
          <span>All packages include one free revision after delivery.</span>
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center" style={{ background: "var(--gradient-brand)" }}>
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Not sure which package fits?</h2>
          <p className="mt-3 text-primary-foreground/90 max-w-xl mx-auto">Tell us about your business and we'll help you pick the right option.</p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-background text-primary px-7 py-3 text-sm font-bold hover:scale-105 transition"
          >
            <MessageCircle className="h-4 w-4" /> Chat with us on WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
}
