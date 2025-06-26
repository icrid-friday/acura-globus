
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyOutsource from "@/components/WhyOutsource";
import Services from "@/components/Services";
import ClientProfiles from "@/components/ClientProfiles";
import Technology from "@/components/Technology";
import Blogs from "@/components/Blogs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyOutsource />
      <Services />
      <ClientProfiles />
      <Technology />
      <Blogs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

