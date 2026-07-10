import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ExternalLink, Sparkles, ArrowRight, Check } from "lucide-react";
import portfolioImg from "@/assets/portfolio-mockup.jpg";
import excelFinancialTrackingImg from "@/assets/excel-financial-tracking.jpg";

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
              <a href="https://produselldistribution.lovable.app/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Visit website <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
          <article className="rounded-2xl overflow-hidden border border-border bg-card group">
            <div className="overflow-hidden aspect-[4/3]">
              <img src={excelFinancialTrackingImg} alt="Excel Financial Tracking System dashboard for Produsell Distribution" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="text-xs text-primary font-semibold uppercase tracking-wider">Excel Business Tracker</div>
              <h3 className="mt-1.5 font-bold text-lg">Excel Financial Tracking System</h3>
              <p className="mt-2 text-sm text-muted-foreground">Produsell Distribution Limited is a Kumasi-based distributor of natural and agricultural products including coconut oil, cashew nuts, roasted groundnuts, and Tom Brown. As the business grew, they needed a reliable and organised way to track their financial performance, manage stock, and monitor cash flow without expensive accounting software.</p>
              <p className="mt-2 text-sm text-muted-foreground">Dotmira GH designed and developed a comprehensive multi-sheet Excel Financial Tracking System tailored specifically to Produsell's products, suppliers, and customers. The system gives the business a full picture of its financial health in one organised file.</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />Product Catalogue with wholesale and retail pricing</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />Customer Directory for managing client records</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />Supplier Directory for tracking vendor information</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />Daily Sales Log with automated revenue and cost of goods sold calculations</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />Stock Purchases and Operating Expenses tracker</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />Debtors Management for customers owing payments</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />Creditors Management for amounts owed to suppliers</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />Stock Inventory Tracker with reorder level monitoring</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />Monthly Profit and Loss Summary with gross and net margin analysis</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />Cash Flow Tracker for monitoring money in and out of the business</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground"><strong className="text-foreground">Tools Used:</strong> Microsoft Excel</p>
              <p className="mt-2 text-sm text-muted-foreground"><strong className="text-foreground">Outcome:</strong> The system enables Produsell Distribution Limited to monitor daily sales, track stock levels, manage debtors and creditors, and generate monthly profit and loss reports; all with minimal manual input and no need for expensive accounting software.</p>
              <Link to="/excel-tracker" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Learn About This Service <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
          {[1, 2].map((i) => (
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