import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, Map, Building, Database, BrainCircuit } from "lucide-react";

const features = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-indigo-500" />,
    title: "Random Forest Algorithm",
    description: "Utilizes advanced Random Forest machine learning algorithm for accurate property price predictions"
  },
  {
    icon: <Map className="h-10 w-10 text-blue-500" />,
    title: "Location-Based Analysis",
    description: "Incorporates location data from across Hyderabad to provide area-specific price predictions"
  },
  {
    icon: <Building className="h-10 w-10 text-purple-500" />,
    title: "Property Attributes",
    description: "Considers multiple property features including size, bedrooms, bathrooms, and furnishing status"
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-green-500" />,
    title: "Interactive Visualizations",
    description: "Explore market trends and insights through interactive charts and data visualizations"
  },
  {
    icon: <Database className="h-10 w-10 text-yellow-500" />,
    title: "Hyderabad Dataset",
    description: "Built on comprehensive Hyderabad property data for reliable and relevant predictions"
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-red-500" />,
    title: "Market Insights",
    description: "Gain valuable insights into property market trends and investment opportunities"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our property price prediction tool combines advanced machine learning with comprehensive data analysis
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <div key={index}>
              <Card className="h-full border shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-blue-50">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div >
      </div>
    </section>
  );
};

export default FeatureSection;