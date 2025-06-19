import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const GoogleFormSection = ({ siteConfig }) => {
  return (
    <section id="get-started-form" className="section-padding bg-gradient-bg-monochrome">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="animated-gradient-text">Elevate Your Brand?</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Let's craft your unique success story. Click below to share some details, and we'll map out a <span className="font-semibold text-gray-800">custom AI-powered strategy</span> to transform your real estate business.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <Button
            size="lg"
            className="button-primary-monochrome hover:scale-105 transition-all duration-300 text-lg px-12 py-7 rounded-full shadow-2xl pulse-glow-monochrome font-semibold group"
            onClick={() => window.open(siteConfig.googleFormLink, '_blank')}
          >
            Fill Out Our Quick Form <ArrowRight className="ml-2.5 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <motion.p 
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:0.5, delay:0.4 }}
            className="text-center text-sm text-gray-600 mt-8"
          >
            Your information is safe with us. We're excited to help you grow!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleFormSection;