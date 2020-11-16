import React from "react";

const ProgressBar = ({ title, className }) => {
  return (
    <div className="progress_bar">
        <div className="progress_bar--name">{title}</div>
        <div className="progress_bar--container">
            <span className={className}></span>
        </div>
    </div>
  );
};

export default ProgressBar;
