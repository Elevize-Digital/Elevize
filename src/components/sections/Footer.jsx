import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';

const Footer = ({ siteConfig }) => {
  const { toast } = useToast();

  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 items-start md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-3xl font-black animated-gradient-text" style={{ WebkitTextFillColor: 'white', backgroundClip: 'text', backgroundImage: 'linear-gradient(-45deg, #ccc, #fff, #ccc, #fff)' }}>ELEVIZE</span>
            <p className="text-gray-500 mt-2 text-sm">AI-Powered Realtor Branding.</p>
            <p className="text-gray-600 mt-1 text-xs">© {new Date().getFullYear()} Elevize. All rights reserved.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center flex flex-col items-center md:items-start"
          >
            <p className="font-semibold text-gray-200 mb-3 text-lg">Quick Links</p>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <button 
                onClick={() => {
                  const formSection = document.getElementById('get-started-form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Get Started
              </button>
              <button 
                onClick={() => window.open(siteConfig.freeResourcesDriveLink, '_blank')}
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
              >
                Free Resources <ExternalLink className="ml-1.5 h-3 w-3" />
              </button>
              <button 
                onClick={() => window.open(siteConfig.googleFormLink, '_blank')}
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
              >
                Contact Form <ExternalLink className="ml-1.5 h-3 w-3" />
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center md:text-right flex flex-col items-center md:items-end"
          >
            <p className="font-semibold text-gray-200 mb-3 text-lg">Connect & Legal</p>
            <div className="flex flex-col space-y-2 items-center md:items-end">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="h-4 w-4 mr-2" /> {siteConfig.email}
              </a>
               <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp Us
              </a>
              <button 
                onClick={() => toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration:0.5, delay:0.5 }}
          className="border-t border-gray-800 mt-10 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            Elevize: Your Partner in AI-Powered Real Estate Success.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;