import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Heart, Eye, Target, Sparkles, ShieldCheck, Award, TrendingUp, Lightbulb, Users, Globe2, Wand2, Coins, BarChart3, ArrowRight } from "lucide-react";
import portraitAsset from "@/assets/mariam-portrait.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dotmira GH" },
      { name: "description", content: "Dotmira GH was founded by Mariam Tahiru to help small businesses in Ghana grow with affordable web services." },
      { property: "og:title", content: "About Dotmira GH" },
      { property: "og:description", content: "Founded by Mariam Tahiru. Helping Ghanaian businesses get online, affordably and beautifully." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Coins, title: "Affordability", desc: "Cost should never be a barrier to growth. Our services are priced with small businesses in mind." },
  { icon: Heart, title: "Accessibility", desc: "We make web services simple and easy to understand for everyone, regardless of technical knowledge." },
  { icon: ShieldCheck, title: "Integrity", desc: "We are honest, transparent, and reliable in everything we do." },
  { icon: Award, title: "Excellence", desc: "We deliver quality work on every project, no matter the size." },
  { icon: TrendingUp, title: "Growth", desc: "We are committed to the continuous growth of our clients and ourselves." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay current with trends and tools to offer the best solutions to our clients." },
];

const pillars = [
  { icon: Users, title: "People First", desc: "Every client is more than a transaction. We take time to understand each business, its goals, and its story before we build." },
  { icon: Globe2, title: "Digital Inclusion", desc: "We are passionate about bringing more Ghanaian businesses into the global digital space, particularly those left behind by cost or awareness." },
  { icon: Wand2, title: "Simplicity", desc: "We take the complexity out of web services. From domain registration to website launch, we make the process smooth and stress-free." },
  { icon: Sparkles, title: "Affordability Without Compromise", desc: "Affordable does not mean cheap. We offer competitive pricing while maintaining high standards of quality and professionalism." },
  { icon: BarChart3, title: "Impact-Driven Growth", desc: "Every website we build is a step toward greater visibility, more customers, and a stronger business. We measure our success by the growth of the businesses we serve." },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero eyebrow="Our Story" title="About Dotmira GH" subtitle="Every business, no matter how small, deserves a place on the internet." />

      {/* Story */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-20 space-y-5 text-[15px] md:text-base text-muted-foreground leading-relaxed">
        <p>At Dotmira GH, we believe every business, no matter how small, deserves a place on the internet.</p>
        <p>Dotmira GH was founded by <strong className="text-foreground">Mariam Tahiru</strong>, driven by a strong desire to help smallholder businesses and entrepreneurs grow, improve their customer reach, and establish a visible presence online. It simply started as helping a friend build a website for his startup business in June 2026. That one experience sparked something bigger: the realisation that there were countless other businesses out there with the same need, and not enough affordable solutions to meet it.</p>
        <p>We noticed a pattern among smallholder and startup businesses in Ghana: most of them did not have websites. Not because they were not good at what they do, but because of the cost, or simply because they had not yet seen the need. Many were comfortable with the customers they already had, and contentment is a good thing. But as Mariam always says, being comfortable with where you are today does not mean you stop there. Growth and improvement are non-negotiable for any business that wants to thrive in the long run.</p>
        <p>That is why Dotmira GH exists: to bridge the gap between small businesses and the digital world. We offer affordable website packages, domain registration, and hosting services designed specifically for startups and growing businesses that are ready to take that next step. We handle all the technical work so you can focus on what you do best: running your business.</p>
        <p>Whether you are just starting out or looking to expand your reach, Dotmira GH is here to get you online and get you seen.</p>
        <p className="text-foreground font-semibold">Your business deserves to be part of the global space. Let us make that happen.</p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-card border border-border p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-secondary"><Eye className="h-6 w-6" /></div>
            <h3 className="mt-5 text-xl font-bold">Our Vision</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">A Ghana where every business, regardless of size, has a strong and visible presence on the internet.</p>
          </div>
          <div className="rounded-2xl p-8 text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20"><Target className="h-6 w-6" /></div>
            <h3 className="mt-5 text-xl font-bold">Our Mission</h3>
            <p className="mt-3 text-primary-foreground/90 leading-relaxed">To provide affordable, high-quality web services, including website creation, domain registration, and hosting, that give small businesses and startups the online presence they deserve.</p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Core Values</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">What we stand for</h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-card border border-border p-6 hover:shadow-[var(--shadow-soft)] transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Pillars</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">What drives us</h2>
          </div>
          <div className="mt-10 space-y-4">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="rounded-2xl bg-card border border-border p-6 md:p-7 flex gap-5 items-start">
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-secondary"><Icon className="h-6 w-6" /></div>
                <div className="min-w-0">
                  <div className="text-xs text-primary font-semibold">0{i + 1}</div>
                  <h3 className="mt-1 font-semibold text-lg">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl" style={{ background: "var(--gradient-brand)" }} />
            <img src={portraitAsset.url} alt="Mariam Tahiru" className="relative rounded-3xl w-full aspect-[4/5] object-cover shadow-[var(--shadow-soft)]" />
            <div className="mt-4 text-center">
              <div className="font-bold">Mariam Tahiru</div>
              <div className="text-sm text-muted-foreground">Founder, Dotmira GH</div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Meet the Founder</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Mariam Tahiru</h2>
            <p>Mariam Tahiru is the founder of Dotmira GH and a passionate advocate for small business growth and digital inclusion. She holds a BSc. in Agribusiness Management from the Kwame Nkrumah University of Science and Technology (KNUST), where she developed a strong foundation in data analysis, business operations, and supply chain management. Her professional journey has taken her through the Ministry of Food and Agriculture and the Environmental Protection Agency, where she gained hands-on experience in data tracking, reporting, stakeholder coordination, and administrative management.</p>
            <p>Beyond her professional background, Mariam is someone who genuinely believes in growth: personal growth, business growth, and the kind of growth that happens when people are given the right tools and opportunities to move forward.</p>
            <p>Dotmira GH was born from that belief. Mariam started it after helping a friend build a website for his startup, and realised how many small businesses in Ghana were missing out on the internet simply because of cost or awareness. She knew she could change that, one website at a time.</p>
            <p>When she is not building websites or registering domains for clients, Mariam designs Excel business trackers to help entrepreneurs manage their records properly, tutors students in Mathematics, and is working toward her ICAG accounting certification, because she believes in practising what she preaches: never stop growing.</p>
            <Link to="/contact" className="mt-2 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
              Work with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}