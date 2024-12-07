import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./Component/App/App";
import store from "./Component/redux/store";  // آدرس استور شما
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById("root")); // استفاده از createRoot

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

