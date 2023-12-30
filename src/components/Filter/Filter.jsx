import React, { useState, useRef } from "react";
import updateValue from "../../helpers";

function Filter() {
  // State for controlling various properties
  const [grayscale, setGrayscale] = useState(0);
  const [blur, setBlur] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturate, setSaturate] = useState(100);
  const [hueRotate, setHueRotate] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const [invert, setInvert] = useState(0);
  const [sepia, setSepia] = useState(0);

  // Functions to update state based on input changes
  const updateGrayscale = updateValue(setGrayscale);
  const updateBlur = updateValue(setBlur);
  const updateBrightness = updateValue(setBrightness);
  const updateContrast = updateValue(setContrast);
  const updateSaturate = updateValue(setSaturate);
  const updateHueRotate = updateValue(setHueRotate);
  const updateOpacity = updateValue(setOpacity);
  const updateInvert = updateValue(setInvert);
  const updateSepia = updateValue(setSepia);

  // CSS styles for the Image
  const imageStyles = {
    filter: `grayscale(${grayscale}%) blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) hue-rotate(${hueRotate}deg) opacity(${opacity}%) invert(${invert}%) sepia(${sepia}%)`,
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
        {/* Grayscale   */}
        <div className="panel">
          <div className="heading">
            <div>Grayscale</div>
            <div>{grayscale}%</div>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="100" value={grayscale} onChange={updateGrayscale} />
          </div>
        </div>

        {/* Blur  */}
        <div className="panel">
          <div className="heading">
            <div>Blur</div>
            <div>{blur}px</div>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="50" value={blur} onChange={updateBlur} />
          </div>
        </div>

        {/* Brightness   */}
        <div className="panel">
          <div className="heading">
            <div>Brightness</div>
            <div>{brightness}%</div>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="200" value={brightness} onChange={updateBrightness} />
          </div>
        </div>

        {/* Contrast  */}
        <div className="panel">
          <div className="heading">
            <div>Contrast</div>
            <div>{contrast}%</div>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="200" value={contrast} onChange={updateContrast} />
          </div>
        </div>

        {/* Saturate  */}
        <div className="panel">
          <div className="heading">
            <div>Saturate</div>
            <div>{saturate}%</div>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="200" value={saturate} onChange={updateSaturate} />
          </div>
        </div>

        {/* Hue Rotate  */}
        <div className="panel">
          <div className="heading">
            <div>Hue Rotate</div>
            <div>{hueRotate}&deg;</div>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="360" value={hueRotate} onChange={updateHueRotate} />
          </div>
        </div>

        {/* Opacity  */}
        <div className="panel">
          <div className="heading">
            <div>Opacity</div>
            <div>{opacity}%</div>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="100" value={opacity} onChange={updateOpacity} />
          </div>
        </div>

        {/* Invert  */}
        <div className="panel">
          <div className="heading">
            <div>Invert</div>
            <div>{invert}%</div>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="100" value={invert} onChange={updateInvert} />
          </div>
        </div>

        {/* Sepia  */}
        <div className="panel">
          <div className="heading">
            <div>Sepia</div>
            <div>{sepia}%</div>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="100" value={sepia} onChange={updateSepia} />
          </div>
        </div>
      </div>

      {/* Main Section: Preview and CSS Code */}
      <div className="main">
        {/* Box Section  */}
        <div className="box-section">
          <img
            style={imageStyles}
            src="https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>

        {/* Css Code  */}
        <div className="answer-code">
          <h3>CSS Code</h3>

          <pre ref={preRef}>
            <span className="class-name">.box {"{"}</span>
            <br />
            <span>filter: </span>
            {imageStyles.filter}; <br />
            <span className="class-name">{"}"}</span>
          </pre>

          <button onClick={copyCode}>{copyBtnText}</button>
        </div>
      </div>
    </>
  );
}

export default Filter;
