import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Game Tracker</b>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              A full-stack app that keeps track of video games (in progress)
            </p>
            <p>
              <b>TODO: </b>
              <li>create components for titles, user set</li>
              <li>list of games (search / table) (by genre, platform, rating)</li>
              <li>game info page (number of players, score, details), embedded game trailer (youtube api), related games</li>
              <li>game completion status, ratings (plan to, dropped, in progress, completed)</li>
              <li>user info (date joined, number of games/status, average rating, avatar, account settings)</li>
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
