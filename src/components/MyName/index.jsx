import React from "react";

const MyName = (props) => {
  const { name, age } = props;

  return (
    <div style={{ background: "green", padding: "10px", marginBottom: "5px" }}>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
    </div>
  );
};

export default MyName;
