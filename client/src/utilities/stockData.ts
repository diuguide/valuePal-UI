import axios from "axios";

export const yahoo = (params: Object, endpoint: String) => {
    
  let options : object = {
    method: "GET",
    url: `https://apidojo-yahoo-finance-v1.p.rapidapi.com/${endpoint}`,
    params: params,
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
