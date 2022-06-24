import React, { useContext, useState } from "react";
import { LanguageContext } from "../LanguageContext";
const MainSection = (props) => {
  const [index, setIndex] = useState(0);
  const language = useContext(LanguageContext);

  const clicky = (event) => {
    event.preventDefault();
    if (index === 0) {
      setIndex((prevIndex) => {
        return 1;
      });
    } else {
      setIndex((prevIndex) => {
        return 0;
      });
    }
  };
  return (
    <div>
      <p id="favoriteLanguage">
        Favorite programming language: {language[index]}
      </p>
      <button id="changeFavorite" onClick={clicky}>
        Toggle language
      </button>
    </div>
  );
};
export default MainSection;
