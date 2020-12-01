import React from "react";

const SelectInput = ({ name, label, onChange, error, options }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        className="form-control"
        onChange={onChange}
        id={name}
      >
        <option value="">Choose...</option>
        {options &&
          options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
};

export default SelectInput;
