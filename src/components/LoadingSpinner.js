import React from "react";
import "./LoadingSpinner.css";

function LoadingSpinner({ isLoading }) {
  return (
    <div className="loading-spinner-container">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
