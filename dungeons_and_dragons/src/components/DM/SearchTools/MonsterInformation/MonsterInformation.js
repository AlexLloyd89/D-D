import React, { Component, setGlobal } from "reactn";
import Button from "@material-ui/core/Button";

let currentMonsters = [];

export default class MonsterInformation extends Component {
  addMonster = () => {
    let myMonster = this.global.monsterData;
    currentMonsters.push(myMonster);
    setGlobal({ currentMonsters });
  };

  render() {
    return (
      <>
        <div>name: {this.global.monsterData.name}</div>
        <div>challenge rating: {this.global.monsterData.challenge_rating}</div>
        <div>armor class: {this.global.monsterData.armor_class}</div>
        <div>hit points: {this.global.monsterData.hit_points}</div>
        <div>hit dice: {this.global.monsterData.hit_dice}</div>
        <div>strength: {this.global.monsterData.strength}</div>
        <div>dexterity: {this.global.monsterData.dexterity}</div>
        <div>constitution: {this.global.monsterData.constitution}</div>
        <div>intelligence: {this.global.monsterData.intelligence}</div>
        <div>wisdom: {this.global.monsterData.wisdom}</div>
        <div>charisma: {this.global.monsterData.charisma}</div>
        <div>dexterity save: {this.global.monsterData.dexterity_save}</div>
        <div>wisdom save: {this.global.monsterData.wisdom_save}</div>
        <div>
          constitution save: {this.global.monsterData.constitution_save}
        </div>
        <div>charisma save: {this.global.monsterData.charisma_save}</div>
        <div>perception: {this.global.monsterData.perception}</div>
        <div>stealth: {this.global.monsterData.stealth}</div>
        <div>
          damage vulnerabilities:{" "}
          {this.global.monsterData.damage_vulnerabilities}
        </div>
        <div>
          damage resistances: {this.global.monsterData.damage_resistances}
        </div>
        <div>
          damage immunities: {this.global.monsterData.damage_immunities}
        </div>
        <div>senses: {this.global.monsterData.senses}</div>
        <div>languages: {this.global.monsterData.languages}</div>
        <div>
          actions:{" "}
          {this.global.monsterData.actions
            ? this.global.monsterData.actions.map(item => (
                <ul>
                  <li>name: {item.name}</li>
                  <li>description: {item.desc}</li>
                  <li>attack bonus: {item.attack_bonus}</li>
                  <li>damage bonus: {item.damage_bonus}</li>
                  <li>damage dice: {item.damage_dice}</li>
                </ul>
              ))
            : ""}
        </div>
        <div>
          special abilities:{" "}
          {this.global.monsterData.special_abilities
            ? this.global.monsterData.special_abilities.map(item => (
                <ul>
                  <li>name: {item.name}</li>
                  <li>description: {item.desc}</li>
                  <li>attack bonus: {item.attack_bonus}</li>
                </ul>
              ))
            : ""}
        </div>
        <div>
          legendary actions:{" "}
          {this.global.monsterData.legendary_actions
            ? this.global.monsterData.legendary_actions.map(item => (
                <ul>
                  <li>name: {item.name}</li>
                  <li>description: {item.desc}</li>
                  <li>attack bonus: {item.attack_bonus}</li>
                </ul>
              ))
            : ""}
        </div>
        <Button variant="contained" onClick={this.addMonster}>
          Add Monster
        </Button>
      </>
    );
  }
}
