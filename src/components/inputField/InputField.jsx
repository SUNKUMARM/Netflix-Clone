import React from "react";
import "./inputField.css";

const InputField = ({
  type = "text",
  required,
  id = "",
  onChange,
  name = "",
  placeholder = "",
  value = "",
  className,
}) => {
  return (
    <div>
      <input
        id={id}
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

export default InputField;
