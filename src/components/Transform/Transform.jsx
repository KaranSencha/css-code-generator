import React, { useState, useRef } from "react";
import updateValue from "../../helpers";

function Transform() {
  // State for controlling various properties
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);

  // Functions to update state based on input changes
  const updateTranslateX = updateValue(setTranslateX);
  const updateTranslateY = updateValue(setTranslateY);
  const updateRotate = updateValue(setRotate);
  const updateScaleX = updateValue(setScaleX);
  const updateScaleY = updateValue(setScaleY);
  const updateSkewX = updateValue(setSkewX);
  const updateSkewY = updateValue(setSkewY);

  // CSS styles for the box
  const boxStyles = {
    transform: `translate(${translateX}%, ${translateY}%) rotate(${rotate}deg) scaleX(${scaleX}) scaleY(${scaleY}) skew(${skewX}deg, ${skewY}deg)`,
    backgroundColor: "rgb(128, 50, 218)",
  };

  // Copy to clipboard functionality
  const [copyBtnText, setCopyBtnText] = useState("Copy");
  const preRef = useRef(null);
  const copyCode = () => {
    if (preRef.current) {
      const textToCopy = preRef.current.textContent;
      navigator.clipboard.writeText(textToCopy);
      setCopyBtnText("Copied");
      setTimeout(function () {
        setCopyBtnText("Copy");
      }, 3000);
    }
  };

  return (
    <>
      {/* Left Section: Input controls */}
      <div className="left">
        {/* Translate Horizontal  */}
        <div className="panel">
          <div className="heading">
            <div>Translate Horizontal</div>
            <div>{translateX}%</div>
          </div>
          <div className="slider-container">
            <input
              type="range"
              min="-100"
              max="100"
              value={translateX}
              onChange={updateTranslateX}
            />
          </div>
        </div>

        {/* Translate Vertical   */}
        <div className="panel">
          <div className="heading">
            <div>Translate Vertical</div>
            <div>{translateY}%</div>
          </div>
          <div className="slider-container">
            <input
              type="range"
              min="-100"
              max="100"
              value={translateY}
              onChange={updateTranslateY}
            />
          </div>
        </div>

        {/* Rotate   */}
        <div className="panel">
          <div className="heading">
            <div>Rotate</div>
            <div>{rotate}&deg;</div>
          </div>
          <div className="slider-container">
            <input
              type="range"
              min="-360"
              max="360"
              step="1"
              value={rotate}
              onChange={updateRotate}
            />
          </div>
        </div>

        {/* Scale Width  */}
        <div className="panel">
          <div className="heading">
            <div>Scale Width</div>
            <div>{scaleX}</div>
          </div>
          <div className="slider-container">
            <input
              type="range"
              min="0.2"
              max="2"
              step="0.1"
              value={scaleX}
              onChange={updateScaleX}
            />
          </div>
        </div>

        {/* Scale Height  */}
        <div className="panel">
          <div className="heading">
            <div>Scale Height</div>
            <div>{scaleY}</div>
          </div>
          <div className="slider-container">
            <input
              type="range"
              min="0.2"
              max="2"
              step="0.1"
              value={scaleY}
              onChange={updateScaleY}
            />
          </div>
        </div>

        {/* Skew Horizontal   */}
        <div className="panel">
          <div className="heading">
            <div>Skew Horizontal</div>
            <div>{skewX}&deg;</div>
          </div>
          <div className="slider-container">
            <input type="range" min="-180" max="180" value={skewX} onChange={updateSkewX} />
          </div>
        </div>

        {/* Skew Vertical   */}
        <div className="panel">
          <div className="heading">
            <div>Skew Vertical</div>
            <div>{skewY}&deg;</div>
          </div>
          <div className="slider-container">
            <input type="range" min="-180" max="180" value={skewY} onChange={updateSkewY} />
          </div>
        </div>
      </div>

      {/* Main Section: Preview and CSS Code */}
      <div className="main">
        {/* Box Section  */}
        <div className="box-section">
          <div className="box" style={boxStyles}>
            Box Shadow
          </div>
        </div>

        {/* Css Code  */}
        <div className="answer-code">
          <h3>CSS Code</h3>

          <pre ref={preRef}>
            <span className="className-name">.box {"{"}</span>
            <br />
            <span>transform: </span> {boxStyles.transform}; <br />
            <span className="className-name">{"}"}</span>
          </pre>

          <button onClick={copyCode}>{copyBtnText}</button>
        </div>
      </div>
    </>
  );
}

export default Transform;
