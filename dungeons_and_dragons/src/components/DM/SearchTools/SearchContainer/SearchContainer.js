import React, { Component } from "reactn";
import SearchField from "../SearchField/SearchField";
import MonsterInformation from "../MonsterInformation/MonsterInformation";

//Material UI
import Grid from "@material-ui/core/Grid";

//css
import "./SearchContainer.css";

export default class SearchContainer extends Component {
  render() {
    return (
      <div className="wrapMe">
        <div>
          <SearchField />
        </div>
        <div>
          <MonsterInformation />
        </div>
      </div>
    );
  }
}
