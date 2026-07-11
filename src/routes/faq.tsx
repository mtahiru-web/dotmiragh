import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Dotmira GH" },
      { name: "description", content: "Answers to common questions about our website, domain, hosting, and Excel tracker services." },
      { property: "og:title", content: "FAQ — Dotmira GH" },
      { property: "og:description", content: "Frequently asked questions about Dotmira GH services." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "What services does Dotmira GH offer?", a: "Dotmira GH offers website creation, domain registration, web hosting, website maintenance, and Excel business tracker design for small businesses and startups." },
  { q: "How much does a website cost?", a: "Pricing depends on the type and complexity of the website needed. Contact us via WhatsApp or email for a personalised quote." },
  { q: "How long does it take to build a website?", a: "A basic website typically takes 3 to 7 business days. Larger or more complex websites may take longer. The timeline is discussed and agreed upon before work begins." },
  { q: "Do I need technical knowledge to manage my website?", a: "No. Dotmira GH handles all the technical work. After delivery, basic guidance is provided so the client can make simple updates if needed." },
  { q: "What is a domain name and do I need one?", a: "A domain name is your website's unique address on the internet, such as yourbusiness.com. Yes, every website needs a domain name. Dotmira GH can help you choose and register the right one." },
  { q: "What is web hosting and why do I need it?", a: "Web hosting is the service that stores your website's files and makes it accessible online. Without hosting, your website cannot be seen on the internet. Dotmira GH sets this up for you." },
  { q: "Can I get just a domain name without a website?", a: "Yes. Domain registration is available as a standalone service." },
  { q: "What is the Excel Business Tracker and how is it different from regular spreadsheets?", a: "The Dotmira GH Excel Business Tracker is fully customised to your specific business. Unlike generic spreadsheets, it is built around your actual products, customers, and suppliers, making it immediately useful from day one." },
  { q: "How do I pay for services?", a: "Payment details are shared upon agreement. Mobile Money and bank transfer options are available." },
  { q: "How do I get started?", a: "Simply reach out via WhatsApp at 0272178796 or send an email to dotmiragh@gmail.com and the team will guide you through the process." },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" subtitle="Everything you need to know before getting started." />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-20">
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-accent/50 transition"
                >
                  <span className="font-semibold">{f.q}</span>
                  <span className="shrink-0 h-7 w-7 rounded-full flex items-center justify-center bg-accent text-secondary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}