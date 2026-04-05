CREATE TABLE public.valuation_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  address TEXT NOT NULL,
  property_type TEXT NOT NULL DEFAULT 'maison',
  name TEXT NOT NULL,
  contact TEXT NOT NULL,
  notes TEXT,
  source TEXT NOT NULL DEFAULT 'homepage-evaluation-widget',
  language TEXT NOT NULL DEFAULT 'fr',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.valuation_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert valuation leads"
  ON public.valuation_leads
  FOR INSERT
  TO public
  WITH CHECK (true);
