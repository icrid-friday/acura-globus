
-- Create contact form submissions table
CREATE TABLE public.contact_form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company_name TEXT,
  firm_size TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE public.contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for contact form submissions
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_form_submissions 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact forms" 
  ON public.contact_form_submissions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Enable realtime for contact form submissions
ALTER TABLE public.contact_form_submissions REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.contact_form_submissions;

