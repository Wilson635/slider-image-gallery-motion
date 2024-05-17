import * as React from "react";
import { render } from "react-dom";
import { Example } from "./Example";

import "./styles.css";

const App = () => (
  <div className="example-container">
    <Example />
  </div>
);

render(<App />, document.getElementById("root"));
