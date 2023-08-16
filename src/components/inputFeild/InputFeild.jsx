import React from "react";
import "./inputFeild.css";

const InputFeild = ({
  type = "text",
  required,
  onChange,
  name = "",
  placeholder = "",
  value = "",
  className,
}) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        className={className}
        onChange={onChange}
      />
    </div>
  );
};

export default InputFeild;
