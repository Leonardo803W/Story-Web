import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Components.css";
import "./style/Global.css";

ReactDOM.createRoot(
  document.getElementById("app") as HTMLElement
).render(
  <App />
);

