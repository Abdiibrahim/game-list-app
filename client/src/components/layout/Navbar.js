import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const isAuthenticated = this.props.auth.isAuthenticated;

    return (
      <div className="navbar-fixed">
        <nav className="nav-extended z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              MERN Game List
            </Link>
          </div>
          { isAuthenticated && 
            <div className="nav-content">
              <ul className="tabs tabs-transparent light-blue darken-3">
                <li className="tab"><a href="#test1">Test 1</a></li>
                <li className="tab"><a href="#test2">Test 2</a></li>
                <li className="tab"><a href="#test3">Test 3</a></li>
              </ul>
            </div>
          }
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
) (Navbar);
