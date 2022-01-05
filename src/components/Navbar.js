import React from "react";

function Navbar() {
  return (
    <div className="container-fluid">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
          <h1><b>EuroNews</b></h1>
          </a>
        </header>
      </div>
  );
}

export default Navbar;
