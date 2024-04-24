import React, { useEffect, useState } from "react";
import "./styles.css";

const HexColor = () => {
  const [typeColor, setTypeColor] = useState("hex");
  const [color, setColor] = useState("");
  const all = "ABCDEFabcdef0123456789";
  const randomHexNumber = () => {
    return all.charAt(Math.floor(Math.random() * all.length));
  };
  const createRandomColor = () => {
    if (typeColor === "rgb") {
      setColor(
        `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
          Math.random() * 255
        )},${Math.floor(Math.random() * 255)})`
      );
    } else if (typeColor === "hex") {
      setColor(
        `#${randomHexNumber()}${randomHexNumber()}${randomHexNumber()}${randomHexNumber()}${randomHexNumber()}${randomHexNumber()}`
      );
    }
  };
  
  useEffect(()=>{createRandomColor()}, [typeColor]);
  const createHex = () => {
    setTypeColor("hex");
  };
  const createRgb = () => {
    setTypeColor("rgb");
  };
  return (
    <div className="container" style={{ backgroundColor: color ,height:'100vh', width:'100vw', display:"flex",flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"}}>
      <div className="buttons">
        <button className="" onClick={createHex}>
          Create HEX Color
        </button>
        <button className="" onClick={createRgb}>
          Create RGB Color
        </button>
        <button className="" onClick={createRandomColor}>
          Generate Random Color
        </button>
      </div>
      <div className="content">{color}</div>
    </div>
  );
};

export default HexColor;
