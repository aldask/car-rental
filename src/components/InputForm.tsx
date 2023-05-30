import React from "react";

interface FormProps {
  type: string;
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  max?: number;
  min?: number;
  pattern?: string;
  required?: boolean;
  placeholder?: string;
}

const InputForm: React.FC<FormProps> = ({
  type,
  label,
  name,
  value,
  onChange,
  max,
  min,
  pattern,
  required,
  placeholder,
}) => {
  return (
    <div>
      <label>
        {label} {required && <span className="red">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        max={max}
        min={min}
        pattern={pattern}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputForm;
