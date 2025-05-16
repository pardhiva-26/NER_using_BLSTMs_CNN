
from ner import Parser

p = Parser()

p.load_models("models/")

output = p.predict("Technology has transformed the way we communicate, making it faster and more convenient than ever before. From instant messaging to video calls, staying connected across the globe is now just a click away.")
for word, label in output:
    print(f"{word} => {label}")
##Output [('Steve', 'B-PER'), ('went', 'O'), ('to', 'O'), ('Paris', 'B-LOC')]