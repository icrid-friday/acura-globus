
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "CPA Firm Partner",
      content: "AccuraGlobus has transformed our practice. Their attention to detail and compliance expertise is unmatched. We've reduced our operational costs by 40% while improving quality.",
      rating: 5
    },
    {
      name: "Michael R.",
      role: "Finance Director",
      content: "The team's Big Four experience really shows in their work quality. They understand complex accounting standards and deliver consistently accurate results.",
      rating: 5
    },
    {
      name: "Jennifer L.",
      role: "Small Business Owner",
      content: "What impressed me most was their proactive approach. They don't just process numbers; they provide insights that help drive business decisions.",
      rating: 5
    },
    {
      name: "David K.",
      role: "CFO",
      content: "The technology integration was seamless. Their secure platform and real-time reporting have greatly improved our financial visibility and control.",
      rating: 5
    },
    {
      name: "Lisa T.",
      role: "Accounting Manager",
      content: "Professional, reliable, and cost-effective. AccuraGlobus has become an extension of our team. The communication is excellent and deadlines are always met.",
      rating: 5
    },
    {
      name: "Robert H.",
      role: "Tax Consultant",
      content: "Their tax preparation and compliance services are top-notch. The team stays current with all regulatory changes and ensures our clients remain compliant.",
      rating: 5
    },
    {
      name: "Amanda P.",
      role: "Controller",
      content: "The financial reporting accuracy and timeliness has exceeded our expectations. Their monthly close process is efficient and error-free.",
      rating: 5
    },
    {
      name: "Thomas B.",
      role: "Managing Partner",
      content: "Working with AccuraGlobus has allowed us to focus on growing our client base while they handle the heavy lifting on accounting operations. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by CPA firms and businesses across the United States
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

