import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/common/navbar";
import { ToastContainer } from "react-toastify";

import UserA from "./components/usera";
import UserB from "./components/userb";
import UserC from "./components/userc";
import UserD from "./components/userd";

import DataContext from "./context/dataContext";

class AppContainer extends Component {
  state = {
    usera: {
      xvalue: 20,
      fruit: "Mango",
      date: "2020-11-26",
      time: "10:30",
      yvalue: 10,
    },
  };

  handleusera = (useradata) => {
    this.setState({ usera: useradata });
  };

  render() {
    return (
      <>
        <NavBar />
        <ToastContainer position="top-left" autoClose={2000} />
        <DataContext.Provider
          value={{
            stateData: this.state,
            setUserFunction: {
              setUsera: this.handleusera,
            },
          }}
        >
          <Switch>
            <Route
              path="/userd"
              exact
              render={(props) => <UserD {...props} />}
            />
            <Route
              path="/userc"
              exact
              render={(props) => <UserC {...props} />}
            />
            <Route
              path="/userb"
              exact
              render={(props) => <UserB {...props} />}
            />
            <Route path="/" exact render={(props) => <UserA {...props} />} />
          </Switch>
        </DataContext.Provider>
      </>
    );
  }
}

export default AppContainer;
