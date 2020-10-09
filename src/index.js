import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import SampleHabit from "./components/simpleHabit";

// ! <React.StrictMode>
// ! StrictMode 사용시 console 2번씩 로그가 출력되는데 오류체크를 위해 자제적으로 수행된다고 함
// ! StrictMode 를 사용하더라도 배포시에는 정상적으로 1회 수행되며 , 개발시에만 적용된다고 함
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// ReactDOM.render(<App />, document.getElementById("root"));

// import "./app.css";
// ReactDOM.render(
//   <React.StrictMode>
//     <SampleHabit />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
