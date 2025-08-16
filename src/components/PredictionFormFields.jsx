import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { areaOptions, furnishingOptions, bedroomOptions, bathroomOptions } from "@/data/hyderabad-dataset";
import { Home, PercentSquare as SquareFeet, Bed, Bath, Calendar, Sparkles } from 'lucide-react';

const PredictionFormFields = ({ formData, handleChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Home className="h-4 w-4 text-primary" />
          <Label htmlFor="area">Area/Location</Label>
        </div>
        <Select
          value={formData.area}
          onValueChange={(value) => handleChange("area", value)}
        >
          <SelectTrigger id="area">
            <SelectValue placeholder="Select area" />
          </SelectTrigger>
          <SelectContent>
            {areaOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <SquareFeet className="h-4 w-4 text-primary" />
          <Label htmlFor="sqft">Square Feet</Label>
        </div>
        <Input
          id="sqft"
          type="number"
          placeholder="e.g. 1200"
          value={formData.sqft}
          onChange={(e) => handleChange("sqft", e.target.value)}
          className="input-highlight"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Bed className="h-4 w-4 text-primary" />
          <Label htmlFor="bedrooms">Bedrooms</Label>
        </div>
        <Select
          value={formData.bedrooms}
          onValueChange={(value) => handleChange("bedrooms", value)}
        >
          <SelectTrigger id="bedrooms">
            <SelectValue placeholder="Select bedrooms" />
          </SelectTrigger>
          <SelectContent>
            {bedroomOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Bath className="h-4 w-4 text-primary" />
          <Label htmlFor="bathrooms">Bathrooms</Label>
        </div>
        <Select
          value={formData.bathrooms}
          onValueChange={(value) => handleChange("bathrooms", value)}
        >
          <SelectTrigger id="bathrooms">
            <SelectValue placeholder="Select bathrooms" />
          </SelectTrigger>
          <SelectContent>
            {bathroomOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <Label htmlFor="furnishing">Furnishing Status</Label>
        </div>
        <Select
          value={formData.furnishing}
          onValueChange={(value) => handleChange("furnishing", value)}
        >
          <SelectTrigger id="furnishing">
            <SelectValue placeholder="Select furnishing" />
          </SelectTrigger>
          <SelectContent>
            {furnishingOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          <Label htmlFor="age">Property Age (years)</Label>
        </div>
        <Input
          id="age"
          type="number"
          placeholder="e.g. 5"
          value={formData.age}
          onChange={(e) => handleChange("age", e.target.value)}
          className="input-highlight"
        />
      </div>
    </div>
  );
};

export default PredictionFormFields;