import axios from "axios";

export const yahoo = (params: Object, endpoint: String) => {
  let options: object = {
    method: "GET",
    url: `https://apidojo-yahoo-finance-v1.p.rapidapi.com/${endpoint}`,
    params: params,
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_YAHOO_API,
      "x-rapidapi-host": process.env.REACT_APP_YAHOO_HOST,
    },
  };

  let dataObject = {
    close: [],
    timestamp: []
  }

  axios
    .request(options)
    .then(function (response) {
      console.log("response: ", response.data.marketSummaryAndSparkResponse.result[12].spark);
      
      let timestamp =  response.data.marketSummaryAndSparkResponse.result[12].regularMarketTime.raw;

      dataObject.close = response.data.marketSummaryAndSparkResponse.result[12].spark.close;
      dataObject.timestamp = response.data.marketSummaryAndSparkResponse.result[12].spark.timestamp;

      console.log("data object: ", dataObject)

      timeConverter(timestamp);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const timeConverter = (unix: number) => {
  let date = new Date(unix * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  console.log("formatted Time: ", formattedTime);
};
