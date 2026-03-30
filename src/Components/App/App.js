import "./App.css";
import { useState } from "react";
import BackgroundVideo from "../BackgroundVideo";
import NASALogo from "../NASALogo";
import Title from "../Title";
import DateSelector from "../DateSelector";
import DisplayImage from "../ImageDisplay";
import CoOrdinates from "../CoOrdinates";
import Checkboxes from "../Checkboxes";
import getAPIByDate from "../../API/API";

function App() {
  const [date, setDate] = useState("");

  function handleChange(e) {
    const newDate = e.currentTarget.value;
    console.log(newDate);
    setDate(newDate);
    const year = newDate.slice(0, 4);
    const month = newDate.slice(5, 7);
    const day = newDate.slice(8);
    getAPIByDate(year, month, day);
  }

  function onCheck(e) {
    const targetId = e.target.id;
    console.log(targetId);
    const target = document.getElementsByClassName(`${targetId}-check`);
    const targetUpdate = target[0];
    console.log(target);
    console.log(targetUpdate);
    targetUpdate.classList.toggle("hidden");
  }

  return (
    <div>
      <BackgroundVideo />
      <div id="content-container">
        <div id="content-left">
          <DisplayImage />
          <CoOrdinates />
        </div>
        <div id="content-right">
          <NASALogo />
          <Title />
          <DateSelector handleChange={handleChange} />
          <Checkboxes onCheck={onCheck} />
        </div>
      </div>
    </div>
  );
}

export default App;
