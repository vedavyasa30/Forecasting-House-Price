from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()
model = joblib.load("model.joblib")  # Ensure this file is present

class PropertyFeatures(BaseModel):
    location: int
    total_sqft: float
    bath: int
    bhk: int

@app.get("/")
def read_root():
    return {"message": "Hyderabad Property Price Predictor API"}

@app.post("/predict")
def predict_price(data: PropertyFeatures):
    input_data = np.array([[data.location, data.total_sqft, data.bath, data.bhk]])
    prediction = model.predict(input_data)[0]
    return {"predicted_price": round(prediction, 2)}
