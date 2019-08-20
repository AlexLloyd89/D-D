import React, { Component } from "reactn";
import SearchField from "../SearchField/SearchField";
import MonsterInformation from "../MonsterInformation/MonsterInformation";
import CurrentEnemies from "../../BattleTools/CurrentEnemies";

//Material UI
import Grid from "@material-ui/core/Grid";

//css
import "./SearchContainer.css";

export default class SearchContainer extends Component {
  render() {
    return (
      <Grid container style={{ height: 300, background: "cadetblue" }}>
        <Grid item sm={4}>
          <Grid container>
            <Grid item sm={12} style={{ height: 60 }}>
              <SearchField />
            </Grid>
            <Grid item sm={12} style={{ height: 240, background: "purple" }}>
              <div
                style={{
                  overflow: "auto",
                  height: "-webkit-fill-available",
                  flexGrow: 1
                }}
              >
                <CurrentEnemies />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={8}>
          <div
            style={{
              overflow: "auto",
              height: "-webkit-fill-available",
              background: "chartreuse"
            }}
          >
            <MonsterInformation />
          </div>
        </Grid>
      </Grid>
    );
  }
}
