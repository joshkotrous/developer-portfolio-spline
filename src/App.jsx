import { useState } from "react";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import HeroBanner from "./components/HeroBanner";
import Background from "./components/Background";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Background />
      <Navigation />
      <div className="body">
        <HeroBanner />
        <Section />
        <Section />
      </div>
    </div>
  );
}

export default App;
