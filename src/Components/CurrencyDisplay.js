import React from "react";
import "./CurrencyDisplay.css";
import CurrencyDisplayTable from './CurrencyDisplayTable'

function CurrencyDisplay({currencyToDisplay}) {
  const currencyToDisplayArray = Object.values(currencyToDisplay);

  return (
    <div className="currency-display"> 
      <CurrencyDisplayTable currencyToDisplayArray={currencyToDisplayArray}/>
    </div>
  );
}

export default CurrencyDisplay;
