import { useState } from "react";
import NERInput from "./components/NERInput";
import NERResults from "./components/NERResults";
import EntityLegend from "./components/EntityLegend";

function App() {
  const [entities, setEntities] = useState([]);

  return (
    <div className="container">
      <h1>Named Entity Recognition</h1>

      {/* Entity Legend goes here */}
      <EntityLegend />

      <div className="layout-grid">
        {/* Input section */}
        <div>
          <div className="card">
            <h5 className="card-title">Enter Text</h5>
            <div className="ner-input">
              <NERInput setEntities={setEntities} />
            </div>
          </div>
        </div>

        {/* Result section */}
        <div>
          <div className="card">
            <h5 className="card-title">NER Results</h5>
            <div className="ner-results">
              <NERResults entities={entities} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
