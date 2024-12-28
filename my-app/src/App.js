import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsGallery from "./components/GoodsGallery";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <GoodsGallery />
      <Image />
    </div>
  );
}

export default App;
