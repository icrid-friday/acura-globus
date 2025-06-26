
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Globe, Check, Linkedin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About AccuraGlobus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Led by experienced professionals who blend U.S. accounting expertise with Indian cost-efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/lovable-uploads/3f541feb-b69d-4aef-b274-e5b25b491567.png" 
                      alt="Bhuvesh Aggarwal"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Bhuvesh Aggarwal</h3>
                    <Badge className="mb-3 bg-blue-100 text-blue-700">Founder, CA | CPA pursuing</Badge>
                    <p className="text-gray-600 mb-4">
                      3+ years post-qualification in accounting and tax. Ex-BDO India (Indirect Tax), 
                      led financial-process improvements and compliance for diverse clients in real estate, 
                      healthcare, and manufacturing.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Chartered Accountant</Badge>
                      <Badge variant="outline">Big Four Experience</Badge>
                      <Badge variant="outline">QuickBooks ProAdvisor</Badge>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={() => window.open('https://linkedin.com/in/bhuveshaggarwal', '_blank')}
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/lovable-uploads/59ea6be3-181d-4b21-ac69-096ccbe1f236.png" 
                      alt="Krishna Attal"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Krishna Attal</h3>
                    <Badge className="mb-3 bg-teal-100 text-teal-700">Co-Founder, MBA | EA pursuing</Badge>
                    <p className="text-gray-600 mb-4">
                      2 years U.S. tax professional, ex-PwC. Skilled in individual (1040) and business tax returns 
                      (1065, 1120C/S) and serving high-net-worth clients. Currently at HBK Offshore.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">U.S. Tax Expert</Badge>
                      <Badge variant="outline">PwC Alumni</Badge>
                      <Badge variant="outline">HNWI Specialist</Badge>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={() => window.open('https://linkedin.com/in/krishna-attal-bb04b1157', '_blank')}
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Security & Compliance</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">SOC 2 Compliant</h4>
                <p className="text-gray-600 text-sm">Enterprise-grade security standards</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">GDPR Compliance</h4>
                <p className="text-gray-600 text-sm">Data protection and privacy</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Encrypted Systems</h4>
                <p className="text-gray-600 text-sm">Two-factor authentication & role-based access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

