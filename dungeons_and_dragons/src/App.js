import React from "reactn";
import SearchContainer from "./components/DM/SearchTools/SearchContainer/SearchContainer";
import "./App.css";
import CurrentEnemies from "./components/DM/BattleTools/CurrentEnemies";

function App() {
  return (
    <div className="App">
      <SearchContainer />
      <CurrentEnemies />
    </div>
  );
}

export default App;
