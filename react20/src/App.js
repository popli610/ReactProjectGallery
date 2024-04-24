import "./App.css";
import Accordian from "./components/Accordian";
import HexColor from "./components/HexColor";
import Slider from "./components/Slider";
import StarRating from "./components/Star-Rating";

function App() {
  return (
    <div className="App">
      <Accordian/>
      <HexColor/>
      <StarRating/>
      <Slider/>
    </div>
  );
}

export default App;
