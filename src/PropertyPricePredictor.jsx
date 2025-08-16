import React, { useState } from "react";

function PropertyPricePredictor() {
  // State to hold form inputs
  const [formData, setFormData] = useState({
    location: 2,
    total_sqft: 1200,
    bath: 2,
    bhk: 3,
  });

  // State to hold predicted price
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: Number(value),  // convert inputs to numbers
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch predicted price");
      }

      const data = await response.json();
      setPredictedPrice(data.predicted_price);
    } catch (err) {
      setError(err.message);
      setPredictedPrice(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Property Price Predictor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Location (encoded number):
          <input
            type="number"
            name="location"
            value={formData.location}
            onChange={handleChange}
            min="0"
            required
          />
        </label>
        <br />
        <label>
          Total Sqft:
          <input
            type="number"
            name="total_sqft"
            value={formData.total_sqft}
            onChange={handleChange}
            min="1"
            required
          />
        </label>
        <br />
        <label>
          Bath:
          <input
            type="number"
            name="bath"
            value={formData.bath}
            onChange={handleChange}
            min="0"
            required
          />
        </label>
        <br />
        <label>
          BHK:
          <input
            type="number"
            name="bhk"
            value={formData.bhk}
            onChange={handleChange}
            min="1"
            required
          />
        </label>
        <br />
        <button type="submit" disabled={loading} style={{ marginTop: "10px" }}>
          {loading ? "Predicting..." : "Predict Price"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {predictedPrice !== null && !error && (
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          Predicted Price: ₹{predictedPrice}
        </p>
      )}
    </div>
  );
}

export default PropertyPricePredictor;
