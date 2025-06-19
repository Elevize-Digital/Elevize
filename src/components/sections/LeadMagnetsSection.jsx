import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { DownloadCloud, FileText, Brain, Calendar, CheckSquare } from 'lucide-react';

const iconsMap = {
  FileText,
  Brain,
  Calendar,
  CheckSquare
};

const LeadMagnetsSection = ({ leadMagnets, siteConfig }) => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unlock Your <span className="animated-gradient-text">Instant Growth Toolkit</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Grab these <span className="font-semibold text-gray-800">game-changing freebies</span> and start attracting more clients today. No strings attached!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {leadMagnets.map((item, index) => {
            const IconComponent = iconsMap[item.iconName] || FileText;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-xl border border-gray-200 card-hover flex flex-col items-center text-center"
              >
                <motion.div 
                  className="text-5xl mb-5"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.emoji}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="button-primary-monochrome hover:scale-105 transition-all duration-300 text-lg px-12 py-7 rounded-full shadow-2xl pulse-glow-monochrome font-semibold group"
            onClick={() => window.open(siteConfig.freeResourcesDriveLink, '_blank')}
          >
            <DownloadCloud className="mr-2.5 h-6 w-6 group-hover:animate-bounce" />
            Download All Free Resources Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnetsSection;