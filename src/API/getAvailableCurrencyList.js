const getAvailableCurrencyList = async () => {
  var myHeaders = new Headers();
  myHeaders.append("X-CMC_PRO_API_KEY", "76988d16-a93e-4524-8662-68b7afc89853");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let response = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map",
    requestOptions
  );
  console.log(response);
  let result = await response.json();
  if (response.ok) {
    console.log("resutl", result);
    let currencyList = result.data;
    return currencyList;
  } else alert(result.status.error_message);
};

export default getAvailableCurrencyList;
