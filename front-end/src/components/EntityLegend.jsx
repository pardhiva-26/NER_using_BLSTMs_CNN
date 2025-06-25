import React from "react";

// Mapping high-level entity types to Bootstrap badge colors
const entityColors = {
  PER: "primary",
  ORG: "success",
  LOC: "secondary",
  MISC: "warning",
};

function EntityLegend() {
  return (
    <div className="card mb-4">
      <div className="card-header bg-light">
        <h5 className="card-title mb-0">Entity Legend</h5>
      </div>
      <div className="card-body d-flex flex-wrap gap-2">
        {Object.entries(entityColors).map(([entity, color]) => (
          <span key={entity} className={`badge bg-${color}`}>
            B-{entity}, I-{entity}
          </span>
        ))}
      </div>
    </div>
  );
}

export default EntityLegend;
