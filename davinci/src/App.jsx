import logo from "./logo.svg";
import "./App.css";
import * as tf from "@tensorflow/tfjs";

const axios = require("axios");
const BATCH_SIZE = 32;
const SEED_SIZE = 100;

function App() {
  const getTest = () => {
    console.log("yeet");
    axios
      .get("http://127.0.0.1:5000/api?id=4", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response);
      });
  };

  const loadModel = async () => {
    console.log("loading model...");
    const model = await tf.loadLayersModel(
      "https://raw.githubusercontent.com/IsakLarsson/GeneratorJS/main/model.json"
    );
    console.log("model loaded");
    const seed = tf.randomNormal([BATCH_SIZE, SEED_SIZE]);
    let images = model.predict(seed);
    images.print();
  };

  return (
    <div className="App">
      <button onClick={loadModel} className="App-button">
        Load model
      </button>
      <button onClick={getTest}>test api</button>
      <img id="ItemPreview" src=""></img>
    </div>
  );
}

export default App;
