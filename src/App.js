import React, { Component } from "react";
import Leaderboard from "./modules/players/Leaderboard";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});
class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12} style={{ padding: 20 }}>
            <Leaderboard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
