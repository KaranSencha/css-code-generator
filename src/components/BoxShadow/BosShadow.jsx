import React, { useState, useRef } from "react";
import updateValue from "../../helpers";
function BosShadow() {
  // State for controlling various properties
  const [horizontal, setHorizontal] = useState(5);
  const [vertical, setVertical] = useState(5);
  const [blur, setBlur] = useState(5);
  const [spread, setSpread] = useState(5);
  const [boxColor, setBoxColor] = useState("#cccccc");
  const [shadowColor, setShadowColor] = useState("#444444");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [boxWidth, setBoxWidth] = useState(300);
  const [boxHeight, setBoxHeight] = useState(250);
  const [boxRadius, setBoxRadius] = useState(8);

  // Functions to update state based on input changes
  const updateHorizontal = updateValue(setHorizontal);
  const updateVertical = updateValue(setVertical);
  const updateBlur = updateValue(setBlur);
  const updateSpread = updateValue(setSpread);
  const updateBoxColor = updateValue(setBoxColor);
  const updateShadowColor = updateValue(setShadowColor);
  const updateBackgroundColor = updateValue(setBackgroundColor);
  const updateBoxWidth = updateValue(setBoxWidth);
  const updateBoxHeight = updateValue(setBoxHeight);
  const updateBoxRadius = updateValue(setBoxRadius);

  // CSS styles for the box
  const boxStyles = {
    width: `${boxWidth}px`,
    height: `${boxHeight}px`,
    borderRadius: `${boxRadius}px`,
    boxShadow: `${horizontal}px ${vertical}px ${blur}px ${spread}px ${shadowColor}`,
    backgroundColor: boxColor,
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
        {/* Horizontal Length  */}
        <div className="panel">
          <div className="heading">
            <div>Horizontal</div>
            <div>{horizontal}px</div>
          </div>
          <div className="slider-container">
            <input type="range" min="-50" max="50" value={horizontal} onChange={updateHorizontal} />
          </div>
        </div>

        {/* Vertical Length  */}
        <div className="panel">
          <div className="heading">
            <div>Vertical</div>
            <div>{vertical}px</div>
          </div>
          <div className="slider-container">
            <input type="range" min="-50" max="50" value={vertical} onChange={updateVertical} />
          </div>
        </div>

        {/* Blur Radius   */}
        <div className="panel">
          <div className="heading">
            <div>Blur</div>
            <div>{blur}px</div>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="100" value={blur} onChange={updateBlur} />
          </div>
        </div>

        {/* Spread Radius  */}
        <div className="panel">
          <div className="heading">
            <div>Spread</div>
            <div>{spread}px</div>
          </div>
          <div className="slider-container">
            <input type="range" min="-50" max="50" value={spread} onChange={updateSpread} />
          </div>
        </div>

        {/* Box Color  */}
        <div className="panel">
          <div className="heading">
            <div>Box Color</div>
            <div>
              <input type="color" value={boxColor} onChange={updateBoxColor} />
            </div>
          </div>
        </div>

        {/* Shadow Color  */}
        <div className="panel">
          <div className="heading">
            <div>Shadow Color</div>
            <div>
              <input type="color" value={shadowColor} onChange={updateShadowColor} />
            </div>
          </div>
        </div>

        {/* Background Color  */}
        <div className="panel">
          <div className="heading">
            <div>Background Color</div>
            <div>
              <input type="color" value={backgroundColor} onChange={updateBackgroundColor} />
            </div>
          </div>
        </div>

        {/* Box Width  */}
        <div className="panel">
          <div className="heading">
            <div>Box Width</div>
            <div>{boxWidth}px</div>
          </div>
          <div className="slider-container">
            <input type="range" min="200" max="400" value={boxWidth} onChange={updateBoxWidth} />
          </div>
        </div>

        {/* Box Height  */}
        <div className="panel">
          <div className="heading">
            <div>Box Height</div>
            <div>{boxHeight}px</div>
          </div>
          <div className="slider-container">
            <input type="range" min="200" max="400" value={boxHeight} onChange={updateBoxHeight} />
          </div>
        </div>

        {/* Border Radius  */}
        <div className="panel">
          <div className="heading">
            <div>Border Radius</div>
            <div>{boxRadius}px</div>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="50" value={boxRadius} onChange={updateBoxRadius} />
          </div>
        </div>
      </div>

      {/* Main Section: Preview and CSS Code */}
      <div className="main">
        {/* Box Section  */}
        <div className="box-section" style={{ backgroundColor }}>
          <div className="box" style={boxStyles}>
            Box Shadow
          </div>
        </div>

        {/* Css Code  */}
        <div className="answer-code">
          <h3>CSS Code</h3>

          <pre ref={preRef}>
            <span className="class-name">.box {"{"}</span>
            <br />
            <span>box-shadow:</span> {boxStyles.boxShadow}; <br />
            <span>background-color:</span> {backgroundColor}; <br />
            <span>width: </span>
            {boxWidth}px;
            <br />
            <span>height: </span>
            {boxHeight}px;
            <br />
            <span>border-radius: </span>
            {boxRadius}px; <br />
            <span className="class-name">{"}"}</span>
          </pre>

          <button onClick={copyCode}>{copyBtnText}</button>
        </div>
      </div>
    </>
  );
}

export default BosShadow;
