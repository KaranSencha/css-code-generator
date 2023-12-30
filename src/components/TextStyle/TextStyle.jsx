import React, { useState, useRef } from "react";

function TextStyle() {
  const [customText, setCustomText] = useState(
    "Your can add you own text using side 'Custome Text' Box"
  );
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState(30);
  const [fontColor, setFontColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textAlign, setTextAlign] = useState("left");
  const [fontWeight, setFontWeight] = useState(400);
  const [textTransform, setTextTransform] = useState("none");
  const [textDecoration, setTextDecoration] = useState("none");
  const [fontVariant, setFontVariant] = useState("normal");
  const [lineHeight, setLineHeight] = useState(1.5);
  const [wordSpacing, setWordSpacing] = useState(4);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [textIndent, setTextIndent] = useState(0);

  const updateValue = (setter) => {
    return (event) => {
      setter(event.target.value);
    };
  };

  const updateCustomText = updateValue(setCustomText);
  const updateFontFamily = updateValue(setFontFamily);
  const updateFontSize = updateValue(setFontSize);
  const updateFontColor = updateValue(setFontColor);
  const updateBackgroundColor = updateValue(setBackgroundColor);
  const updateTextAlign = updateValue(setTextAlign);
  const updateFontWeight = updateValue(setFontWeight);
  const updateTextTransform = updateValue(setTextTransform);
  const updateTextDecoration = updateValue(setTextDecoration);
  const updateFontVariant = updateValue(setFontVariant);
  const updateLineHeight = updateValue(setLineHeight);
  const updateWordSpacing = updateValue(setWordSpacing);
  const updateLetterSpacing = updateValue(setLetterSpacing);
  const updateTextIndent = updateValue(setTextIndent);

  const textStyles = {
    fontFamily: fontFamily,
    fontSize: fontSize + "px",
    color: fontColor,
    backgroundColor: backgroundColor,
    textAlign: textAlign,
    fontWeight: fontWeight,
    textTransform: textTransform,
    textDecoration: textDecoration,
    fontVariant: fontVariant,
    lineHeight: lineHeight,
    wordSpacing: wordSpacing + "px",
    letterSpacing: letterSpacing + "px",
    textIndent: textIndent + "px",
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
      {/* Left Section   */}
      <div className="left">
        {/* Custome Text  */}
        <div className="panel">
          <div className="heading">
            <div>Custom Text</div>
          </div>
          <input type="text" value={customText} maxLength="200" onChange={updateCustomText}/>
        </div>

        {/* Font Family  */}
        <div className="panel">
          <div className="heading">
            <div>Font Family</div>
            <div>
              <select onChange={updateFontFamily}>
                <option value="Arial">Arial</option>
                <option value="sans">sans</option>
                <option value="Verdana">Verdana</option>
                <option value="Tahoma">Tahoma</option>
                <option value="Georgia">Georgia</option>
                <option value="Garamond">Garamond</option>
                <option value="Courier New">Courier New</option>
                <option value="Candara">Candara</option>
                <option value="Geneva">Geneva</option>
                <option value="Calibri">Calibri</option>
                <option value="Perpetua">Perpetua</option>
                <option value="Brush Script">Brush Script</option>
                <option value="Copperplate">Copperplate</option>
                <option value="Cursive">Cursive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Font Size  */}
        <div className="panel">
          <div className="heading">
            <div>Font Size</div>
            <div>{fontSize}px</div>
          </div>
          <div className="slider-container">
            <input type="range" min="16" max="80" value={fontSize}   onChange={updateFontSize} />
          </div>
        </div>

        {/* Font Color  */}
        <div className="panel">
          <div className="heading">
            <div>Font Color</div>
            <div>
              <input type="color" value={fontColor} onChange={updateFontColor} />
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

        {/* Text Align  */}
        <div className="panel">
          <div className="heading">
            <div>Text Align</div>
            <div>
              <select onChange={updateTextAlign}>
                <option value="left">Left</option>
                <option value="Right">Right</option>
                <option value="Center">Center</option>
                <option value="Justify">Justify</option>
              </select>
            </div>
          </div>
        </div>

        {/* Font Weight  */}
        <div className="panel">
          <div className="heading">
            <div>Font Weight</div>
            <div>
              <select onChange={updateFontWeight}>
                <option value="200">200</option>
                <option value="400">400</option>
                <option value="600">600</option>
                <option value="700">700</option>
                <option value="800">800</option>
              </select>
            </div>
          </div>
        </div>

        {/* Text Transform  */}
        <div className="panel">
          <div className="heading">
            <div>Text Transform</div>
            <div>
              <select onChange={updateTextTransform}>
                <option value="none">none</option>
                <option value="uppercase">UPPERCASE</option>
                <option value="lowercase">lowercase</option>
                <option value="capitalize">Capitalize</option>
              </select>
            </div>
          </div>
        </div>

        {/* Text Decoration  */}
        <div className="panel">
          <div className="heading">
            <div>Text Decoration</div>
            <div>
              <select onChange={updateTextDecoration}>
                <option value="none">none</option>
                <option value="underline">underline</option>
                <option value="overline">overline</option>
                <option value="line-through">line-through</option>
              </select>
            </div>
          </div>
        </div>

        {/* Font Variant  */}
        <div className="panel">
          <div className="heading">
            <div>Font Variant</div>
            <div>
              <select onChange={updateFontVariant}>
                <option value="normal">normal</option>
                <option value="small-caps">small-caps</option>
              </select>
            </div>
          </div>
        </div>

        {/* Line Height   */}
        <div className="panel">
          <div className="heading">
            <div>Line Height</div>
            <div>{lineHeight}</div>
          </div>
          <div className="slider-container">
            <input
              type="range"
              min="1"
              max="4"
              step="0.1"
              value={lineHeight}
              onChange={updateLineHeight}
            />
          </div>
        </div>

        {/* Word Spacing   */}
        <div className="panel">
          <div className="heading">
            <div>Word Spacing</div>
            <div>{wordSpacing}px</div>
          </div>
          <div className="slider-container">
            <input
              type="range"
              min="-20"
              max="50"
              value={wordSpacing}
              onChange={updateWordSpacing}
            />
          </div>
        </div>

        {/* Letter Spacing  */}
        <div className="panel">
          <div className="heading">
            <div>Letter Spacing</div>
            <div>{letterSpacing}px</div>
          </div>
          <div className="slider-container">
            <input
              type="range"
              min="-20"
              max="50"
              value={letterSpacing}
              onChange={updateLetterSpacing}
            />
          </div>
        </div>

        {/* Text Indent  */}
        <div className="panel">
          <div className="heading">
            <div>Text Indent</div>
            <div>{textIndent}px</div>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="100" value={textIndent} onChange={updateTextIndent} />
          </div>
        </div>
      </div>

      {/* Main   */}
      <div className="main">
        {/* Box Section  */}
        <div className="box-section" style={{ backgroundColor}}>
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
            <span>font-family:</span> {fontFamily}; <br />
            <span>font-size:</span> {fontSize}px; <br />
            <span>color:</span> {fontColor}; <br />
            <span>background-color:</span> {backgroundColor}; <br />
            <span>text-align:</span> {textAlign}; <br />
            <span>font-weight:</span> {fontWeight}; <br />
            <span>text-transform:</span> {textTransform}; <br />
            <span>text-decoration:</span> {textDecoration}; <br />
            <span>font-variant:</span> {fontVariant}; <br />
            <span>line-height:</span> {lineHeight}; <br />
            <span>word-spacing:</span> {wordSpacing}px; <br />
            <span>letter-spacing:</span> {letterSpacing}px; <br />
            <span>text-indent:</span> {textIndent}px; <br />
           
            <span className="class-name">{"}"}</span>
          </pre>

          <button onClick={copyCode}>{copyBtnText}</button>
        </div>
      </div>
    </>
  );
}

export default TextStyle;
