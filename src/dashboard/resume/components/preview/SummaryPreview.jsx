import React from "react";

function SummaryPreview({ resumeInfo }) {
  return (
    <div>
      <p className="text-xs">{resumeInfo?.summery}</p>
    </div>
  );
}

export default SummaryPreview;
