
import { Card, CardContent } from "@/components/ui/card";

const Technology = () => {
  const technologies = [
    {
      name: "QuickBooks",
      logo: "https://logos-world.net/wp-content/uploads/2021/03/QuickBooks-Logo.png",
      description: "Complete accounting and bookkeeping solutions"
    },
    {
      name: "Xero",
      logo: "https://logos-world.net/wp-content/uploads/2021/04/Xero-Logo.png",
      description: "Cloud-based accounting software"
    },
    {
      name: "Sage",
      logo: "https://logos-world.net/wp-content/uploads/2020/12/Sage-Logo.png",
      description: "Business management solutions"
    },
    {
      name: "Microsoft Excel",
      logo: "https://logos-world.net/wp-content/uploads/2020/12/Microsoft-Excel-Logo.png",
      description: "Advanced financial modeling and analysis"
    },
    {
      name: "SAP",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/SAP-Logo.png",
      description: "Enterprise resource planning"
    },
    {
      name: "Oracle",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png",
      description: "Database and financial applications"
    }
  ];

  const securityFeatures = [
    {
      icon: "🔒",
      title: "256-bit SSL Encryption",
      description: "Bank-level security for all data transmissions"
    },
    {
      icon: "🛡️",
      title: "SOC 2 Type II Compliance",
      description: "Audited security controls and procedures"
    },
    {
      icon: "📊",
      title: "Real-time Monitoring",
      description: "24/7 security monitoring and threat detection"
    },
    {
      icon: "🔐",
      title: "Multi-factor Authentication",
      description: "Enhanced access control and user verification"
    },
    {
      icon: "💾",
      title: "Secure Data Backup",
      description: "Regular encrypted backups with disaster recovery"
    },
    {
      icon: "📋",
      title: "GDPR Compliant",
      description: "Full compliance with data protection regulations"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Technology Stack */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology We Master</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            We work with industry-leading accounting software and platforms to deliver seamless integration with your existing systems.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Security & Compliance</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Your data security is our top priority. We maintain the highest standards of protection and compliance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-blue-50 border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;

