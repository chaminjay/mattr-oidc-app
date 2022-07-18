import * as React from "react";

export interface IHeaderProps {
  pageTitle: string;
  user: string;
  logoSrc: any;
  logout: () => void;
}

export default function Navbar(props: IHeaderProps) {
  return (
    <nav className="d-flex align-items-center justify-content-between bg-dark text-light py-2 px-4">
      <div className="d-inline-flex align-items-center brand">
        <img src={props.logoSrc} className="me-4" height="40px" alt="logo" />
        <h1 className="fw-light">{props.pageTitle}</h1>
      </div>
      <div className="profile d-inline-flex align-items-center">
        <h4 className="fw-light mb-0 me-3">Welcome {props.user}</h4>
        <button className="btn btn-outline-primary" onClick={props.logout}><i className="bi bi-box-arrow-right me-2"></i>Sign out</button>
      </div>
    </nav>
  );
}
