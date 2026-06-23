import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Check, MessageCircle, ShoppingBag, Users, Truck, Boxes, Wallet, BarChart3 } from "lucide-react";
import excelImg from "@/assets/excel-tracker.jpg";

export const Route = createFileRoute("/excel-tracker")({
  head: () => ({
    meta: [
      { title: "Excel Business Tracker — Dotmira GH" },
      { name: "description", content: "Custom Microsoft Excel business trackers to manage sales, customers, suppliers, inventory, and expenses." },
      { property: "og:title", content: "Excel Business Tracker — Dotmira GH" },
      { property: "og:description", content: "Take control of your business records — the smart way." },
    ],
  }),
  component: ExcelPage,
});

const sheets = [
  { icon: ShoppingBag, title: "Sales Tracker", desc: "Records daily, weekly, or monthly sales and monitors revenue at a glance." },
  { icon: Users, title: "Customer Records", desc: "Keeps a clean, organised database of customers and their purchase history." },
  { icon: Truck, title: "Supplier Records", desc: "Tracks suppliers, orders, and delivery details in one place." },
  { icon: Boxes, title: "Inventory / Stock Sheet", desc: "Monitors stock levels and flags when it is time to reorder." },
  { icon: Wallet, title: "Expense Tracker", desc: "Records business expenses and shows where money is going." },
  { icon: BarChart3, title: "Monthly Summary Dashboard", desc: "A visual overview of performance with charts and key figures." },
];

const packages = [
  { name: "Basic", price: "GHS 150", items: ["Sales sheet", "Customer sheet"] },
  { name: "Standard", price: "GHS 250", items: ["Sales sheet", "Customer sheet", "Supplier sheet", "Inventory sheet"], featured: true },
  { name: "Premium", price: "GHS 380", items: ["All sheets", "Dashboard", "Monthly Summary"] },
];

function ExcelPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Excel Business Tracker"
        title="Take control of your business records — the smart way"
        subtitle="Running a business without proper records is like driving without a dashboard. You might be moving, but you have no idea how fast, how far, or when something is about to go wrong. That is where the Dotmira GH Excel Business Tracker comes in."
      />

      {/* What is it */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">What it is</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">A spreadsheet built around your business</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">The Dotmira GH Excel Business Tracker is a fully customised Microsoft Excel spreadsheet designed to help small businesses and entrepreneurs organise, monitor, and manage their business data — all in one place, without the need for expensive accounting software.</p>
          <p className="mt-3 text-muted-foreground leading-relaxed">Each tracker is built specifically around the client's business — their products, their customers, their suppliers, and their goals. No two trackers are the same.</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl opacity-25 blur-2xl" style={{ background: "var(--gradient-brand)" }} />
          <img src={excelImg} alt="Excel dashboard with sales charts" loading="lazy" className="relative rounded-3xl w-full aspect-[4/3] object-cover shadow-[var(--shadow-soft)]" />
        </div>
      </section>

      {/* What's included */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">What's included</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Six sheets to run your whole operation</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sheets.map(({ icon: Icon, title, desc }) => (
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

      {/* Who & Why */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-card p-7">
          <h3 className="text-xl font-bold">Who is this for?</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {["Market traders and shop owners", "Startups and small businesses", "Entrepreneurs managing their own records", "Anyone moving from paper records to a clean digital system"].map((x) => (
              <li key={x} className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />{x}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-7">
          <h3 className="text-xl font-bold">Why Excel?</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {["No internet connection required after setup", "Compatible with any laptop or computer", "Easy to use — no technical skills needed", "Fully customised to your specific business", "One-time cost — no monthly subscriptions"].map((x) => (
              <li key={x} className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />{x}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 md:pb-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Pricing</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">One-time cost. Yours forever.</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {packages.map((p) => (
            <div key={p.name} className={`rounded-2xl p-7 border ${p.featured ? "border-transparent text-primary-foreground" : "border-border bg-card"}`} style={p.featured ? { background: "var(--gradient-brand)" } : undefined}>
              {p.featured && <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">Most popular</div>}
              <div className="text-sm font-semibold uppercase tracking-wider">{p.name}</div>
              <div className={`mt-2 text-4xl font-bold ${p.featured ? "" : "text-foreground"}`}>{p.price}</div>
              <ul className="mt-5 space-y-2 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" />{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-muted-foreground">All packages include one free revision after delivery.</p>

        <div className="mt-12 rounded-3xl p-10 text-center bg-card border border-border">
          <h3 className="text-2xl font-bold">Ready to get started?</h3>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Reach out via WhatsApp and we'll build a tracker tailored to fit your business perfectly.</p>
          <a href="https://wa.me/233272178796" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-bold hover:scale-105 transition">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
}