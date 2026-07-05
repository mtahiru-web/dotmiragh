import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Layout, PageHero } from "@/components/site/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Star, Loader2, MessageCircle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Dotmira GH" },
      { name: "description", content: "Real feedback from real businesses we have helped get online." },
      { property: "og:title", content: "Reviews — Dotmira GH" },
      { property: "og:description", content: "What our clients say about Dotmira GH." },
    ],
  }),
  component: ReviewsPage,
});

type Review = {
  id: string;
  name: string;
  business: string | null;
  rating: number;
  message: string;
  created_at: string;
};

const reviewSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  business: z.string().trim().max(120, "Business name is too long").optional(),
  rating: z.number().int().min(1, "Please select a rating").max(5),
  message: z.string().trim().min(5, "Please write a short review").max(1000, "Review is too long"),
});

async function fetchApprovedReviews(): Promise<Review[]> {
  const { data, error } = await supabase
    .from("reviews")
    .select("id, name, business, rating, message, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(60);
  if (error) throw error;
  return (data ?? []) as Review[];
}

function ReviewsPage() {
  const queryClient = useQueryClient();
  const { data: reviews, isLoading, isError } = useQuery({
    queryKey: ["reviews", "approved"],
    queryFn: fetchApprovedReviews,
  });

  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async () => {
      const parsed = reviewSchema.safeParse({
        name,
        business: business.trim() || undefined,
        rating,
        message,
      });
      if (!parsed.success) {
        throw new Error(parsed.error.issues[0]?.message ?? "Please check your review");
      }
      const { error } = await supabase.from("reviews").insert({
        name: parsed.data.name,
        business: parsed.data.business ?? null,
        rating: parsed.data.rating,
        message: parsed.data.message,
        approved: false,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      setSubmitted(true);
      setName("");
      setBusiness("");
      setRating(0);
      setMessage("");
      queryClient.invalidateQueries({ queryKey: ["reviews", "approved"] });
      toast.success("Thanks! Your review was submitted and will appear once approved.");
    },
    onError: (err: Error) => {
      toast.error(err.message || "Something went wrong. Please try again.");
    },
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutate();
  }

  return (
    <Layout>
      <PageHero eyebrow="Reviews" title="What our clients say" subtitle="Real feedback from real businesses we have helped get online." />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        {isLoading ? (
          <div className="flex items-center justify-center py-12 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        ) : isError ? (
          <div className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">
            Reviews are temporarily unavailable. Please check back shortly.
          </div>
        ) : reviews && reviews.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <article key={r.id} className="rounded-2xl border border-border bg-card p-6 flex flex-col">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`h-4 w-4 ${j < r.rating ? "fill-current" : "opacity-30"}`} />
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground italic flex-1">"{r.message}"</p>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold" style={{ background: "var(--gradient-brand)" }}>
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{r.name}</div>
                    {r.business && <div className="text-xs text-muted-foreground">{r.business}</div>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
            <p className="text-muted-foreground">No reviews yet. Be the first to share your experience below.</p>
          </div>
        )}

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="text-xs font-semibold text-primary uppercase tracking-wider">Leave a review</div>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold">Worked with us? Tell others about it.</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Your feedback helps other small businesses in Ghana decide with confidence. Submitted reviews are checked before appearing on this page.
            </p>
            <a
              href="https://wa.me/233272178796?text=I'd%20like%20to%20leave%20a%20review%20for%20Dotmira%20GH"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <MessageCircle className="h-4 w-4" /> Prefer WhatsApp? Send it to us there.
            </a>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5 shadow-[var(--shadow-soft)]">
            {submitted && (
              <div className="flex items-start gap-3 rounded-xl bg-accent/60 p-4 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-foreground">
                  <div className="font-semibold">Thank you.</div>
                  <p className="text-muted-foreground">Your review was submitted and will appear on this page once approved.</p>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                Your name <span className="text-primary">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="e.g. Ama Boateng"
              />
            </div>

            <div>
              <label htmlFor="business" className="block text-sm font-semibold text-foreground">
                Business name <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <input
                id="business"
                type="text"
                maxLength={120}
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="e.g. Ama's Bakery"
              />
            </div>

            <div>
              <span className="block text-sm font-semibold text-foreground">
                Rating <span className="text-primary">*</span>
              </span>
              <div className="mt-2 flex gap-1.5" onMouseLeave={() => setHoverRating(0)}>
                {[1, 2, 3, 4, 5].map((n) => {
                  const active = (hoverRating || rating) >= n;
                  return (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRating(n)}
                      onMouseEnter={() => setHoverRating(n)}
                      aria-label={`${n} star${n > 1 ? "s" : ""}`}
                      className="p-1 transition-transform hover:scale-110"
                    >
                      <Star className={`h-7 w-7 ${active ? "text-primary fill-current" : "text-muted-foreground/40"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                Your review <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                required
                minLength={5}
                maxLength={1000}
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                placeholder="Tell us about your experience working with Dotmira GH..."
              />
              <div className="mt-1 text-right text-xs text-muted-foreground">{message.length}/1000</div>
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-primary-foreground disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02] transition"
              style={{ background: "var(--gradient-brand)" }}
            >
              {mutation.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
              {mutation.isPending ? "Submitting..." : "Submit Review"}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Reviews are moderated before appearing on the site.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
}