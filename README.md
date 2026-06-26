
# Forecasting House Price


A full-stack Machine Learning project to predict property prices based on features like location, square footage, bathrooms, and BHK.
Built with FastAPI, Scikit-learn, and React (Tailwind + Vite).
## Features

🔮 Price Prediction – Predict property price instantly using ML model

⚡ FastAPI Backend – Lightweight, high-performance REST API

🎨 React Frontend – User-friendly interface styled with TailwindCSS

🤖 ML Model – Random Forest Regressor trained on real property dataset

📊 Data Preprocessing – Handles categorical encoding and missing values
## Architecture

Frontend (React + Tailwind)
        │
        ▼
Backend API (FastAPI) ───▶ ML Model (RandomForestRegressor)
        │
        ▼
     JSON Response

## Tech 

🌐 Frontend: React, TailwindCSS, Vite

🖥️ Backend: FastAPI, Uvicorn

🤖 Machine Learning: Scikit-learn, Pandas, Joblib

🗄️ Dataset: Hyderabad property dataset (data.csv)
## Project Structure

HYDPR1_project/
│── frontend/               # React + Tailwind frontend
│   ├── index.html
│   ├── package.json
│   ├── src/
│   └── ...
│
│── backend/
│   ├── app.py              # FastAPI app (API endpoints)
│   ├── train_model.py      # Train ML model
│   ├── data.csv            # Dataset
│   ├── model.joblib        # Trained ML model
│   └── requirements.txt    # Python dependencies

## Installation

1️⃣ Backend (FastAPI)

cd backend

pip install -r requirements.txt

uvicorn app:app --reload

2️⃣ Frontend (React + Tailwind + Vite)

cd frontend

npm install

npm run dev

📊 Model Training

Run train_model.py to retrain the ML model:

python train_model.py

➡ Saves updated model as model.joblib.


