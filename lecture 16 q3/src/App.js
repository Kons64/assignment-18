import React, { useState } from "react";
import Text from "./Text";
function App() {
  const [desc, setDesc] = useState("London is the capital of England.");
  const onClickButtonLondon = () => {
    setDesc(() => {
      return "London is the capital of England.";
    });
  };
  const onClickButtonParis = () => {
    setDesc(() => {
      return "Paris is the capital of France.";
    });
  };
  const onClickButtonTokyo = () => {
    setDesc(() => {
      return "Tokyo is the capital of Japan.";
    });
  };

  return (
    <div>
      <div>
        <button onClick={onClickButtonLondon}>London</button>
        <button onClick={onClickButtonParis}>Paris</button>
        <button onClick={onClickButtonTokyo}>Tokyo</button>
      </div>
      <Text description={desc} />
    </div>
  );
}

export default App;
