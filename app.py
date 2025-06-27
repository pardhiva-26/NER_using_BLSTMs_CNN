from flask import Flask, request, jsonify
from ner_parser import Parser
from flask_cors import CORS
import nltk
nltk.data.path.append("nltk_data") 

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

parser = Parser()
parser.load_models("models/")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    text = data.get("text", "")
    output = parser.predict(text)
    return jsonify({"entities": output})

if __name__ == '__main__':
    app.run(debug=True)
