
-- Create storage bucket for AI-generated images
INSERT INTO storage.buckets (id, name, public)
VALUES ('ai-images', 'ai-images', true);

-- Allow public read access
CREATE POLICY "AI images are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'ai-images');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload AI images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'ai-images' AND auth.role() = 'authenticated');

-- Create table to track generated images
CREATE TABLE public.generated_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  prompt TEXT NOT NULL,
  quality_prompt TEXT NOT NULL,
  aspect_ratio TEXT NOT NULL DEFAULT '16:9',
  image_url TEXT,
  file_path TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.generated_images ENABLE ROW LEVEL SECURITY;

-- Anyone can view generated images
CREATE POLICY "Anyone can view generated images"
ON public.generated_images FOR SELECT
USING (true);

-- Anyone can insert (admin tool, no auth required for simplicity)
CREATE POLICY "Anyone can insert generated images"
ON public.generated_images FOR INSERT
WITH CHECK (true);

-- Anyone can delete
CREATE POLICY "Anyone can delete generated images"
ON public.generated_images FOR DELETE
USING (true);
