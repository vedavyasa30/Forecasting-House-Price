import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import joblib

# Load dataset (replace with your actual CSV path)
df = pd.read_csv('data.csv')

# Basic preprocessing
df.dropna(inplace=True)
df['location'] = df['location'].astype('category').cat.codes

X = df[['location', 'total_sqft', 'bath', 'bhk']]
y = df['price']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

joblib.dump(model, 'model.joblib')
print("Model saved as model.joblib")
