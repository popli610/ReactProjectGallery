import "./App.css";
import Accordian from "./components/Accordian";
import HexColor from "./components/HexColor";
import Slider from "./components/Slider";
import StarRating from "./components/Star-Rating";
import LoadMoreData from "./components/load-more-data";

function App() {
  return (
    <div className="App">
      {/* <Accordian />
      <HexColor />
      <StarRating />
      <Slider url={"https://picsum.photos/v2/list"} /> */}
      <LoadMoreData/>

    </div>
  );
}

export default App;
