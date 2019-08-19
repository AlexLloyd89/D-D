import React, { Component, setGlobal } from "reactn";
import axios from "axios";

//Material UI
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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
    monster: "",
    type: "monsters"
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.type === "monsters") {
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
        .then(
          res => setGlobal({ monsterData: res.data }),
          error => alert(error)
        );
    } else if (this.state.type === "spells") {
      //Select spell
      axios
        .get(`http://dnd5eapi.co/api/spells/?name=${this.state.monster}`)
        .then(
          res => {
            let spellUrl = res.data.results[0].url;
            return axios.get(spellUrl);
          },
          error => {
            return error;
          }
        )
        .then(res => setGlobal({ spellData: res.data }), error => alert(error));
    }
  };

  render() {
    return (
      <>
        <div>
          <Select
            value={this.state.type}
            onChange={this.handleChange}
            inputProps={{
              name: "type",
              id: "type"
            }}
          >
            <MenuItem value={"monsters"}>Monsters</MenuItem>
            <MenuItem value={"spells"}>Spells</MenuItem>
          </Select>
          <CssTextField
            id="custom-css-standard-input"
            label="Query..."
            name="monster"
            onChange={this.handleChange}
            value={this.state.monster}
          />
          <Button variant="contained" onClick={this.handleClick}>
            Search
          </Button>
        </div>
        <div />
      </>
    );
  }
}
