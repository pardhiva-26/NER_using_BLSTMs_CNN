import { useState } from "react";
import axios from "axios";

function NERInput({ setEntities }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://web-production-26bd.up.railway.app/predict", {
        text,
      });
      setEntities(response.data.entities);
    } catch (error) {
      console.error("Prediction failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <div className="mb-3">
        <textarea
          id="inputText"
          className="form-control"
          value={text}
          rows={4}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your sentence here..."
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </form>
  );
}

export default NERInput;
