# Named-Entity-Recognition

A keras implementation of Bidirectional-LSTM_CNNs for Named-Entity-Recoganition. The original paper can be found at https://arxiv.org/abs/1511.08308

The implementation differs from the original paper in the following ways :

1. lexicons are not considered
2. Bucketing is used to speed up the training
3. nadam optimizer used instead of SGD

# Result

The model produces a test F1_score of 90.9 % with ~70 epochs. The results produced in the paper for the given architecture is 91.14
Architecture(BILSTM-CNN with emb + caps)

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

##🧪 Backend NER Model
To run the backend prediction API:
python app.py
This will start a Flask server that listens for POST requests at /predict.

##Example request format:
{
  "text": "Virat Kohli plays for RCB in Bengaluru."
}
Expected response:
{
  "entities": [["Virat", "B-PER"], ["Kohli", "I-PER"], ["RCB", "B-ORG"], ["Bengaluru", "B-LOC"]]
}
