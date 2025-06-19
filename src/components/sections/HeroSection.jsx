import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star } from 'lucide-react';

const HeroSection = ({ siteConfig }) => {
  return (
    <section className="relative overflow-hidden section-padding pt-16 md:pt-24">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 via-gray-700/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-gray-800 to-black text-white rounded-full text-md font-semibold shadow-lg">
            ✨ Stop Guessing, Start Growing with AI
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            Build a{' '}
            <span className="animated-gradient-text">Magnetic Real Estate Brand</span>{' '}
            That Converts Leads on Autopilot
          </motion.h1>
          
          <motion.p 
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed"
          >
            Unlock AI-powered content & branding systems designed for ambitious realtors. <span className="font-semibold text-gray-800">Simple. Powerful. Effective.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="button-primary-monochrome hover:scale-105 transition-all duration-300 text-lg px-10 py-7 rounded-full shadow-xl pulse-glow-monochrome font-semibold group"
              onClick={() => window.open(siteConfig.whatsappLink, '_blank')}
            >
              <MessageCircle className="mr-2.5 h-6 w-6 group-hover:animate-pulse" />
              Claim Your Free Growth Kit
            </Button>
            
            <motion.div 
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ duration:0.5, delay:1.1 }}
              className="flex items-center text-sm text-gray-600 mt-3 sm:mt-0"
            >
              <Star className="h-5 w-5 text-yellow-500 mr-1.5" />
              <span>Join 500+ Realtors Scaling with Elevize</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute top-10 left-5 md:top-20 md:left-10 floating-animation">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-10"></div>
      </div>
      <div className="absolute bottom-10 right-5 md:bottom-20 md:right-10 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;