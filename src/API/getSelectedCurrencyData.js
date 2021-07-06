const getSelectedCurrencyData = async (selectedCurrency) => {
  const myHeaders = new Headers();
  myHeaders.append("X-CMC_PRO_API_KEY", "76988d16-a93e-4524-8662-68b7afc89853");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const idListString = selectedCurrency
    .map((currency) => {
      return currency.id;
    })
    .toString();

  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${idListString}`,
    requestOptions
  );
  const result = await response.json();
  if (response.ok) {
    console.log(response);
    let selectedCurrency = result.data;
    return selectedCurrency;
  } else alert(`Cannot download currency data. ${result.status.error_message}`);
};

export default getSelectedCurrencyData;
