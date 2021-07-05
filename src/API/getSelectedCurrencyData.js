const getSelectedCurrencyData = async (idArray) => {
  let myHeaders = new Headers();
  myHeaders.append("X-CMC_PRO_API_KEY", "76988d16-a93e-4524-8662-68b7afc89853");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let idListString = idArray.toString()

  let response = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${idListString}`,
    requestOptions
  ); 
  let result = await response.json();
  if (response.ok) {
    let selectedCurrency = result.data;
    return selectedCurrency;
  } else alert(result.status.error_message)
};

export default getSelectedCurrencyData;