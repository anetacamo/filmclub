import React from 'react';

export default function Input({
  type,
  placeholder,
  value,
  onInputChange,
  required,
  nameClass,
}) {
  return (
    <input
      className={nameClass}
      placeholder={placeholder}
      type={type ? type : 'text'}
      value={value}
      onChange={(e) => onInputChange(e.target.value)}
      required={required}
    />
  );
}
