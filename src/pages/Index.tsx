import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DailySpecials from "@/components/DailySpecials";
import ChefRecommendations from "@/components/ChefRecommendations";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import Location from "@/components/Location";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <DailySpecials />
        <ChefRecommendations />
        <Testimonials />
        <InstagramFeed />
        <Location />
        <Newsletter />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
