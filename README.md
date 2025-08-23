# Named-Entity-Recognition

A keras implementation of Bidirectional-LSTM_CNNs for Named-Entity-Recoganition.

# Result

The model produces a test F1_score of 92.4 % with ~70 epochs.

## To run the script

```bash
   python main.py
```

## Requirements

    1) nltk
    2) Keras
    3) Tensorflow

## Inference on trained model

```python
from ner_parser import Parser

p = Parser()

p.load_models("models/")

p.predict("Pardhiva lives in India")
##Output [('Pardhiva', 'B-PER'), ('lives', 'O'), ('in', 'O'), ('India', 'B-LOC')]
```

## 🌐 Frontend Web App (React + Vite)

We also provide a **React + Vite web interface** for Named Entity Recognition.

### 🔹 Features:
- Input custom text and view real-time NER predictions
- Entity highlights by type (`PERSON`, `ORG`, `LOC`, `MISC`)
- Bootstrap-powered responsive UI

---

### 🖥️ Running the Frontend Locally

```bash
cd front-end
npm install
npm run dev
```

### 🧪 Backend NER Model
To run the backend prediction API:
python app.py.

This will start a Flask server that listens for POST requests at /predict.

