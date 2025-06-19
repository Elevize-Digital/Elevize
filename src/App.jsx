import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import LeadMagnetsSection from '@/components/sections/LeadMagnetsSection';
import AboutSection from '@/components/sections/AboutSection';
import GoogleFormSection from '@/components/sections/GoogleFormSection';
import Footer from '@/components/sections/Footer';

function App() {
  const leadMagnetsData = [
    {
      iconName: "FileText",
      title: "Free Caption Pack",
      description: "Skyrocket engagement with captions that captivate & convert.",
      emoji: "📄"
    },
    {
      iconName: "Brain",
      title: "Instant Bio Makeover",
      description: "Craft a magnetic bio that turns profile visitors into leads.",
      emoji: "🧠"
    },
    {
      iconName: "Calendar",
      title: "Mini Content Blueprint",
      description: "Never run out of ideas! Your next 30 days of content, planned.",
      emoji: "📅"
    },
    {
      iconName: "CheckSquare",
      title: "Ultimate Realtor Branding Kit",
      description: "The A-Z checklist to build an irresistible brand effortlessly.",
      emoji: "✅"
    }
  ];

  const featuresData = [
    {
      iconName: "TrendingUp",
      title: "AI-Driven Content Strategy",
      description: "Unlock content that speaks directly to your dream clients."
    },
    {
      iconName: "Zap",
      title: "Effortless Automation",
      description: "Automate your brand building. More leads, less hustle."
    },
    {
      iconName: "Users",
      title: "Dominant Personal Branding",
      description: "Become the go-to realtor in your niche. Stand out, get noticed."
    }
  ];

  const siteConfig = {
    freeResourcesDriveLink: "https://drive.google.com/drive/folders/1zWUkb3XmlrTlgEtWHjvY5gaKWrAV1Lri?usp=sharing",
    whatsappNumber: "+923008311199",
    get whatsappLink() { return `https://wa.me/${this.whatsappNumber.replace(/\D/g, '')}`; },
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSc64qBJhq5iR2sVv5G58OhqYAPbqGmIYDUzR5DCgZcpw7665g/viewform",
    email: "contact@elevize.com"
  };

  return (
    <div className="min-h-screen bg-gradient-bg-monochrome text-foreground">
      <Toaster />
      <Header siteConfig={siteConfig} />
      <HeroSection siteConfig={siteConfig} />
      <LeadMagnetsSection leadMagnets={leadMagnetsData} siteConfig={siteConfig} />
      <AboutSection features={featuresData} />
      <GoogleFormSection siteConfig={siteConfig} />
      <Footer siteConfig={siteConfig} />
    </div>
  );
}

export default App;