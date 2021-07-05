import React, { useState } from "react";
import CurrencySelect from "./Components/CurrencySelect";
import CurrencyDisplay from "./Components/CurrencyDisplay";
import getSelectedCurrencyData from "./API/getSelectedCurrencyData";

import "./App.css";

function App() {
  const [showDisplay, setShowDisplay] = useState(false);
  const [currencyToDisplay, setCurrencyToDisplay] = useState([]);

  const handleDisplay = async (selectedCurrency) => {
    let idArray = selectedCurrency.map((currency) => {
      return currency.id;
    });
    let currencyToDisplay = await getSelectedCurrencyData(idArray);
    setCurrencyToDisplay(currencyToDisplay);
    setShowDisplay(true);
  };

  return (
    <div className="app">
      <h1 className="app__header">Custom Crypto Display</h1>
      <CurrencySelect handleDisplay={(array) => handleDisplay(array)} />
      {showDisplay && (
        <CurrencyDisplay currencyToDisplay={currencyToDisplay} />
      )}
    </div>
  );
}

export default App;
