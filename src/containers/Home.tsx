import * as React from "react";

interface HomeProps {
  login: () => void;
}

class Home extends React.Component<HomeProps, any> {
  public render() {
    return (
      <main>
        <div className="container-fluid">
          <div className="row vh-100">
            <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-center bg-dark p-3">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=openid://discovery?issuer=https://cse-new-dlscgr.vii.mattr.global/ext/oidc/v1/issuers/bbcd2526-3358-4ccf-98b2-b1fb792dc4ea"
                width="200"
                alt="mattr credential issuer qr"
              />
              <small className="text-light mt-3">
                Scan the QR code from your mobile Mattr wallet to get verifiable
                credentials.
              </small>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center p-3">
              <h6 className="text-center">Verify your credentials</h6>
              <button
                className="btn btn-primary"
                onClick={this.props.login}
              >
                <i className="bi bi-qr-code me-2"></i>
                Claim Access
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
