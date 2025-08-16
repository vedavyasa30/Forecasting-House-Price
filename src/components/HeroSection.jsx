import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = ({ scrollToPredictor }) => {
  return (
    <section className="relative overflow-hidden hero-pattern py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Predict Hyderabad Property Prices
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Our advanced Random Forest algorithm analyzes multiple factors to provide accurate property price predictions for the Hyderabad real estate market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToPredictor}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Try Price Predictor
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-md text-lg"
              >
                Explore Market Insights
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-lg opacity-75"></div>
              <div className="relative glass-card rounded-lg overflow-hidden shadow-2xl">
                <img  
                  alt="Hyderabad city skyline with modern buildings" 
                  className="w-full h-auto rounded-t-lg"
                 src="https://images.unsplash.com/photo-1560268478-bd0729a70a5e" />
                <div className="p-6 bg-white/90 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2">Hyderabad Real Estate Market</h3>
                  <p className="text-gray-700">
                    One of India's fastest growing property markets with high demand in tech corridors like Hitech City, Gachibowli, and Financial District.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;