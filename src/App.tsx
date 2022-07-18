import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./containers/Home";
import Protected from "./containers/Protected";

import * as toastr from "toastr";
import { AuthService } from "./services/AuthService";

export default class App extends React.Component<any, any> {
  public authService: AuthService;
  private shouldCancel: boolean;

  constructor(props: any) {
    super(props);

    this.authService = new AuthService();
    this.state = { user: {}, api: {} };
    this.shouldCancel = false;
  }

  public componentDidMount() {
    this.getUser();
  }

  public login = () => {
    this.authService.login();
  };

  public componentWillUnmount() {
    this.shouldCancel = true;
  }

  public logout = () => {
    this.authService
      .logout()
      .then(() => window.open("/", "_self"))
      .catch((err) => console.log(err));
  };

  public getUser = () => {
    this.authService.getUser().then((user) => {
      if (user) {
        toastr.success("User has been successfully loaded from store.", "", {
          closeButton: true,
          positionClass: "toast-bottom-right",
        });
      } else {
        toastr.info("You have not been verified.", "", {
          closeButton: true,
          positionClass: "toast-bottom-right",
        });
      }

      if (!this.shouldCancel) {
        this.setState({ user });
      }
    });
  };

  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() =>
              this.state.user ? (
                <Redirect to="/protected" />
              ) : (
                <Home login={this.login} />
              )
            }
          />
          <Route
            path="/protected"
            component={() =>
              this.state.user ? (
                <Protected
                  logout={this.logout}
                  getUser={this.getUser}
                  api={this.state.api}
                  user={this.state.user}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
