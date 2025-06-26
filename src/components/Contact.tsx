
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    firmSize: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_form_submissions')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company_name: formData.companyName || null,
          firm_size: formData.firmSize || null,
          message: formData.message
        });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        firmSize: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Started Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your accounting operations? Schedule a consultation or get in touch with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">contact@accuraglobus.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Office Location</h4>
                  <p className="text-gray-600">
                    D-49, Main, Dabri - Palam Rd, Dwarka, New Delhi, India
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 12:00 PM - 9:00 PM IST
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      name="firstName"
                      placeholder="First Name" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <Input 
                      name="lastName"
                      placeholder="Last Name" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Input 
                    name="email"
                    placeholder="Email Address" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <Input 
                    name="companyName"
                    placeholder="Company Name" 
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                  <Input 
                    name="firmSize"
                    placeholder="Firm Size (Number of Employees)" 
                    value={formData.firmSize}
                    onChange={handleInputChange}
                  />
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your accounting needs..." 
                    rows={4} 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

