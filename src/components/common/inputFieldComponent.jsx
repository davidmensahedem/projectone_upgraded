import React from "react";
import moment from "moment";

const InputComponent = ({ name, label, error, type, value, ...rest }) => {
  const formatDateValue = (value) => {
    const dateValue = new Date(value).getDay();
    switch (dateValue) {
      case 1:
        return "Day : Monday ,";
        break;
      case 2:
        return "Day : Tuesday ,";
        break;
      case 3:
        return "Day : Wednesday ,";
        break;
      case 4:
        return "Day : Thursday ,";
        break;
      case 5:
        return "Day : Friday ,";
        break;
      case 6:
        return "Day : Saturday ,";
        break;

      default:
        return "Day : Sunday ,";
        break;
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        value={value}
        type={type}
        {...rest}
        className="form-control"
      />

      {type === "date" ? (
        <div className="alert alert-primary mt-2">
          {formatDateValue(value)}
          {`Date : ${new Date(value).toDateString()}`}
        </div>
      ) : (
        " "
      )}
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
};

export default InputComponent;
