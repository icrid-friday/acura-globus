
-- Add timezone column to meeting_schedules table
ALTER TABLE public.meeting_schedules 
ADD COLUMN timezone TEXT NOT NULL DEFAULT 'EST';

-- Add a check constraint to ensure only valid timezones
ALTER TABLE public.meeting_schedules 
ADD CONSTRAINT valid_timezone 
CHECK (timezone IN ('IST', 'EST'));

