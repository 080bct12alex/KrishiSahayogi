import sys
import os
import joblib
import pandas as pd
import numpy as np
from datetime import datetime

# Add current directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

def debug_prediction():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    log_file = os.path.join(base_dir, "debug_log.txt")
    
    # Redirect stdout to a file
    with open(log_file, "w", encoding="utf-8") as f:
        sys.stdout = f
        
        print("DEBUGGING PRICE PREDICTION")
        
        model_path = os.path.join(base_dir, "models", "xgboost_price_model_updated.pkl")
        encoder_path = os.path.join(base_dir, "models", "commodity_target_encoder_updated.pkl")
        
        print(f"Loading model from {model_path}")
        print(f"Loading encoder from {encoder_path}")
        
        try:
            model = joblib.load(model_path)
            encoder = joblib.load(encoder_path)
            print("✓ Models loaded")
            
            # Check feature names
            if hasattr(model, "feature_names_in_"):
                print(f"Model expects features (sklearn): {model.feature_names_in_}")
            elif hasattr(model, "feature_names"):
                print(f"Model expects features (booster): {model.feature_names}")
            else:
                 try:
                     print(f"Model booster feature names: {model.get_booster().feature_names}")
                 except:
                     print("Could not determine feature names")

        except Exception as e:
            print(f"❌ Failed to load models: {e}")
            return

        base_test_cases = [
            ("Tomato Big(Nepali)", "03-15"),
            ("Potato Red", "04-10")
        ]
        
        years = [2018, 2020, 2022, 2023, 2024, 2025]
        
        for commodity, date_MM_DD in base_test_cases:
            print(f"\n\n=== COMMODITY: {commodity} ===")
            for y in years:
                date_str = f"{y}-{date_MM_DD}"
                print(f"\n--- Testing: {commodity} on {date_str} ---")
                
                try:
                    date_obj = datetime.strptime(date_str, '%Y-%m-%d')
                    month = date_obj.month
                    year = date_obj.year
                    # print(f"Date parsed: Year={year}, Month={month}")
                    
                    # Encode commodity
                    comm_df = pd.DataFrame({'Commodity': [commodity]})
                    
                    encoded_output = encoder.transform(comm_df[['Commodity']])
                    
                    if hasattr(encoded_output, "toarray"):
                        encoded_val = encoded_output.toarray().ravel()[0]
                    elif hasattr(encoded_output, "values"):
                        encoded_val = encoded_output.values.ravel()[0]
                    else:
                        encoded_val = encoded_output.ravel()[0]
                        
                    # print(f"Encoded Value (Commodity_enc): {encoded_val}")
                    
                    # Construct input
                    input_data = pd.DataFrame([{
                        'year': year,
                        'month': month,
                        'Commodity_enc': encoded_val
                    }])
                    
                    input_data = input_data[['year', 'month', 'Commodity_enc']]
                    # print(f"Model Input: {input_data.values}")
                    
                    # Predict
                    prediction = model.predict(input_data)
                    print(f"Raw Model Prediction: {prediction[0]}")
                    
                    # Hypothesis: Model predicts residual
                    # log_price = Commodity_enc + residual
                    residual = prediction[0]
                    base_enc = encoded_val
                    
                    predicted_price_direct = float(np.expm1(residual))
                    print(f"current_logic_price: {predicted_price_direct}")
                    
                    predicted_price_residual = float(np.expm1(base_enc + residual))
                    print(f"HYPOTHESIS_PRICE: {predicted_price_residual}")
                    
                    
                except Exception as e:
                    print(f"❌ Error in loop: {e}")

if __name__ == "__main__":
    debug_prediction()
