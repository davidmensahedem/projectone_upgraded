import React from "react";
import moment from "moment";
import AppForm from "./appForm";
import Joi from "joi-browser";
import DataContext from "./../context/dataContext";
import { toast } from "react-toastify";
import AppTable from "./common/appTable";
import VarianceTable from "./common/varianceTable";
import DateVarianceTable from "./common/dateVariance";

class UserA extends AppForm {
  static contextType = DataContext;
  state = {
    data: {
      xvalue: 20,
      fruit: "Mango",
      date: "2020-11-26",
      time: "10:30",
      yvalue: 10,
    },
    errors: {},
    timeData: {},
    valueData: {},
    dateData: {},
  };

  schema = {
    xvalue: Joi.number().min(1).max(50).required().label("X value"),
    fruit: Joi.string().required().label("Fruit"),
    date: Joi.date().required().label("Date"),
    time: Joi.string().required().label("Time"),
    yvalue: Joi.number().min(1).max(50).required().label("Y value"),
  };

  getData = () => {
    if (localStorage.getItem("UserA")) {
      const useraInfo = JSON.parse(localStorage.getItem("UserA"));
      this.setState({ data: useraInfo });
    } else {
      const { stateData } = this.context;
      const { usera: data } = stateData;
      this.setState({ data });
    }
  };

  getTimeData = () => {
    if (
      localStorage.getItem("UserA") ||
      localStorage.getItem("UserB") ||
      localStorage.getItem("UserC") ||
      localStorage.getItem("UserD")
    ) {
      const useraInfo = JSON.parse(localStorage.getItem("UserA"));
      const userbInfo = JSON.parse(localStorage.getItem("UserB"));
      const usercInfo = JSON.parse(localStorage.getItem("UserC"));
      const userdInfo = JSON.parse(localStorage.getItem("UserD"));

      const timeData = {
        useratime: useraInfo.time,
        userbtime: userbInfo.time,
        userctime: usercInfo.time,
        userdtime: userdInfo.time,
      };

      const valueData = {
        useravalue: useraInfo.xvalue,
        userbvalue: userbInfo.zvalue,
        usercvalue: usercInfo.zvalue,
        userdvalue: userdInfo.zvalue,
      };

      const dateData = {
        useravalue: useraInfo.date,
        userbvalue: userbInfo.date,
        usercvalue: usercInfo.date,
        userdvalue: userdInfo.date,
      };

      this.setState({ timeData, valueData, dateData });
    }
  };

  componentDidMount() {
    this.getData();
    this.getTimeData();
  }

  getVarianceInfo = (valueone, valuetwo) => {
    var startTime = moment.duration(valueone);
    var endTime = moment.duration(valuetwo);
    var duration = startTime.subtract(endTime);
    var hours = duration._data.hours;
    var minutes = duration._data.minutes;
    var results = `${hours} hrs ${minutes}min`;
    return results;
  };

  getDateVariance = (valueone, valuetwo) => {
    var startDate = moment(valueone);
    var endDate = moment(valuetwo);
    let diff = startDate.subtract(endDate)._d.toDateString();

    return diff;
  };

  calculateVariance = (value) => {
    let pctime = new Date().toTimeString();
    pctime = pctime.substring(0, 5);
    var startTime = moment.duration(pctime);
    var endTime = moment.duration(value);
    var duration = startTime.subtract(endTime);
    var hours = duration._data.hours;
    var minutes = duration._data.minutes;
    var results = `${hours} hrs ${minutes}min`;
    return results;
  };

  doSubmit = () => {
    this.context.setUserFunction.setUsera(this.state.data);
    toast.success("User A's Info Entered Successfully");
    localStorage.setItem("UserA", JSON.stringify(this.state.data));
    this.props.history.push("/userb");
  };

  render() {
    return (
      <DataContext.Consumer>
        {(datacontext) => {
          return (
            <div>
              {this.renderJumbo("User A's - Interface", "React UI for User A")}
              <div id="section-container" className="container">
                <div className="row">
                  <div className="col-md-5">
                    {this.state.valueData.useravalue ? (
                      <AppTable valueData={this.state.valueData} />
                    ) : (
                      " "
                    )}
                    {this.state.timeData.useratime ? (
                      <VarianceTable
                        timeData={this.state.timeData}
                        getVarianceInfo={this.getVarianceInfo}
                      />
                    ) : (
                      " "
                    )}
                    {this.state.dateData.useravalue ? (
                      <DateVarianceTable
                        dateData={this.state.dateData}
                        getDateVariance={this.getDateVariance}
                      />
                    ) : (
                      " "
                    )}
                  </div>
                  <div className="col">
                    <form
                      onSubmit={this.handleSubmit}
                      className="py-4 px-4 border rounded"
                    >
                      {this.renderInput(
                        "xvalue",
                        "Enter a value for x",
                        "number",
                        "Enter x value",
                        true
                      )}
                      {this.renderSelect(
                        "fruit",
                        "Select your favourite fruit",
                        ["Mango", "Pear", "Orange", "Apple"]
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
                      <div className="form-group">
                        <div className="card">
                          <h5 className="card-header bg-primary">Variance</h5>
                          <div className="card-body">
                            <div className="card-text">
                              <p>
                                PC Time:{" "}
                                <span className="badge badge-warning">
                                  {new Date().toTimeString().substring(0, 5)}
                                </span>
                              </p>
                              <p>
                                User A's Time:{" "}
                                <span className="badge badge-warning">
                                  {this.state.data.time}
                                </span>
                              </p>
                              <p>
                                Time Variance :{" "}
                                <span className="badge badge-danger">
                                  {this.calculateVariance(this.state.data.time)}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {this.renderInput(
                        "yvalue",
                        "Enter a value for y",
                        "number",
                        "Enter y value",
                        false
                      )}
                      {this.renderButton("Enter Info")}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default UserA;
