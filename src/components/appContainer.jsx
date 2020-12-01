import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import UserA from "./usera";
import UserB from "./userb";
import DataContext from "./../context/dataContext";

class AppContainer extends Component {
  state = {
    userA: {
      xvalue: 20,
      fruit: "Mango",
      date: "2020-11-26",
      time: "10:30",
      yvalue: 10,
      errors: {},
    },
    userB: {
      xvalue: 20,
      fruit: "Mango",
      date: "2020-11-26",
      time: "10:30",
      yvalue: 10,
      errors: {},
    },
    userC: {
      xvalue: 20,
      fruit: "Mango",
      date: "2020-11-26",
      time: "10:30",
      yvalue: 10,
      errors: {},
    },
    userD: {
      xvalue: 20,
      fruit: "Mango",
      date: "2020-11-26",
      time: "10:30",
      yvalue: 10,
      errors: {},
    },
  };
  render() {
    return (
      <DataContext.Provider value={{ stateData: this.state }}>
        <Switch>
          <Route path="/userb" component={UserB} />
          <Route path="/" exact component={UserA} />
        </Switch>
      </DataContext.Provider>
    );
  }
}

export default AppContainer;
