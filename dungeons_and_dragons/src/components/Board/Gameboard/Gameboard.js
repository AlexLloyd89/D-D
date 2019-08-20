import React, { Component } from "react";
import SearchContainer from "../../DM/SearchTools/SearchContainer/SearchContainer";
import CurrentEnemies from "../../DM/BattleTools/CurrentEnemies";

import Grid from "@material-ui/core/Grid";

export default class Gameboard extends Component {
  render() {
    return (
      <div style={{ width: 1170, margin: "0 auto" }}>
        <Grid container>
          {/* TOP CONTAINER */}
          <Grid container>
            {/* Game Board */}
            <Grid item sm={12}>
              <div style={{ backgroundColor: "teal", height: 620 }}>
                GAME BOARD
              </div>
            </Grid>
          </Grid>

          {/* BOTTOM TEXT */}
          <Grid container>
            <SearchContainer />
          </Grid>
        </Grid>
      </div>
    );
  }
}
