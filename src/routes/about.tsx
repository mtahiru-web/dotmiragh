import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  Accessibility,
  Award,
  BarChart3,
  Coins,
  Eye,
  Globe2,
  Lightbulb,
  Scale,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Wand2,
} from "lucide-react";
import portraitAsset from "@/assets/mariam-portrait.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Dotmira GH" },
      {
        name: "description",
        content:
          "Dotmira GH helps small businesses in Ghana grow with affordable websites, domains, and hosting.",
      },
      { property: "og:title", content: "About Dotmira GH" },
      {
        property: "og:description",
        content:
          "Affordable web services for small businesses and startups in Ghana.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Coins,
    title: "Affordability",
    desc: "We believe cost should never be a barrier to growth. Our services are priced with small businesses in mind.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    desc: "We make web services simple and easy to understand for everyone, regardless of their technical knowledge.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We are honest, transparent, and reliable in everything we do.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We deliver quality work on every project, no matter the size.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "We are committed to the continuous growth of our clients and ourselves.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We stay current with trends and tools to offer the best solutions to our clients.",
  },
];

const pillars = [
  {
    icon: Users,
    title: "People First",
    desc: "Every client is more than a transaction. We take time to understand each business, its goals, and its story before we build.",
  },
  {
    icon: Globe2,
    title: "Digital Inclusion",
    desc: "We are passionate about bringing more Ghanaian businesses into the global digital space, particularly those left behind due to cost or awareness.",
  },
  {
    icon: Wand2,
    title: "Simplicity",
    desc: "We take the complexity out of web services. From domain registration to website launch, we make the process smooth and stress-free.",
  },
  {
    icon: Scale,
    title: "Affordability Without Compromise",
    desc: "Affordable does not mean cheap. We offer competitive pricing while maintaining high standards of quality and professionalism.",
  },
  {
    icon: BarChart3,
    title: "Impact-Driven Growth",
    desc: "Every website we build is a step toward greater visibility, more customers, and a stronger business. We measure our success by the growth of the businesses we serve.",
  },
];

function AboutPage() {
  return (
    <Layout>
      {/* Section 1 — About Dotmira GH */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-soft)" }}
        />
        <div
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--brand-orange)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--brand-purple)" }}
        />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
            About Dotmira GH
          </h2>
          <div className="space-y-5 text-[15px] md:text-base text-muted-foreground leading-relaxed">
            <p>
              At Dotmira GH, we believe every business, no matter how small,
              deserves a place on the internet.
            </p>
            <p>
              Dotmira GH was founded with a strong desire to help smallholder
              businesses and entrepreneurs grow, improve their customer reach,
              and establish a visible presence online. It simply started as
              helping a friend build a website for his startup business in June
              2026. That one experience sparked something bigger; the
              realisation that there were countless other businesses out there
              with the same need, and not enough affordable solutions to meet
              it.
            </p>
            <p>
              We noticed a pattern among smallholder and startup businesses in
              Ghana; most of them did not have websites. Not because they were
              not good at what they do, but because of the cost, or simply
              because they had not yet seen the need. Many were comfortable
              with the customers they already had, and contentment is a good
              thing. But growth and improvement are non-negotiable for any
              business that wants to thrive in the long run.
            </p>
            <p>
              That is why Dotmira GH exists; to bridge the gap between small
              businesses and the digital world. We offer affordable website
              packages, domain registration, and hosting services designed
              specifically for startups and growing businesses that are ready
              to take that next step. We handle all the technical work so clients
              can focus on what they do best; running their business.
            </p>
            <p>
              Whether just starting out or looking to expand reach, Dotmira GH is
              here to get businesses online and get them seen.
            </p>
            <p className="italic text-foreground">
              Your business deserves to be part of the global space. Let us make
              that happen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Vision, Mission, Core Values & Pillars */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Vision, Mission, Core Values &amp; Pillars
          </h2>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-2xl bg-card border border-border p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-secondary mb-5">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-xl mb-3">Vision</h3>
            <p className="text-muted-foreground leading-relaxed italic">
              "A Ghana where every business, regardless of size, has a strong
              and visible presence on the internet."
            </p>
          </div>
          <div
            className="rounded-2xl p-8 text-primary-foreground"
            style={{ background: "var(--gradient-brand)" }}
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-5">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl mb-3 text-primary-foreground">Mission</h3>
            <p className="text-primary-foreground/90 leading-relaxed italic">
              "To provide affordable, high-quality web services which includes
              website creation, domain registration, and hosting, that give
              small businesses and startups the online presence they deserve."
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl">Core Values</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-card border border-border p-6 hover:shadow-[var(--shadow-soft)] transition"
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4">{title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl">Pillars That Drive Us</h3>
          </div>
          <div className="max-w-5xl mx-auto space-y-4">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="rounded-2xl bg-card border border-border p-6 md:p-7 flex gap-5 items-start"
              >
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-secondary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-primary">
                    0{i + 1}
                  </div>
                  <h4 className="mt-1">{title}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Meet the Founder */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <img
                  src={portraitAsset.url}
                  alt="Founder photo — Mariam Tahiru"
                  className="relative rounded-3xl w-full aspect-[4/5] object-cover shadow-[var(--shadow-soft)]"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl md:text-3xl">Mariam Tahiru</h3>
                <p className="mt-1 text-sm md:text-base text-muted-foreground italic">
                  Founder, Dotmira GH
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold">Meet the Founder</h2>
              <p>
                Mariam Tahiru is a passionate Agribusiness professional and the
                founder of Dotmira GH. She holds a BSc. in Agribusiness
                Management from the Kwame Nkrumah University of Science and
                Technology (KNUST), graduating as one of the best-performing
                students in her faculty. Her professional background spans the
                Ministry of Food and Agriculture and the Environmental
                Protection Agency, where she built hands-on experience in data
                management, administrative support, reporting, and stakeholder
                coordination.
              </p>
              <p>
                She also works as a freelance Financial Systems Designer,
                building customised Excel tracking systems for small and
                startup businesses; helping entrepreneurs manage their finances
                with clarity and confidence.
              </p>
              <p>
                It is this blend of analytical skills, business knowledge, and a
                genuine passion for small business growth that led her to found
                Dotmira GH. After building her first client website for Produsell
                Distribution Ltd in June 2026, she realised how transformative an
                online presence could be for a small business; and set out to
                make that opportunity available to as many businesses as
                possible, at a price they could afford.
              </p>
              <p>Dotmira GH is her answer to that need.</p>
              <blockquote className="border-l-4 border-primary pl-5 py-2 italic text-foreground">
                "I love growth and improvement; and I want to help every
                business I work with experience the same."
                <footer className="mt-2 text-sm text-muted-foreground not-italic">
                  — Mariam Tahiru, Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
