import React from "react";
import AppForm from "./appForm";
import Joi from "joi-browser";
import ListInfo from "./common/useraInfo";
import { toast } from "react-toastify";

class UserD extends AppForm {
  state = {
    data: {
      zvalue: 3,
      date: "2020-11-25",
      time: "10:00",
    },
    info: {},
    errors: {},
  };

  schema = {
    zvalue: Joi.number().min(1).max(50).required().label("Z value"),
    date: Joi.date().required().label("Date"),
    time: Joi.string().required().label("Time"),
  };

  getData = () => {
    if (localStorage.getItem("UserD")) {
      const useraInfo = JSON.parse(localStorage.getItem("UserD"));
      this.setState({ data: useraInfo });
    }
  };

  getInfo = () => {
    const useraInfo = JSON.parse(localStorage.getItem("UserA"));
    this.setState({ info: useraInfo });
  };

  componentDidMount() {
    this.getInfo();
    this.getData();
  }

  doSubmit = () => {
    toast.success("User D's Info Entered Successfully");
    localStorage.setItem("UserD", JSON.stringify(this.state.data));
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        {this.renderJumbo("User D's - Interface", "React UI for User D")}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ListInfo info={this.state.info} />
            </div>
            <div className="col">
              <form
                onSubmit={this.handleSubmit}
                className="bg-light px-md-3 mb-2 border rounded px-3 py-2 py-xs-4"
              >
                {this.renderInput(
                  "zvalue",
                  "Enter a value for z",
                  "number",
                  "Enter z value"
                )}
                {this.renderInput(
                  "date",
                  "Select a date",
                  "date",
                  "Select date",
                  false
                )}

                {this.renderInput(
                  "time",
                  "Select a time",
                  "time",
                  "Select time",
                  false
                )}
                {this.renderButton("Enter Info")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserD;
