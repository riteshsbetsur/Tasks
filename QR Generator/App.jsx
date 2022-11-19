import React, { useState } from "react";
import QRCode from "react-qr-code";

const App = () => {
  let [state, setState] = useState("");
  let handleChange = e => {
    setState(e.target.value);
  };
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <QRCode value={state} />
      <div className="input-here">
        <p>Enter your text here</p>
        <input
          type="text"
          value={state}
          onChange={e => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
};

export default App;
