const getAvailableCurrencyList = async () => {
  const myHeaders = new Headers();
  myHeaders.append("X-CMC_PRO_API_KEY", "76988d16-a93e-4524-8662-68b7afc89853");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map",
    requestOptions
  );

  const result = await response.json();

  if (response.ok) {
    let currencyList = result.data;
    return currencyList;
  } else
    alert(`Cannot get availble currency list. ${result.status.error_message}`);
};

export default getAvailableCurrencyList;
