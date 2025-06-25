def extract_entity_labels(filepath):
    entity_labels = set()
    with open(filepath, 'r', encoding='utf-8') as file:
        for line in file:
            line = line.strip()
            if line:  # ignore blank lines
                parts = line.split()
                if len(parts) >= 2:
                    label = parts[-1]
                    entity_labels.add(label)
    return sorted(entity_labels)

# Usage
labels = extract_entity_labels(r"C:\Users\saima\OneDrive\Desktop\ml\Named-Entity-Recognition-with-Bidirectional-LSTM-CNNs\data\train.txt")
print("Unique entity labels:", labels)
