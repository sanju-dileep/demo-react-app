import React from "react";
import MyCapitalName from "../MyCapitalName";
import MyName from "../MyName";

const MyFullName = (props) => {
  const { name, age } = props;
  return (
    <div>
      <MyName name={name} age={age} />
      <MyCapitalName />
    </div>
  );
};

export default MyFullName;
