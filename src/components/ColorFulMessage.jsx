import React from "react";

const ColorFulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "19px"
  };

  return <p style={contentStyle}>{props.message}</p>;
};

export default ColorFulMessage;
