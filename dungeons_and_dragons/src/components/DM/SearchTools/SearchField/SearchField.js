import React, { Component, setGlobal } from "reactn";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "teal"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "teal"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "teal"
      }
    }
  }
})(TextField);

export default class SearchField extends Component {
  state = {
    monster: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClick = e => {
    e.preventDefault();

    axios
      .get(`http://dnd5eapi.co/api/monsters/?name=${this.state.monster}`)
      .then(
        res => {
          let monsterUrl = res.data.results[0].url;

          return axios.get(monsterUrl);
        },
        error => {
          return error;
        }
      )
      .then(res => setGlobal({ monsterData: res.data }), error => alert(error));
  };

  render() {
    return (
      <>
        <CssTextField
          id="custom-css-standard-input"
          label="Custom CSS"
          name="monster"
          onChange={this.handleChange}
          value={this.state.monster}
        />
        <Button variant="contained" onClick={this.handleClick}>
          Search
        </Button>
      </>
    );
  }
}
