import React, { ReactElement } from "react";

function Loading(): ReactElement {
  return (
    <div className="Loading">
      <div className="Loading_container">
        <span className="Loading_container-elements" />
        <span className="Loading_container-elements" />
        <span className="Loading_container-elements" />
      </div>
    </div>
  );
}

export default Loading;
