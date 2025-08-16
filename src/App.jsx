import React from "react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import FeatureSection from "@/components/FeatureSection";
import DataVisualization from "@/components/DataVisualization";
import PropertyPricePredictor from './PropertyPricePredictor';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pb-16 px-4" 
          id="predictor-form-section"
        >
          <div className="container mx-auto">
            <PropertyPricePredictor />
          </div>
        </motion.div>
        
        <FeatureSection />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-16 px-4 bg-gray-50"
        >
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Market Insights
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore Hyderabad property market trends and analytics
              </p>
            </div>
            
            <DataVisualization />
          </div>
        </motion.div>
        
      </main>
      
      <Toaster />
    </div>
  );
}

export default App;
