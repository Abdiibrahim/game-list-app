import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Grid } from "@material-ui/core";

class Landing extends Component {
  render() {
    return (
      <Container>
        <Grid container direction="column" alignItems="center" justify="center">
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
        </Grid>
        <br />
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item xs={3} style={{textAlign:"center"}}>
            <Button href="/register" variant="outlined" color="primary" disableElevation>
              Register
            </Button>
          </Grid>
          <Grid item xs={3} style={{textAlign:"center"}}>
            <Button href="/login" variant="contained" color="primary" disableElevation>
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Landing;
