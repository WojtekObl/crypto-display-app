import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import getAvailableCurrencyList from "../API/getAvailableCurrencyList";
import "./CurrencySelect.css";

function CurrencySelect({ handleDisplay }) {
  const [currencyList, setCurrencyList] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState([]);

  useEffect(() => {
    async function getCurrencyListForSelectInput() {
      try {
        let fetchedCurrencyList = await getAvailableCurrencyList();
        setCurrencyList([...fetchedCurrencyList]);
      } catch (error) {
        console.log(error.code)
      }
    }
    getCurrencyListForSelectInput();
  }, []);

  return (
    <div className="currency-select">
      <Autocomplete
        className="currency-select__input"
        value={selectedCurrency}
        onChange={(event, newValue) => {
          setSelectedCurrency(newValue);
        }}
        multiple
        id="tags-outlined"
        options={currencyList}
        getOptionLabel={(option) => `${option.name}, ${option.symbol}`}
        defaultValue={[]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="select currency to display"
            placeholder="e.g Bitcoin"
          />
        )}
      />
      <Button
        disabled={!selectedCurrency.length > 0}
        onClick={() => handleDisplay(selectedCurrency)}
        variant="contained"
        color="primary"
        size="large"
      >
        Display Data
      </Button>
    </div>
  );
}

export default CurrencySelect;
