import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { RandomForest } from "@/lib/random-forest";
import PredictionFormFields from "@/components/PredictionFormFields";
import PredictionResult from "@/components/PredictionResult";

const PredictionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    area: "",
    sqft: "",
    bedrooms: "",
    bathrooms: "",
    furnishing: "",
    age: ""
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { area, sqft, bedrooms, bathrooms, furnishing, age } = formData;
    
    const showErrorToast = (description) => {
      toast({
        title: "Invalid Input",
        description: description,
        variant: "destructive"
      });
    };

    if (!area) {
      showErrorToast("Please select an area");
      return false;
    }
    if (!sqft || isNaN(sqft) || sqft <= 0) {
      showErrorToast("Please enter a valid square footage");
      return false;
    }
    if (!bedrooms) {
      showErrorToast("Please select number of bedrooms");
      return false;
    }
    if (!bathrooms) {
      showErrorToast("Please select number of bathrooms");
      return false;
    }
    if (!furnishing) {
      showErrorToast("Please select furnishing status");
      return false;
    }
    if (!age || isNaN(age) || age < 0) {
      showErrorToast("Please enter a valid property age");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    
    setTimeout(() => {
      try {
        const model = new RandomForest();
        const predictedPrice = model.predict(formData);
        setPrediction(predictedPrice);
        toast({
          title: "Prediction Complete",
          description: "Your property price prediction is ready!",
        });
      } catch (error) {
        console.error("Prediction error:", error);
        toast({
          title: "Prediction Error",
          description: "There was an error generating your prediction. Please try again.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="shadow-lg border-t-4 border-t-primary">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Forecasting Property Prices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <PredictionFormFields formData={formData} handleChange={handleChange} />
            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                className="w-full md:w-auto px-8 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
                disabled={loading}
              >
                {loading ? "Calculating..." : "Predict Price"}
              </Button>
            </div>
          </form>
        </CardContent>

        {prediction && (
          <CardFooter className="flex flex-col">
            <PredictionResult prediction={prediction} />
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default PredictionForm;