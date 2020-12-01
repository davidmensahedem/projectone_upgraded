import React, { Component } from "react";
import Joi from "joi-browser";

import JumboComponent from "./common/jumboComponent";
import InputComponent from "./common/inputFieldComponent";
import SelectInput from "./common/selectFieldComponent";

class AppForm extends Component {
  state = {
    data: {},
    errors: {},
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path] = item.message;

    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  renderJumbo(hlabel, plabel) {
    return <JumboComponent hlabel={hlabel} plabel={plabel} />;
  }

  renderSelect(name, label, options) {
    return (
      <SelectInput
        label={label}
        name={name}
        error={this.state.errors[name]}
        onChange={this.handleChange}
        options={options}
      />
    );
  }

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(
    name,
    label,
    type = "text",
    placeholder = "placeholder",
    autoFocus = false
  ) {
    return (
      <InputComponent
        value={this.state.data[name]}
        onChange={this.handleChange}
        name={name}
        error={this.state.errors[name]}
        label={label}
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
    );
  }
}

export default AppForm;
