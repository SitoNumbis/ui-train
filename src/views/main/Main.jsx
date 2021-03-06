import React from "react";

// views
import Museums from "../../examples/uiuxdesig.trends/Museums Virtually/views/Museums/Museums";
import Home from "../../examples/uiuxdesig.trends/Museums Virtually/views/Home/Home";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Home />
      <Museums />
    </div>
  );
};

export default Main;
