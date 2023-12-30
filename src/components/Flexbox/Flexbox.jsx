import React, { useState, useRef } from "react";
import updateValue from "../../helpers";

function Flexbox() {
  // State for controlling various properties
  const [flexDisplay, setFlexDisplay] = useState("flex");
  const [flexDirection, setFlexDirection] = useState("row");
  const [flexWrap, setFlexWrap] = useState("wrap");
  const [justifyContent, setJustifyContent] = useState("start");
  const [alignItems, setAlignItems] = useState("start");
  const [alignContent, setAlignContent] = useState("start");

  // Functions to update state based on input changes
  const updateFlexDisplay = updateValue(setFlexDisplay);
  const updateFlexDirection = updateValue(setFlexDirection);
  const updateFlexWrap = updateValue(setFlexWrap);
  const updateJustifyContent = updateValue(setJustifyContent);
  const updateAlignItems = updateValue(setAlignItems);
  const updateAlignContent = updateValue(setAlignContent);

  // CSS styles for the Container of boxes
  const flexStyles = {
    display: flexDisplay,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
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

  const [boxes, setBoxes] = useState(Array.from({ length: 3 }, (_, index) => index + 1));

  // Add Box
  const addBox = () => {
    if (boxes.length < 12) {
      const newBox = boxes.length + 1;
      setBoxes([...boxes, newBox]);
    }
  };

  // Remove Box
  const removeBox = () => {
    if (boxes.length > 3) {
      const updatedBoxes = boxes.slice(0, -1);
      setBoxes(updatedBoxes);
    }
  };

  const isAddButtonDisabled = boxes.length === 12;
  const isRemoveButtonDisabled = boxes.length === 3;

  return (
    <>
      {/* Left Section: Input controls */}
      <div className="left">
        {/* Display  */}
        <div className="panel">
          <div className="heading">
            <div>Display</div>
            <div>
              <select onChange={updateFlexDisplay}>
                <option value="flex">flex</option>
                <option value="inline-flex">inline flex</option>
              </select>
            </div>
          </div>
        </div>

        {/* Flex Direction  */}
        <div className="panel">
          <div className="heading">
            <div>Flex Direction</div>
            <div>
              <select onChange={updateFlexDirection}>
                <option value="row">row</option>
                <option value="column">column</option>
                <option value="row-reverse">row reverse</option>
                <option value="column-reverse">column reverse</option>
              </select>
            </div>
          </div>
        </div>

        {/* Flex Wrap  */}
        <div className="panel">
          <div className="heading">
            <div>Flex Wrap</div>
            <div>
              <select onChange={updateFlexWrap}>
                <option value="wrap">wrap</option>
                <option value="nowrap">nowrap</option>
                <option value="wrap-reverse">wrap reverse</option>
              </select>
            </div>
          </div>
        </div>

        {/* Justify Content  */}
        <div className="panel">
          <div className="heading">
            <div>Justify Content</div>
            <div>
              <select onChange={updateJustifyContent}>
                <option value="flex-start">start</option>
                <option value="center">center</option>
                <option value="flex-end">end</option>
                <option value="space-around">space around</option>
                <option value="space-between">space between</option>
                <option value="space-evenly">space evenly</option>
              </select>
            </div>
          </div>
        </div>

        {/* Align Item  */}
        <div className="panel">
          <div className="heading">
            <div>Align Item</div>
            <div>
              <select onChange={updateAlignItems}>
                <option value="flex-start">start</option>
                <option value="center">center</option>
                <option value="flex-end">end</option>
                <option value="stretch">stretch</option>
                <option value="baseline">baseline</option>
              </select>
            </div>
          </div>
        </div>

        {/* Align Content  */}
        <div className="panel">
          <div className="heading">
            <div>Align Content</div>
            <div>
              <select onChange={updateAlignContent}>
                <option value="flex-start">start</option>
                <option value="center">center</option>
                <option value="flex-end">end</option>
                <option value="space-around">space around</option>
                <option value="space-between">space between</option>
                <option value="space-evenly">space evenly</option>
                <option value="stretch">stretch</option>
              </select>
            </div>
          </div>
        </div>

        {/* Add Box  */}
        <div className="panel">
          <div className="heading">
            <button className="add" onClick={addBox} disabled={isAddButtonDisabled}>
              Add Box
            </button>
            <button className="remove" onClick={removeBox} disabled={isRemoveButtonDisabled}>
              Remove Box
            </button>
          </div>
        </div>
      </div>

      {/* Main Section: Preview and CSS Code */}
      <div className="main">
        {/* Box Section  */}
        <div className="box-section" style={flexStyles}>
          {boxes.map((box, index) => (
            <div key={index} className="flex-box">
              {box}
            </div>
          ))}
        </div>

        {/* Css Code  */}
        <div className="answer-code">
          <h3>CSS Code</h3>

          <pre ref={preRef}>
            <span className="class-name">.box {"{"}</span>
            <br />
            <span>display:</span> {flexDisplay}; <br />
            <span>flex-direction:</span> {flexDirection}; <br />
            <span>flex-wrap:</span> {flexWrap}; <br />
            <span>justify-content:</span> {justifyContent}; <br />
            <span>align-items:</span> {alignItems}; <br />
            <span>align-content:</span> {alignContent}; <br />
            <span className="class-name">{"}"}</span>
          </pre>

          <button onClick={copyCode}>{copyBtnText}</button>
        </div>
      </div>
    </>
  );
}

export default Flexbox;
