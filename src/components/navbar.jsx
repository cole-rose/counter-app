import React, { Component } from "react";

//stateless functional component
function NavBar({ totalCounters }) {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Shopping Cart{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
