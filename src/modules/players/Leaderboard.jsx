import React, { Component } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

import PlayerForm from "./PlayerForm";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  modal: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  },
  slider: {
    padding: "22px 6px"
  },
  sliderContainer: {
    marginTop: "16px",
    marginBottom: "20px"
  }
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
class Leaderboard extends Component {
  state = { open: false, editPlayer: null, formAction: "create" };
  componentDidMount = () => {
    this.props.dispatch({ type: "FETCH_PLAYERS_REQUEST" });
  };
  handleOpen = () => {
    this.setState({ open: true, formAction: "create", editPlayer: null });
  };
  handleClose = () => {
    this.setState({ open: false, formAction: "create" });
  };

  sortedData = () => {
    return [...this.props.players].sort((a, b) => {
      if (a.score === b.score)
        return a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1;
      if (a.score < b.score) return 1;
      else return -1;
    });
  };

  getTitle = () => {
    switch (this.state.formAction) {
      case "create":
        return "Create new Player";
      case "edit":
        return "Edit Player";
      default:
        throw new Error(`Invalid form action ${this.state.formAction}`);
    }
  };

  render() {
    const { classes, dispatch } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.modal}>
            <Typography variant="h6" id="modal-title">
              {this.getTitle()}
            </Typography>
            <PlayerForm
              player={this.state.editPlayer}
              action={this.state.formAction}
            />
          </div>
        </Modal>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">
                <Button onClick={this.handleOpen}>Add</Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.sortedData().map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.lastName}, {row.firstName}
                </TableCell>
                <TableCell align="right">{row.score}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => {
                      this.setState({
                        open: true,
                        editPlayer: row,
                        formAction: "edit"
                      });
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() =>
                      dispatch({ type: "DELETE_PLAYER_REQUEST", id: row.id })
                    }
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = function(state, selfProps) {
  return {
    players: state.players
  };
};

export default withStyles(styles)(connect(mapStateToProps)(Leaderboard));
