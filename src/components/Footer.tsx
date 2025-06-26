
import { Globe } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AccuraGlobus</span>
              </div>
              <p className="text-gray-400 mb-4">
                Precision. Compliance. Growth.
              </p>
              <p className="text-gray-400 text-sm">
                Global accounting excellence delivered from India.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Tax Planning & Filing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Audit & Assurance
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Bookkeeping
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Business Advisory
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('blogs')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Blogs
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('why-us')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Why Choose Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 AccuraGlobus. All rights reserved. | accuraglobus.com
              </p>
              <div className="flex space-x-4">
                <div className="text-xs text-gray-500">
                  <span className="bg-green-600 text-white px-2 py-1 rounded mr-2">SOC 2</span>
                  <span className="bg-green-600 text-white px-2 py-1 rounded mr-2">GDPR</span>
                  <span className="bg-green-600 text-white px-2 py-1 rounded">SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

