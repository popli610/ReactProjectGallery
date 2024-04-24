import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState("");
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleOpen = (currentId) => {
    setSelected(selected === currentId ? null : currentId);
  };
  const handleMultipleSelection = (currentId) => {
    let cpyMultiple = [...multiple];
    const findIndOfCurrId = cpyMultiple.indexOf(currentId);
    console.log(findIndOfCurrId);
    if (findIndOfCurrId === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(findIndOfCurrId, 1);
    setMultiple(cpyMultiple);
  };
  return (
    <div className="wrapper">
      <div>
        <button
          onClick={() => {
            setEnableMultipleSelection(!enableMultipleSelection);
          }}
        >
          Enable Multiple selection
        </button>
      </div>
      <div className="accordian">
        {data && data.length > 0
          ? data.map((item) => (
              <div className="item">
                <div className="title" 
                  onClick={
                  enableMultipleSelection 
                  ?() => handleMultipleSelection(item.id)
                  :()=>handleOpen(item.id)
                }>
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {selected === item.id || multiple.indexOf
                (item.id) !== -1 ? (
                  <div className="content">{item.answer}</div>
                ):null }
              </div>
            ))
          : "Data not available!"}
      </div>
    </div>
  );
};

export default Accordian;
