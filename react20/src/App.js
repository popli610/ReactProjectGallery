import "./App.css";
import Accordian from "./components/Accordian";
import HexColor from "./components/HexColor";
import QrCode from "./components/QrCodeGenerator";
import Slider from "./components/Slider";
import StarRating from "./components/Star-Rating";
import TreeView from "./components/Tree-view";
import menus from "./components/Tree-view/data";
import LoadMoreData from "./components/load-more-data";


function App() {
  return (
    <div className="App">
      {/* <Accordian />
      <HexColor />
      <StarRating />
      <Slider url={"https://picsum.photos/v2/list"} /> */}
      {/* <LoadMoreData/> */}
      {/* <TreeView menus={menus}/> */}
      <QrCode/>
    </div>
  );
}

export default App;
