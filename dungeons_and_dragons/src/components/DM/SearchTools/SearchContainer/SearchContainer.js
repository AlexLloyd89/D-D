import React, { Component } from "reactn";
import SearchField from "../SearchField/SearchField";
import MonsterInformation from "../MonsterInformation/MonsterInformation";

export default class SearchContainer extends Component {
  render() {
    return (
      <div>
        <SearchField />
        <MonsterInformation />
      </div>
    );
  }
}
