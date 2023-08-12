import React from "react";
import "./inputFeild.css";

const InputFeild = ({
  type = "text",
  required,
  placeholder = "",
  value = "",
  className,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        required
        value={value}
        className={className}
      />
    </div>
  );
};

export default InputFeild;
