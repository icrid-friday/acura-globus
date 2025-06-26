
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

interface MeetingDialogProps {
  serviceType?: string;
  children?: React.ReactNode;
}

const MeetingDialog = ({ serviceType, children }: MeetingDialogProps) => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    concern: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !timezone) {
      toast({
        title: "Missing Information",
        description: "Please select a date, time, and timezone for your meeting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Combine date and time
      const [hours, minutes] = time.split(':');
      const meetingDateTime = new Date(date);
      meetingDateTime.setHours(parseInt(hours), parseInt(minutes));

      const { error } = await supabase
        .from('meeting_schedules')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          concern: formData.concern,
          service_type: serviceType,
          meeting_time: meetingDateTime.toISOString(),
          timezone: timezone,
        });

      if (error) throw error;

      toast({
        title: "Meeting Scheduled!",
        description: "We'll send you a confirmation email shortly.",
      });

      // Reset form
      setFormData({ fullName: "", email: "", concern: "" });
      setDate(undefined);
      setTime("");
      setTimezone("");
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      toast({
        title: "Error",
        description: "Failed to schedule meeting. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Schedule a Meeting
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule a Meeting</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Select Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date()}
              className="rounded-md border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time</Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select value={timezone} onValueChange={setTimezone} required>
              <SelectTrigger>
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EST">EST (Eastern Standard Time)</SelectItem>
                <SelectItem value="IST">IST (India Standard Time)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="concern">What would you like to discuss?</Label>
            <Textarea
              id="concern"
              value={formData.concern}
              onChange={(e) => setFormData(prev => ({ ...prev, concern: e.target.value }))}
              placeholder="Please describe your accounting needs or questions..."
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Scheduling..." : "Schedule Meeting"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingDialog;

