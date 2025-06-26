
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import MeetingDialog from "./MeetingDialog";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-teal-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Global Accounting Excellence.
            <span className="text-blue-600"> Delivered From India.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Modern outsourced finance solutions for U.S. CPA firms and businesses. 
            Partner with our New Delhi–based team for cost savings, expert talent, and extended hours through time-zone advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" onClick={scrollToContact}>
              Book a Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg" onClick={scrollToServices}>
              Explore Services
            </Button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-blue-600">Significant cost savings</span> and access to highly skilled professionals with Big Four experience from BDO India and PwC.
            </p>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="w-6 h-6 text-blue-600 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

