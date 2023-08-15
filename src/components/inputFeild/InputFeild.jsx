import React from "react";
import "./inputFeild.css";

const InputFeild = ({
  type = "text",
  required,
  onchange,
  placeholder = "",
  value = "",
  className,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        className={className}
        onchange={onchange}
      />
    </div>
  );
};

export default InputFeild;
