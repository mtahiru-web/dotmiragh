import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Server, Wrench, FileSpreadsheet, Sparkles, HandCoins, MapPin, Star } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import heroImg from "@/assets/hero-laptop.jpg";
import portraitAsset from "@/assets/mariam-portrait.jpg.asset.json";
import portfolioImg from "@/assets/portfolio-mockup.jpg";
import teamImg from "@/assets/team.jpg";
import smallBizImg from "@/assets/small-business.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dotmira GH - Getting Your Business Online" },
      { name: "description", content: "Affordable websites, domain registration, and hosting for small businesses and startups in Ghana." },
      { property: "og:title", content: "Dotmira GH - Getting Your Business Online" },
      { property: "og:description", content: "Affordable websites, domain registration, and hosting for small businesses and startups in Ghana." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Globe2, title: "Website Creation", desc: "Clean, professional sites built for your brand." },
  { icon: Sparkles, title: "Domain Registration", desc: "Claim your business's unique address online." },
  { icon: Server, title: "Web Hosting", desc: "Fast, reliable hosting set up for you." },
  { icon: FileSpreadsheet, title: "Excel Business Tracker", desc: "Custom spreadsheets to manage your records." },
];

const whyUs = [
  { icon: HandCoins, title: "Affordable Pricing", desc: "Web services designed for small budgets without compromising on quality." },
  { icon: Wrench, title: "Simple Process", desc: "We handle everything from start to finish. You just tell us what you need." },
  { icon: MapPin, title: "Local & Trusted", desc: "Based in Ghana, serving Ghanaian businesses with care and professionalism." },
];

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-background/70 backdrop-blur border border-border px-4 py-1.5 text-xs font-semibold text-secondary">
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--brand-orange)" }} />
              Web · Domain · Hosting in Ghana
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Getting Your <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>Business Online</span>
            </h1>
            <p className="mt-5 max-w-xl text-base md:text-lg text-muted-foreground">
              Affordable websites, domain registration, and hosting for small businesses and startups in Ghana. We handle the tech; you focus on growing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-95 transition"
                style={{ background: "var(--gradient-brand)" }}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border border-border bg-background hover:bg-accent transition"
              >
                Our Services
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <div><span className="text-foreground font-bold text-lg">100%</span><div>Mobile-friendly</div></div>
              <div className="h-8 w-px bg-border" />
              <div><span className="text-foreground font-bold text-lg">3–7</span><div>Days to launch</div></div>
              <div className="h-8 w-px bg-border" />
              <div><span className="text-foreground font-bold text-lg">Gh₵</span><div>Friendly pricing</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl opacity-30 blur-2xl" style={{ background: "var(--gradient-brand)" }} />
            <img
              src={heroImg}
              alt="Young Ghanaian entrepreneur working on a laptop"
              width={1600}
              height={1200}
              className="relative rounded-3xl shadow-[var(--shadow-glow)] object-cover w-full aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-background border border-border shadow-lg px-4 py-3 hidden sm:flex items-center gap-3">
              <div className="flex -space-x-2">
                {[smallBizImg, teamImg, portraitAsset.url].map((s, i) => (
                  <img key={i} src={s} alt="" className="h-8 w-8 rounded-full border-2 border-background object-cover" />
                ))}
              </div>
              <div className="text-xs">
                <div className="font-semibold">Trusted by Ghanaian SMEs</div>
                <div className="text-muted-foreground">Real businesses, real growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">What we do</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Everything you need to go live</h2>
          </div>
          <Link to="/services" className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Why Dotmira GH?</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Built for Ghanaian businesses</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-card border border-border p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-secondary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl" style={{ background: "var(--gradient-brand)" }} />
            <img src={portraitAsset.url} alt="Mariam Tahiru, Founder of Dotmira GH" className="relative rounded-3xl object-cover w-full aspect-[4/5] shadow-[var(--shadow-soft)]" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">About us</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Built by someone who believes every business deserves to be seen</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Dotmira GH was founded by Mariam Tahiru to help smallholder businesses and entrepreneurs grow, reach more customers, and build a visible presence online. We bridge the gap between small businesses and the digital world, handling the tech so you can focus on your craft.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-accent transition">
              Meet the Founder <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SNAPSHOT */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">Our work</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">Recent projects</h2>
            </div>
            <Link to="/portfolio" className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              See all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-border bg-card group">
              <div className="overflow-hidden aspect-[4/3]">
                <img src={portfolioImg} alt="Produsell Distribution website" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="text-xs text-primary font-semibold">Distribution</div>
                <h3 className="mt-1 font-semibold">Produsell Distribution</h3>
                <p className="mt-1 text-sm text-muted-foreground">A clean, professional business website for a Ghana-based distribution company.</p>
              </div>
            </div>
            {[1, 2].map((i) => (
              <div key={i} className="rounded-2xl border border-dashed border-border bg-card/50 p-6 flex flex-col items-center justify-center text-center min-h-[260px]">
                <Sparkles className="h-7 w-7 text-primary" />
                <h3 className="mt-3 font-semibold">Coming soon</h3>
                <p className="mt-1 text-sm text-muted-foreground">More projects in the works.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SNAPSHOT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Testimonials</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">What our clients say</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4 text-sm text-muted-foreground italic">"Review coming soon; we'd love to feature your story here after we work together."</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-accent" />
                <div><div className="text-sm font-semibold">Your business</div><div className="text-xs text-muted-foreground">Coming soon</div></div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Read more reviews <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center" style={{ background: "var(--gradient-brand)" }}>
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Ready to get your business online?</h2>
          <p className="mt-3 text-primary-foreground/90 max-w-xl mx-auto">Let's make it happen. Reach out today and we'll guide you through every step.</p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-background text-primary px-7 py-3 text-sm font-bold hover:scale-105 transition">
            Contact Us Today <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
