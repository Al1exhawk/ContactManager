import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { appname } = props;
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark mb-3 py-0"
      style={{
        backgroundColor: "#00b386"
      }}
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          {appname}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.propTypes = {
  appname: PropTypes.string.isRequired
};
Header.defaultProps = {
  appname: "My App"
};
export default Header;
