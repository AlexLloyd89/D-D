import React, { Component, setGlobal } from "reactn";
import axios from "axios";

export default class CurrentEnemies extends Component {
  handleClick = name => {
    axios
      .get(`http://dnd5eapi.co/api/monsters/?name=${name}`)
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
      <div>
        {this.global.currentMonsters
          ? this.global.currentMonsters.map(monster => (
              <p
                onClick={() => this.handleClick(monster.name)}
                key={monster._id}
              >
                {monster.name}
              </p>
            ))
          : ""}
      </div>
    );
  }
}
