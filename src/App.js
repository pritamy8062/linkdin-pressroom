import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navbar from "./components/Navbar";
import ImageWithText from "./components/Mainscreen";
import CarouselComponent from "./components/Carousel";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Follow from "./components/Follow";
// import News from "./components/News";
import FirstDivOfNews from "./components/FirstDivOfNews";
import PaginationComponent from "./components/ThirdDivOfNews";
import ResourceBox from "./components/ResourceBox";
// import NewsPage2 from "./components/NewsPage2";
// import ExternalResources from "./components/ExternalResources";

function App() {
  return (
    <div style={{ overflowX: "hidden" }} className="App">
      <Navbar />
      <ImageWithText />
      <CarouselComponent />
      <FirstDivOfNews />
      {/* <News /> */}
      {/* <NewsPage2/> */}

      <PaginationComponent />
      <Explore />
      <div className="outsideDivOfResourceBox"><div className="exploreMoreResources">
        <ResourceBox />
      </div></div>
      {/* <ExternalResources/> */}
      <Follow />
      <Footer />
    </div>
  );
}

export default App;
