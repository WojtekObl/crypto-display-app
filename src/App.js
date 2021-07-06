import React, { useState } from "react";
import CurrencySelect from "./Components/CurrencySelect";
import CurrencyDisplayTable from "./Components/CurrencyDisplayTable";
import getSelectedCurrencyData from "./API/getSelectedCurrencyData";

import "./App.css";

function App() {
  const [showDisplay, setShowDisplay] = useState(false);
  const [currencyToDisplay, setCurrencyToDisplay] = useState([]);

  const handleDisplay = async (selectedCurrency) => {
    try {
      let currencyDataToDisplay = await getSelectedCurrencyData(
        selectedCurrency
      );
      if (currencyDataToDisplay) {
        setCurrencyToDisplay(currencyDataToDisplay);
        setShowDisplay(true);
      }
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <div className="app">
      <h1 className="app__header">Custom Crypto Display</h1>
      <CurrencySelect handleDisplay={(array) => handleDisplay(array)} />
      {showDisplay && (
        <CurrencyDisplayTable currencyToDisplay={currencyToDisplay} />
      )}
    </div>
  );
}

export default App;
