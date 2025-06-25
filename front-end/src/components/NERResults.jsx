import React from "react";

const NERResults = ({ entities }) => {
  return (
    <div className="ner-results" style={{ height: "350px", overflowY: "scroll" }}>
      <h5 className="card-title">NER Results</h5>
      {entities.length === 0 ? (
        <p className="text-muted">No entities found.</p>
      ) : (
        <ul>
          {entities.map(([word, label], index) => (
            <li key={index} className="d-flex justify-content-between align-items-center">
              <span className="entity">{word}</span>
              <span className="category">
                <span className={`badge ${label === "O" ? "bg-secondary" : "bg-info"}`}>{label}</span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NERResults;