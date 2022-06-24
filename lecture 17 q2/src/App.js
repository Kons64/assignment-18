import "./App.css";
import React from "react";
import MainSection from "./components/MainSection";
import { LanguageContext } from "./LanguageContext";

function App() {
  return (
    <LanguageContext.Provider value={["JavaScript", "Python"]}>
      <MainSection />
    </LanguageContext.Provider>
  );
}

export default App;
