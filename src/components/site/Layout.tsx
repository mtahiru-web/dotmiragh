import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin } from "lucide-react";
import logoAsset from "@/assets/dotmira-logo.png.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/excel-tracker", label: "Excel Tracker" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

const WA_URL = "https://wa.me/233272178796";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logoAsset.url} alt="Dotmira GH" className="h-10 w-10 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="text-base font-bold tracking-tight">
              <span className="text-foreground/70 font-light">dot</span>
              <span className="text-primary">mira</span>
              <span className="text-muted-foreground text-xs ml-0.5">GH</span>
            </div>
            <div className="text-[10px] text-muted-foreground -mt-0.5">Getting your business online</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary bg-accent" }}
              className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95 transition"
            style={{ background: "var(--gradient-brand)" }}
          >
            Get Started
          </Link>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md hover:bg-accent"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary bg-accent" }}
                className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-accent"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-brand)" }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="Dotmira GH" className="h-11 w-11 rounded-full" />
            <div>
              <div className="text-base font-bold">
                <span className="font-light text-foreground/70">dot</span>
                <span className="text-primary">mira</span>
                <span className="text-xs text-muted-foreground ml-0.5">GH</span>
              </div>
              <div className="text-[11px] text-muted-foreground">Web · Domain · Hosting</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Affordable websites, domains, and hosting for small businesses and startups in Ghana.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={WA_URL} aria-label="WhatsApp" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-background border border-border hover:text-primary transition"><MessageCircle className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/dotmiragh" aria-label="Instagram" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-background border border-border hover:text-primary transition"><Instagram className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/company/dotmiragh/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-background border border-border hover:text-primary transition"><Linkedin className="h-4 w-4" /></a>
            
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Quick links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-primary transition">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Website Creation</li>
            <li>Domain Registration</li>
            <li>Web Hosting</li>
            <li>Website Maintenance</li>
            <li>Excel Business Tracker</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href="mailto:dotmiragh@gmail.com" className="hover:text-primary break-all">dotmiragh@gmail.com</a></li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href="tel:+233272178796" className="hover:text-primary">0272178796</a></li>
            <li className="flex items-start gap-2"><MessageCircle className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href={WA_URL} target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp chat</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />Accra Newtown, Ghana</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <span>© 2026 Dotmira GH. All rights reserved.</span>
          <span>Crafted with care in Accra, Ghana.</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
    </a>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-40 blur-3xl" style={{ background: "var(--brand-orange-soft)" }} />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: "var(--brand-purple)" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 text-center">
        {eyebrow && <div className="inline-block mb-4 rounded-full bg-background/70 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary border border-border">{eyebrow}</div>}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}