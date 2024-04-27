import "./App.css";
import Accordian from "./components/Accordian";
import HexColor from "./components/HexColor";
import QrCode from "./components/QrCodeGenerator";
import Slider from "./components/Slider";
import StarRating from "./components/Star-Rating";
import TreeView from "./components/Tree-view";
import menus from "./components/Tree-view/data";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import ScrollIndicator from "./components/scroll-indicator";


function App() {
  return (
    <div className="App">
      {/* <Accordian />
      <HexColor />
      <StarRating />
      <Slider url={"https://picsum.photos/v2/list"} /> */}
      {/* <LoadMoreData/> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QrCode/> */}
      {/* <LightDarkMode /> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
