
import { Card, CardContent } from "@/components/ui/card";

const WhyOutsource = () => {
  const benefits = [
    {
      title: "Cost Savings",
      description: "Leverage India's vast talent pool and economies of scale to dramatically reduce overhead:",
      points: [
        "Significant reduction in training and salary costs",
        "Lower software and infrastructure expenses", 
        "Reallocate budget towards growth and client services"
      ],
      icon: "💰"
    },
    {
      title: "Flexible Scaling", 
      description: "Services ramp up during tax season or dial down in off-peak months:",
      points: [
        "Convert fixed in-house costs into variable support",
        "Scale team size based on seasonal demands",
        "Avoid hiring and layoff complications"
      ],
      icon: "📈"
    },
    {
      title: "Regulatory Compliance",
      description: "Dedicated specialists monitor regulatory changes and ensure compliance:",
      points: [
        "Stay current with evolving IRS rules",
        "Reduce risk of fines and errors",
        "Multi-state tax requirement expertise"
      ],
      icon: "⚖️"
    },
    {
      title: "Improved Accuracy",
      description: "Professional team with quality-control processes ensures precise work:",
      points: [
        "Error-free bookkeeping and timely filings",
        "Advanced software for accuracy",
        "Strict deadline adherence"
      ],
      icon: "✅"
    },
    {
      title: "Expert Talent Access",
      description: "Global extension of your team with qualified professionals:",
      points: [
        "CAs, CPAs, and EAs with U.S. GAAP knowledge",
        "Proficiency with industry-standard tools",
        "Continuous training on latest technologies"
      ],
      icon: "🎓"
    },
    {
      title: "Focus on Core Business",
      description: "Handle back-office finance work while you focus on growth:",
      points: [
        "Focus on sales and advisory services",
        "Lower costs with increased capacity",
        "Higher overall service quality"
      ],
      icon: "🎯"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Outsource to AccuraGlobus?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock key benefits that transform your accounting operations and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-3">{benefit.description}</p>
                  <ul className="text-gray-600 space-y-1">
                    {benefit.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOutsource;

