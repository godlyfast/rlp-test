import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import Slider from "@material-ui/lab/Slider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  slider: {
    padding: "22px 6px"
  },
  sliderContainer: {
    marginTop: "16px",
    marginBottom: "20px"
  }
});
const emptyPlayer = { firstName: "", lastName: "", score: 0 };
class PlayerForm extends Component {
  state = { newPlayer: { ...emptyPlayer } };

  componentDidMount = () => {
    this.setState({
      ...this.state,
      newPlayer: this.props.player
        ? { ...this.props.player }
        : { ...emptyPlayer }
    });
  };

  handleScoreChange = (event, value) => {
    this.setState({
      ...this.state,
      newPlayer: { ...this.state.newPlayer, score: value }
    });
  };
  handleInputChange = inputName => event => {
    this.setState({
      ...this.state,
      newPlayer: { ...this.state.newPlayer, [inputName]: event.target.value }
    });
  };
  handleAction = () => {
    switch (this.props.action) {
      case "create":
        this.props.dispatch({
          type: "CREATE_PLAYER_REQUEST",
          player: this.state.newPlayer
        });
        break;
      case "edit":
        this.props.dispatch({
          type: "EDIT_PLAYER_REQUEST",
          player: this.state.newPlayer
        });
        break;
      default:
        throw new Error(`Invalid action ${this.props.action}`);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <form noValidate autoComplete="off">
        <TextField
          id="first-name"
          label="First Name"
          fullWidth
          value={this.state.newPlayer.firstName}
          onChange={this.handleInputChange("firstName")}
          margin="normal"
        />
        <TextField
          id="last-name"
          label="Last Name"
          fullWidth
          margin="normal"
          value={this.state.newPlayer.lastName}
          onChange={this.handleInputChange("lastName")}
        />
        <div className={classes.sliderContainer}>
          <Typography id="label">
            Score: {this.state.newPlayer.score}
          </Typography>
          <Slider
            classes={{ container: classes.slider }}
            value={this.state.newPlayer.score}
            min={0}
            max={100}
            step={1}
            aria-labelledby="label"
            onChange={this.handleScoreChange}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={this.handleAction}
        >
          OK
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(connect()(PlayerForm));
