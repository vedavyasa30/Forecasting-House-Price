
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { hyderabadDataset } from "@/data/hyderabad-dataset";
import { RandomForest } from "@/lib/random-forest";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis } from "recharts";

const formatIndianCurrency = (value) => {
  if (value >= 10000000) { // 1 Crore
    return `₹${(value / 10000000).toFixed(2)} Cr`;
  }
  if (value >= 100000) { // 1 Lakh
    return `₹${(value / 100000).toFixed(1)} L`;
  }
  return `₹${value.toLocaleString('en-IN')}`; // For values less than 1 Lakh
};


const DataVisualization = () => {
  // Calculate average prices by area
  const areaData = Object.entries(
    hyderabadDataset.reduce((acc, property) => {
      if (!acc[property.area]) {
        acc[property.area] = { count: 0, total: 0 };
      }
      acc[property.area].count += 1;
      acc[property.area].total += property.price;
      return acc;
    }, {})
  ).map(([area, data]) => ({
    area,
    averagePrice: data.total / data.count,
  })).sort((a, b) => b.averagePrice - a.averagePrice);

  // Calculate price per sqft by area
  const pricePerSqftData = Object.entries(
    hyderabadDataset.reduce((acc, property) => {
      if (!acc[property.area]) {
        acc[property.area] = { totalPrice: 0, totalSqft: 0 };
      }
      acc[property.area].totalPrice += property.price;
      acc[property.area].totalSqft += property.sqft;
      return acc;
    }, {})
  ).map(([area, data]) => ({
    area,
    pricePerSqft: Math.round(data.totalPrice / data.totalSqft),
  })).sort((a, b) => b.pricePerSqft - a.pricePerSqft);

  // Get feature importance data
  const model = new RandomForest();
  const featureImportanceData = model.getFeatureImportance();

  // Scatter plot data (sqft vs price)
  const scatterData = hyderabadDataset.map(property => ({
    sqft: property.sqft,
    price: property.price, 
    area: property.area,
  }));

  // Custom colors
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto mt-8"
    >
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Hyderabad Property Market Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="averagePrices" className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-6">
              <TabsTrigger value="averagePrices">Average Prices</TabsTrigger>
              <TabsTrigger value="pricePerSqft">Price Per Sq.ft</TabsTrigger>
              <TabsTrigger value="featureImportance">Feature Importance</TabsTrigger>
              <TabsTrigger value="priceVsSize">Price vs Size</TabsTrigger>
            </TabsList>
            
            <TabsContent value="averagePrices" className="pt-4">
              <h3 className="text-lg font-medium mb-4 text-center">Average Property Prices by Area</h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={areaData}
                    margin={{ top: 5, right: 30, left: 40, bottom: 60 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="area" 
                      angle={-45} 
                      textAnchor="end" 
                      height={70} 
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      tickFormatter={formatIndianCurrency}
                      tick={{ fontSize: 12 }}
                      width={80}
                    />
                    <Tooltip 
                      formatter={(value) => [formatIndianCurrency(value), "Average Price"]}
                    />
                    <Legend />
                    <Bar 
                      dataKey="averagePrice" 
                      name="Average Price" 
                      fill="#3b82f6" 
                      animationDuration={1500}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="pricePerSqft" className="pt-4">
              <h3 className="text-lg font-medium mb-4 text-center">Price Per Square Foot by Area</h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={pricePerSqftData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 60 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="area" 
                      angle={-45} 
                      textAnchor="end" 
                      height={70} 
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      tickFormatter={(value) => `₹${value.toLocaleString('en-IN')}`}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, "Price Per Sq.ft"]}
                    />
                    <Legend />
                    <Bar 
                      dataKey="pricePerSqft" 
                      name="Price Per Sq.ft" 
                      fill="#6366f1" 
                      animationDuration={1500}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="featureImportance" className="pt-4">
              <h3 className="text-lg font-medium mb-4 text-center">Feature Importance in Price Prediction</h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={featureImportanceData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="importance"
                      nameKey="feature"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {featureImportanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${(value * 100).toFixed(1)}%`, "Importance"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="priceVsSize" className="pt-4">
              <h3 className="text-lg font-medium mb-4 text-center">Property Price vs Size</h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart
                    margin={{ top: 20, right: 20, bottom: 20, left: 40 }}
                  >
                    <CartesianGrid />
                    <XAxis 
                      type="number" 
                      dataKey="sqft" 
                      name="Square Feet" 
                      unit=" sq.ft"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="price" 
                      name="Price" 
                      tickFormatter={formatIndianCurrency}
                      tick={{ fontSize: 12 }}
                      width={80}
                    />
                    <ZAxis type="category" dataKey="area" name="Area" />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={(value, name) => {
                        if (name === "Price") return [formatIndianCurrency(value), name];
                        if (name === "Square Feet") return [`${value} sq.ft`, name];
                        return [value, name];
                      }}
                    />
                    <Legend />
                    <Scatter 
                      name="Properties" 
                      data={scatterData} 
                      fill="#2563eb"
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DataVisualization;
