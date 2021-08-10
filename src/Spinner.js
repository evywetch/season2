import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};
// This is an object, provides some default properties
// If u forget to define props message, this default value will take place
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
