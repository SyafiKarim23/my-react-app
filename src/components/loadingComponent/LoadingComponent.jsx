import React from "react";
import "./loadingComponent.css";
import { Spin } from "antd";

const LoadingComponent = () => {
  return (
    <div className="Loading-container">
      <Spin size="large" tip="Loading ..." />
    </div>
  );
};

export default LoadingComponent;
