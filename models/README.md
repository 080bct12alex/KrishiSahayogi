# Krishi Sahayogi - AI Microservice

The brain of Krishi Sahayogi. A Python/Flask server hosting machine learning models for predictions and Google Gemini for generative advice.

## 🧠 Models & Logic

1.  **Crop Recommendation:**
    *   **Algorithm:** Random Forest Classifier
    *   **Input:** N, P, K, Temperature, Humidity, pH, Rainfall
    *   **Output:** Best crop to plant (e.g., Rice, Maize)

2.  **Fertilizer Recommendation:**
    *   **Algorithm:** Random Forest Classifier
    *   **Input:** Soil params + Crop Type
    *   **Output:** Fertilizer name (e.g., Urea, DAP)

3.  **Disease Detection:**
    *   **Algorithm:** Custom ResNet9 (PyTorch)
    *   **Input:** Leaf Image
    *   **Output:** Disease Name + Confidence

4.  **Price Prediction:**
    *   **Algorithm:** XGBoost Regressor
    *   **Input:** Commodity Name, Date
    *   **Output:** Predicted Price (NPR/kg)

5.  **Smart Advice (Dr. AI):**
    *   **Engine:** Google Gemini Pro
    *   **Function:** Generates cures and planting advice in natural language.

## 🛠️ Setup & Installation

1.  Navigate to the directory:
    ```bash
    cd models
    ```
2.  Create a virtual environment (optional but recommended):
    ```bash
    python -m venv venv
    source venv/bin/activate  # Windows: venv\Scripts\activate
    ```
3.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4.  Set up Environment Variables (`.env`):
    ```env
    GEMINI_API_KEY=your_google_ai_key
    ```
5.  Run the server:
    ```bash
    python app.py
    ```

Server runs on `http://localhost:5000` by default.
