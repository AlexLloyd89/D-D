import React, { Component } from "reactn";

export default class CurrentEnemies extends Component {
  render() {
    return (
      <div>
        {this.global.currentMonsters
          ? this.global.currentMonsters.map(monster => (
              <p key={monster._id}>{monster.name}</p>
            ))
          : ""}
      </div>
    );
  }
}
