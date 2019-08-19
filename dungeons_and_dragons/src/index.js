import React, { setGlobal } from "reactn";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import addReactNDevTools from "reactn-devtools";

addReactNDevTools();

setGlobal({
  monsterData: {}
});

ReactDOM.render(<App />, document.getElementById("root"));
