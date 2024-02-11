import React from 'react';

interface RadioButtonProps {
  id: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, value, checked, onChange, label }) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <div>
      <input type="radio" id={id} value={value} checked={checked} onChange={handleChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
