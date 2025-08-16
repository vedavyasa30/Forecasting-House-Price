
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Hyderabad Property Predictor</h3>
            <p className="text-blue-200 mb-4">
              Advanced property price prediction using machine learning and comprehensive Hyderabad real estate data.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Price Predictor</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Market Insights</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Hyderabad Real Estate Guide</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Investment Opportunities</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Property Trends</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Machine Learning Models</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-blue-200 mb-2">
              Have questions about our property price prediction tool?
            </p>
            <p className="text-blue-200">
              Email: <a href="mailto:info@hydproperty.ai" className="underline hover:text-white">info@hydproperty.ai</a>
            </p>
          </motion.div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-300">
            &copy; {new Date().getFullYear()} Hyderabad Property Price Predictor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
