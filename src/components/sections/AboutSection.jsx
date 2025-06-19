import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Users } from 'lucide-react';

const iconsMap = {
  TrendingUp,
  Zap,
  Users
};

const AboutSection = ({ features }) => {
  return (
    <section className="section-padding bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Tired of Fluff? Get <span className="animated-gradient-text" style={{ WebkitTextFillColor: 'white', backgroundClip: 'text', backgroundImage: 'linear-gradient(-45deg, #ccc, #eee, #ccc, #eee)' }}>Real Results, Real Simple.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Elevize empowers real estate agents like you to build an unshakeable personal brand with AI-driven content strategy, smart captions, and effortless automation. <span className="font-semibold">No complicated videos. No endless calls. Just pure, impactful results.</span>
            </p>
            <p className="text-lg text-gray-400 mb-10">
              Imagine a brand that works for YOU 24/7, attracting leads while you focus on closing deals. That's the Elevize promise. We handle the heavy lifting, so you can shine.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = iconsMap[feature.iconName] || TrendingUp;
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/70 transition-colors duration-300"
                >
                  <div className="bg-gradient-to-r from-gray-500 to-gray-700 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg text-gray-100">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-8 glass-effect-monochrome shadow-2xl">
              <img  
                className="w-full h-72 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-out" 
                alt="Modern workspace with AI-driven real estate branding tools on display"
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjBzdHJhdGVneXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
            </div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gray-600/30 rounded-full filter blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gray-500/30 rounded-lg filter blur-lg animate-pulse animation-delay-2000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;