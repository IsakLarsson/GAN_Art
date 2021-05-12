import logo from "./logo.svg";
import "./App.css";
import * as tf from "@tensorflow/tfjs";

const axios = require("axios");

function App() {
  const getTest = () => {
    console.log("yeet");
    axios.get("http://127.0.0.1:5000/").then((response) => {
      console.log(response);
    });
  };

  const loadModel = async () => {
    console.log("loading model...");
    const model = await tf.loadLayersModel(
      "https://github.com/IsakLarsson/GeneratorJS.git/model.json"
    );
    console.log("model loaded");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onclick={loadModel} className="App-button"></button>
      </header>
    </div>
  );
}

export default App;
