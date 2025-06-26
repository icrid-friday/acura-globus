
import { Card, CardContent } from "@/components/ui/card";

const ClientProfiles = () => {
  const profiles = [
    {
      title: "High-Net-Worth Individuals",
      description: "Entrepreneurs and investors needing meticulous personal tax and trust accounting.",
      icon: "👑",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Small & Medium Enterprises", 
      description: "U.S. startups and small businesses lacking large finance teams.",
      icon: "🏢",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "U.S.-Based CPA Firms",
      description: "Accounting firms looking to offload routine work and focus on advisory services.",
      icon: "📊",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Tech Startups & VCs",
      description: "Companies needing scalable finance support with startup-specific metrics and reporting.",
      icon: "🚀",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve a diverse client base across different industries and business sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {profiles.map((profile, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${profile.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {profile.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{profile.title}</h3>
                  <p className="text-gray-600">{profile.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientProfiles;

