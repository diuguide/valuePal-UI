import axios from "axios";

export const yahoo = (ticker: String) => {
    
  let options : object = {
    method: "GET",
    url: process.env.REACT_APP_YAHOO_URL,
    params: {region: 'US', symbols: 'AMD,IBM,AAPL'},
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_YAHOO_API,
      "x-rapidapi-host": process.env.REACT_APP_YAHOO_HOST,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log("yahoo response: ", response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
