
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  business TEXT CHECK (business IS NULL OR char_length(business) <= 120),
  rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 5 AND 1000),
  approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.reviews TO anon;
GRANT SELECT, INSERT ON public.reviews TO authenticated;
GRANT ALL ON public.reviews TO service_role;

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Anyone can read approved reviews only
CREATE POLICY "Public can read approved reviews"
ON public.reviews FOR SELECT
TO anon, authenticated
USING (approved = true);

-- Anyone can submit a review, but it must start unapproved
CREATE POLICY "Anyone can submit a review as unapproved"
ON public.reviews FOR INSERT
TO anon, authenticated
WITH CHECK (approved = false);

CREATE INDEX reviews_approved_created_idx ON public.reviews (approved, created_at DESC);
