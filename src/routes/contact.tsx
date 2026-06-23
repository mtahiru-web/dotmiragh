import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dotmira GH" },
      { name: "description", content: "Get in touch with Dotmira GH to start building your business's online presence." },
      { property: "og:title", content: "Contact — Dotmira GH" },
      { property: "og:description", content: "Reach out via email, phone, or WhatsApp." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const biz = fd.get("business");
    const email = fd.get("email");
    const phone = fd.get("phone");
    const service = fd.get("service");
    const message = fd.get("message");
    const body = encodeURIComponent(`Name: ${name}\nBusiness: ${biz}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\n${message}`);
    window.location.href = `mailto:marietahiru679@gmail.com?subject=${encodeURIComponent("New enquiry from " + name)}&body=${body}`;
    setSent(true);
  };

  return (
    <Layout>
      <PageHero eyebrow="Contact" title="Get in touch" subtitle="Ready to get your business online? Reach out and the Dotmira GH team will get back to you as soon as possible." />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 rounded-3xl bg-card border border-border p-6 md:p-8 shadow-[var(--shadow-soft)]">
          {sent ? (
            <div className="text-center py-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-secondary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Message ready to send!</h3>
              <p className="mt-2 text-muted-foreground">Your email client should have opened. If not, please reach us on WhatsApp.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" required />
              <Field label="Business name" name="business" />
              <Field label="Email address" name="email" type="email" required />
              <Field label="Phone / WhatsApp" name="phone" type="tel" required />
              <div className="sm:col-span-2">
                <Label>Service interested in</Label>
                <select name="service" required className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select a service…</option>
                  <option>Website Creation</option>
                  <option>Domain Registration</option>
                  <option>Web Hosting</option>
                  <option>Excel Business Tracker</option>
                  <option>Maintenance</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label>Message</Label>
                <textarea name="message" rows={5} required className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>
              <div className="sm:col-span-2 flex flex-wrap gap-3 pt-1">
                <button type="submit" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                  Send Message <Send className="h-4 w-4" />
                </button>
                <a href="https://wa.me/233272178796" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold">
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>

        <aside className="lg:col-span-2 space-y-4">
          <ContactItem icon={Mail} label="Email" value="marietahiru679@gmail.com" href="mailto:marietahiru679@gmail.com" />
          <ContactItem icon={Phone} label="Phone" value="0272178796" href="tel:+233272178796" />
          <ContactItem icon={MessageCircle} label="WhatsApp" value="0272178796" href="https://wa.me/233272178796" />
          <ContactItem icon={MapPin} label="Location" value="Accra Newtown, Ghana" />
        </aside>
      </section>
    </Layout>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium text-foreground">{children}</label>;
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}{required && <span className="text-primary"> *</span>}</Label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="rounded-2xl bg-card border border-border p-5 flex items-start gap-4 hover:shadow-[var(--shadow-soft)] transition">
      <div className="h-11 w-11 shrink-0 rounded-xl flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
        <div className="mt-0.5 font-semibold text-foreground break-all">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">{inner}</a> : inner;
}