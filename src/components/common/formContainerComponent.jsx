import React from "react";
import InputComponent from "./inputFieldComponent";
import SelectInput from "./selectFieldComponent";
import SubmitButton from "./submitButton";

const FormContainer = () => {
  return (
    <form className="py-4 px-4 border">
      <InputComponent />
      <SelectInput />
      <div className="form-group">
        <label htmlFor="">Select a time</label>
        <input type="time" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">Enter a value for y</label>
        <input type="number" className="form-control" />
      </div>
      <SubmitButton />
    </form>
  );
};

export default FormContainer;
