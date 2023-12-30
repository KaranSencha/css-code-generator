import React, { useState, useRef } from "react";

function TextShadow() {
  const [customText, setCustomText] = useState(
    "Your can add you own text using side 'Custome Text' Box"
  );
  const [horizontal, setHorizontal] = useState(5);
  const [vertical, setVertical] = useState(3);
  const [blur, setBlur] = useState(4);
  const [textSize, setTextSize] = useState(40);
  const [textColor, setTextColor] = useState("#000000");
  const [shadowColor, setShadowColor] = useState("#FF24BA");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const updateValue = (setter) => {
    return (event) => {
      setter(event.target.value);
    };
  };

  const updateCustomText = updateValue(setCustomText);
  const updateHorizontal = updateValue(setHorizontal);
  const updateVertical = updateValue(setVertical);
  const updateBlur = updateValue(setBlur);
  const updateTextSize = updateValue(setTextSize);
  const updateTextColor = updateValue(setTextColor);
  const updateShadowColor = updateValue(setShadowColor);
  const updateBackgroundColor = updateValue(setBackgroundColor);

  const textStyles = {
    fontSize: `${textSize}px`,
    color: textColor,
    textShadow: `${horizontal}px ${vertical}px ${blur}px  ${shadowColor}`,
  };

  // copy to clipboard
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
      {/*  Left Section  */}
      <div className="left">
        {/* Custome Text Input  */}
        <div className="panel">
          <div className="heading">
            <div>Custom Text</div>
          </div>
          <input type="text" value={customText} maxLength="200" onChange={updateCustomText} />
        </div>

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

        {/* Vertical Length */}
        <div className="panel">
          <div className="heading">
            <div>Vertical</div>
            <div>{vertical}px</div>
          </div>
          <div className="slider-container">
            <input type="range" min="-50" max="50" value={vertical} onChange={updateVertical} />
          </div>
        </div>

        {/* Blur Radius */}
        <div className="panel">
          <div className="heading">
            <div>Blur</div>
            <div>{blur}px</div>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="100" value={blur} onChange={updateBlur} />
          </div>
        </div>

        {/* Text Size  */}
        <div className="panel">
          <div className="heading">
            <div>Text Size</div>
            <div>{textSize}px</div>
          </div>
          <div className="slider-container">
            <input type="range" min="16" max="80" value={textSize} onChange={updateTextSize} />
          </div>
        </div>

        {/* Text Color  */}
        <div className="panel">
          <div className="heading">
            <div>Text Color</div>
            <div>
              <input type="color" value={textColor} onChange={updateTextColor} />
            </div>
          </div>
        </div>

        {/* Shadow Color */}
        <div className="panel">
          <div className="heading">
            <div>Shadow Color</div>
            <div>
              <input type="color" value={shadowColor} onChange={updateShadowColor} />
            </div>
          </div>
        </div>

        {/* Background Color Picker  */}
        <div className="panel">
          <div className="heading">
            <div>Background Color</div>
            <div>
              <input type="color" value={backgroundColor} onChange={updateBackgroundColor} />
            </div>
          </div>
        </div>
      </div>

      {/* Main   */}
      <div className="main">
        {/* Box Section  */}
        <div className="box-section" style={{ backgroundColor }}>
          <div className="text" style={textStyles}>
            {customText}
          </div>
        </div>

        {/* Css Code  */}
        <div className="answer-code">
          <h3>CSS Code</h3>

          <pre ref={preRef}>
            <span className="class-name">.box {"{"}</span>
            <br />
            <span>text-shadow:</span> {textStyles.textShadow}; <br />
            <span>background-color:</span> {backgroundColor}; <br />
            <span>color:</span> {textColor}; <br />
            <span>font-size: </span>
            {textSize}px; <br />
            <span className="class-name">{"}"}</span>
          </pre>

          <button onClick={copyCode}>{copyBtnText}</button>
        </div>
      </div>
    </>
  );
}

export default TextShadow;
