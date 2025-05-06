import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Service from "@/components/Service";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
      </div>
      <div className="flex-1">
        <Hero />
        <About />
        <Service />
        <Contact />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
