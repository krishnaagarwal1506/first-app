//import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Heading from "./Heading";
import Nav from "./component/Nav";
import ReactPlayer from "react-player/youtube";
import InputHooks from "./component/InputHooks";
import { useState, useRef } from "react";
const bool = false;
const str1 = "just";
const bird1 = new Audio(
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
);

const bird2 = new Audio(
  "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
);
function Example(props) {
  return (
    <div>
      <h2>
        The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
      </h2>
      <p>
        The value of the math prop is: <em>{props.math}</em>
      </p>
      <p>
        The value of the str prop is: <em>{props.str}</em>
      </p>
    </div>
  );
}

const Image = () => {
  const url =
    "https://www.animesenpai.net/wp-content/uploads/2021/10/images_857.jpg";
  return <img src={url} alt="Solo Leveling" />;
};

const Button = () => {
  const [clicked, setClicked] = useState(0);
  const refClicked = useRef(0);
  const click = () => console.log("Clicked");
  function countClick() {
    setClicked(clicked + 1);
  }
  function countRefClicked() {
    refClicked.current++;
    console.log(refClicked.current);
  }
  return (
    <div>
      <button onClick={click}>Click Me(simple Butten)</button>
      <button onClick={countClick}>Click Me(using useState)</button>
      <h1>Number of times butten clicked: {clicked}</h1>
      <button onClick={countRefClicked}>Click Me(using useRef)</button>
      <h1>Number of times butten clicked: {refClicked.current}</h1>
    </div>
  );
};
function App() {
  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  }
  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  }
  return (
    <div className="App">
      <Example
        toggleBoolean={!bool}
        math={(10 + 20) / 3}
        str={str1 + " another string"}
      />
      <Heading firstName="React" />
      <Image />
      <Button />
      <Nav />
      <Routes>
        <Route
          path="/krishna"
          element={<Heading firstName="Krishna" />}
        ></Route>
        <Route path="/sunil" element={<Heading firstName="Sunil" />}></Route>
        <Route
          path="/surajmal"
          element={<Heading firstName="Surajmal" />}
        ></Route>
        <Route
          path="/dharmik"
          element={<Heading firstName="Dharmik" />}
        ></Route>
      </Routes>
      <img width="800px" src={require("./assets/1054068.png")} alt="igris" />
      <ReactPlayer url="https://www.youtube.com/watch?v=atWdrCO_N-o" />
      <button onClick={toggle1}>bird1</button>
      <button onClick={toggle2}>bird2</button>
      <InputHooks />
    </div>
  );
}
export default App;
