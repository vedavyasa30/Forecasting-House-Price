import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const PredictionResult = ({ prediction }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  if (!prediction) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="prediction-card bg-gradient-to-r from-blue-50 to-indigo-50 border-none shadow-md">
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium text-center mb-2">Predicted Property Price</h3>
          <p className="text-3xl font-bold text-center text-primary">
            {formatCurrency(prediction)}
          </p>
          <p className="text-sm text-center text-muted-foreground mt-2">
            Based on Random Forest prediction model
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PredictionResult;