import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "white" }}
      className="jumbotron"
    >
      <img src="./book.jpg" alt="google-logo" style={{ height: "400px", width: "800px" }} />
    </div>
  );
}

export default Jumbotron;