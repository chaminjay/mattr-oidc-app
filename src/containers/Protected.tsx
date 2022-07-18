import * as React from "react";
import AuthContent from "../components/AuthContent";
import Navbar from "../components/Header";
import logo from "../logo.svg";

interface ProtectedProps {
  getUser: () => void;
  logout: () => void;
  api: any;
  user: any;
}

class Protected extends React.Component<ProtectedProps, any> {
  public render() {
    return (
      <main>
        {this.props.user.profile ? (
          <>
            <Navbar
              pageTitle="ß Company"
              logoSrc={logo}
              user={this.props.user.profile.given_name}
              logout={this.props.logout}
            />
            <div className="container">
              <AuthContent api={this.props.api} user={this.props.user} />
            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </main>
    );
  }
}

export default Protected;
