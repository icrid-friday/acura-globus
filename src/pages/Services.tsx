import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const usServices = [
    {
      title: "Bookkeeping",
      description: "Daily accounting using QuickBooks Online, Xero, or Zoho, with month-end and year-end closings.",
      features: ["QuickBooks Online", "Xero", "Zoho Books", "Month-end closing", "Year-end closing"],
      logo: "📊"
    },
    {
      title: "Payroll & Receivables",
      description: "Payroll processing and AR management to ensure accurate and timely payments.",
      features: ["Payroll processing", "AR management", "Vendor payments", "Employee payments"],
      logo: "💰"
    },
    {
      title: "Tax Planning & Filing",
      description: "Individual (1040) and business returns (1065, 1120C/S) with year-round planning. HNWI tax strategy specialty.",
      features: ["Form 1040", "Form 1065", "Form 1120C/S", "Year-round planning", "HNWI strategies"],
      logo: "📋"
    },
    {
      title: "Audit & Assurance", 
      description: "Support for financial audits, reviews, and compilations with Big Four experience.",
      features: ["Financial audits", "Reviews", "Compilations", "Big Four standards"],
      logo: "🔍"
    },
    {
      title: "Finance Automation",
      description: "Streamlining processes with cloud software for maximum efficiency.",
      features: ["Bank feeds", "Invoicing automation", "Rules-based reconciliation", "Process optimization"],
      logo: "⚙️"
    },
    {
      title: "Custom Reporting",
      description: "Professional financial reports plus custom dashboards highlighting key KPIs.",
      features: ["P&L statements", "Balance sheets", "Cash flow", "Custom dashboards", "KPI tracking"],
      logo: "📈"
    }
  ];

  const indianServices = [
    {
      title: "Company Incorporation",
      description: "Guidance through India's company registration, compliance filings, and legal setup.",
      features: ["Private/Public registration", "Compliance filings", "Legal setup"],
      logo: "🏢"
    },
    {
      title: "Indian Tax Compliance",
      description: "Filing of Indian corporate and individual tax returns, including ITR and TDS returns.",
      features: ["ITR returns", "TDS returns", "Corporate returns", "Individual returns"],
      logo: "📄"
    },
    {
      title: "GST Compliance",
      description: "Full GST registration and return filing to meet India's indirect tax regulations.",
      features: ["GST registration", "Return filing", "Compliance management"],
      logo: "🧾"
    },
    {
      title: "Business Advisory",
      description: "Local finance, compliance, and strategy advice for Indian operations.",
      features: ["Joint ventures", "Transfer pricing", "Local compliance", "Strategy advice"],
      logo: "💼"
    }
  ];

  const techLogos = [
    { name: "QuickBooks", logo: "https://logos-world.net/wp-content/uploads/2021/03/QuickBooks-Logo.png" },
    { name: "Xero", logo: "https://logos-world.net/wp-content/uploads/2021/04/Xero-Logo.png" },
    { name: "Zoho", logo: "https://logos-world.net/wp-content/uploads/2020/12/Zoho-Logo.png" },
    { name: "CCH Axcess", logo: "https://www.cch.com/content/dam/cch/navigation/logo.svg" },
    { name: "SurePrep", logo: "https://www.sureprep.com/content/dam/sureprep/logos/sureprep-logo.svg" },
    { name: "ProSystem fx", logo: "https://cdn.worldvectorlogo.com/logos/prosystem-fx.svg" }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive accounting solutions for U.S. CPA firms and Indian business operations.
            </p>
          </div>

          {/* Technology Logos */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Powered by Leading Technologies</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {techLogos.map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 flex justify-center">
                    <div className="w-16 h-10 flex items-center justify-center bg-white rounded border">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="max-h-8 max-w-14 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${tech.name}&background=0066cc&color=ffffff&size=60`;
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* U.S. CPA Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">U.S. CPA Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {usServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 border-2 border-transparent hover:border-blue-200">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl group-hover:scale-110 transition-transform">{service.logo}</span>
                      <CardTitle className="text-xl text-blue-600 group-hover:text-blue-700 transition-colors">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Indian Services */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Indian Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {indianServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 border-2 border-transparent hover:border-teal-200">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl group-hover:scale-110 transition-transform">{service.logo}</span>
                      <CardTitle className="text-xl text-teal-600 group-hover:text-teal-700 transition-colors">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

