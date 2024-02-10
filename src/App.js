import React, { useState } from "react";
import "./app.css";
import music from "./music/bg.mp3";
import { answers } from "./answers/answers";

function App() {
  const [ans, setAns] = useState(false);
  const [isNoClicked, setIsNoClicked] = useState(false);
  const [count, setCount] = useState(1);
  const [audio] = useState(new Audio(music));
  const setYes = () => {
    setAns(true);
    setCount(1);
    const elm = document.getElementsByClassName("yesBtn")[0];
    elm.style.heigth = "60px";
    elm.style.width = "100px";
    setIsNoClicked(false);
    playAudio();
  };

  const setNo = () => {
    setAns(false);
    setIsNoClicked(true);
    setCount((prev) => {
      if (prev <= 14) {
        return prev + 1;
      } else {
        return 1;
      }
    });

    playAudio();
  };
  const playAudio = () => {
    audio.play().catch((error) => {
      console.error("Failed to play audio:", error);
    });
  };
  document.addEventListener("click", playAudio);

  return (
    <>
      <div className="main">
        <div className="myQN">
          <img
            src={
              ans
                ? require("./images/yes.gif")
                : require("./images/willyoubemyvalentine.gif")
            }
            alt=""
          />
        </div>

        {ans ? (
          <p className="myquestion" style={{ fontSize: "40px", textAlign: 'center' }}>
            Yepppie, see you sooonnn 😘{" "}
          </p>
        ) : (
          <p className="myquestion">{answers[count - 1]}</p>
        )}
        <div className="buttons">
          <button
            className="yesBtn"
            onClick={setYes}
            style={{
              height: isNoClicked ? ` ${60 * count}px` : "60px",
              width: isNoClicked ? ` ${100 * count}px` : "100px",
            }}
          >
            Yes
          </button>
          <button className="noBtn" onClick={setNo} >
            No
          </button>
        </div>

        <p className="footer">Develop by Manish with ❤️</p>
      </div>
    </>
  );
}

export default App;
