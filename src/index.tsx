import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

// import App from "./App";

function App(props) {
  console.log(props);
  return <div>{props.name}</div>
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App name={'1'} age={2} />
  </StrictMode>
);
