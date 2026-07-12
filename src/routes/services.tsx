import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Globe2, Sparkles, Server, Wrench, FileSpreadsheet, ArrowRight, Check } from "lucide-react";
import serviceWebsite from "@/assets/service-website.jpg";
import serviceDomain from "@/assets/service-domain.jpg";
import serviceHosting from "@/assets/service-hosting.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceExcel from "@/assets/service-excel.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Dotmira GH" },
      { name: "description", content: "Website creation, domain registration, web hosting, maintenance, and custom Excel business trackers for Ghanaian businesses." },
      { property: "og:title", content: "Our Services — Dotmira GH" },
      { property: "og:description", content: "Affordable, end-to-end web services for small businesses in Ghana." },
    ],
  }),
  component: ServicesPage,
});

const domainRows = [
  { ext: ".com", y1: "Gh₵ 460", y2: "Gh₵ 620", y3: "Gh₵ 830", tag: "Most popular" },
  { ext: ".net", y1: "Gh₵ 495", y2: "Gh₵ 700", y3: "Gh₵ 960" },
  { ext: ".org", y1: "Gh₵ 455", y2: "Gh₵ 605", y3: "Gh₵ 800" },
  { ext: ".shop", y1: "Gh₵ 365", y2: "Gh₵ 395", y3: "Gh₵ 435", tag: "Best value" },
  { ext: ".online", y1: "Gh₵ 365", y2: "Gh₵ 395", y3: "Gh₵ 435", tag: "Best value" },
  { ext: ".store", y1: "Gh₵ 365", y2: "Gh₵ 395", y3: "Gh₵ 435", tag: "Best value" },
];

function ServiceCard({ icon: Icon, num, title, image, imageAlt, children }: { icon: any; num: string; title: string; image: string; imageAlt: string; children: React.ReactNode }) {
  return (
    <section className="overflow-hidden rounded-3xl bg-card border border-border shadow-[var(--shadow-soft)]">
      <div className="relative aspect-[16/7] w-full overflow-hidden">
        <img src={image} alt={imageAlt} width={1280} height={768} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)" }} />
      </div>
      <div className="flex items-start gap-5 p-7 md:p-10">
        <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
          <Icon className="h-7 w-7" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold text-primary uppercase tracking-wider">Service {num}</div>
          <h2 className="mt-1 text-2xl md:text-3xl font-bold">{title}</h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <Layout>
      <PageHero eyebrow="Our Services" title="Everything you need to launch and grow" subtitle="From your first domain to a fully maintained website: we cover it all." />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 md:py-20 space-y-8">
        <ServiceCard icon={Globe2} num="01" title="Website Creation" image={serviceWebsite} imageAlt="Web designer building a colorful website on a laptop">
          <p>Dotmira GH designs and builds clean, professional, and mobile-friendly websites tailored to each client's business. Whether it is a simple one-page site or a multi-page business website, every build is customised to reflect the client's brand, communicate their services clearly, and attract the right customers.</p>
          <p>The process covers everything from design and layout to content placement and publishing, so the client does not have to worry about a thing.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Request a quote <ArrowRight className="h-4 w-4" /></Link>
        </ServiceCard>

        <ServiceCard icon={Sparkles} num="02" title="Domain Registration" image={serviceDomain} imageAlt="Glowing connected globe representing internet domains">
          <p>A domain name is a business's unique address on the internet: for example, <span className="text-foreground font-medium">yourbusiness.com</span>. Dotmira GH helps clients choose, register, and manage the right domain name for their business. A good domain name builds credibility, makes a business easier to find online, and gives it a professional identity.</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-foreground" style={{ background: "var(--gradient-brand)", color: "white" }}>
                  <tr>
                    <th className="text-left font-semibold px-5 py-3">Extension</th>
                    <th className="text-left font-semibold px-5 py-3">1 Year</th>
                    <th className="text-left font-semibold px-5 py-3">2 Years</th>
                    <th className="text-left font-semibold px-5 py-3">3 Years</th>
                  </tr>
                </thead>
                <tbody>
                  {domainRows.map((r, i) => (
                    <tr key={r.ext} className={i % 2 === 0 ? "bg-background" : "bg-muted/40"}>
                      <td className="px-5 py-3.5 font-semibold text-foreground">
                        <span>{r.ext}</span>
                        {r.tag && <span className="ml-2 inline-block rounded-full bg-accent text-secondary text-[10px] font-semibold px-2 py-0.5">{r.tag}</span>}
                      </td>
                      <td className="px-5 py-3.5">{r.y1}</td>
                      <td className="px-5 py-3.5">{r.y2}</td>
                      <td className="px-5 py-3.5">{r.y3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs">All domains include free privacy protection and a free coming-soon page.</p>
        </ServiceCard>

        <ServiceCard icon={Server} num="03" title="Web Hosting" image={serviceHosting} imageAlt="Modern server room with warm purple and orange lighting">
          <p>Web hosting is the service that makes a website accessible on the internet. Think of it as renting space on a server where all the website's files, images, and content are stored. Without hosting, a website cannot be seen online. Dotmira GH sets up reliable, fast, and secure hosting for every client's website and handles the technical configuration so the client's site is live and running without any hassle.</p>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border p-5 bg-background">
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">Starter</div>
              <div className="mt-2 text-3xl font-bold text-foreground">Gh₵ 380<span className="text-sm font-medium text-muted-foreground">/year</span></div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Reliable hosting setup</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> 1-year duration</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> SSL & basic security</li>
              </ul>
            </div>
            <div className="rounded-2xl p-5 text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
              <div className="text-xs uppercase tracking-wider text-white/80 font-semibold">Standard</div>
              <div className="mt-2 text-3xl font-bold">Gh₵ 520<span className="text-sm font-medium text-white/80">/year</span></div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 mt-0.5" /> Faster server resources</li>
                <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 mt-0.5" /> 1-year duration</li>
                <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 mt-0.5" /> SSL, email, daily backups</li>
              </ul>
            </div>
          </div>
        </ServiceCard>

        <ServiceCard icon={Wrench} num="04" title="Website Maintenance" image={serviceMaintenance} imageAlt="Developer maintaining a website on a laptop">
          <p>A website is not a one-time project; it needs to be kept updated, secure, and running smoothly over time. Dotmira GH offers maintenance support to ensure that client websites remain functional, up to date, and performing well. This includes content updates, fixing broken links, security checks, and general upkeep so the website always makes a great first impression.</p>
        </ServiceCard>

        <ServiceCard icon={FileSpreadsheet} num="05" title="Excel Business Tracker" image={serviceExcel} imageAlt="Small business owner reviewing an Excel tracker on a laptop">
          <p>Dotmira GH designs fully customised Microsoft Excel spreadsheets to help small businesses track their sales, customers, suppliers, inventory, and expenses, all in one organised file. No expensive software needed.</p>
          <Link to="/excel-tracker" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Learn more <ArrowRight className="h-4 w-4" /></Link>
        </ServiceCard>
      </div>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 md:pb-24">
        <div className="rounded-3xl p-10 text-center" style={{ background: "var(--gradient-brand)" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">Not sure where to start?</h2>
          <p className="mt-2 text-primary-foreground/90">Tell us about your business and we'll recommend the best package for you.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-background text-primary px-6 py-3 text-sm font-bold hover:scale-105 transition">Get a free quote <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </Layout>
  );
}