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

  axios
    .request(options)
    .then(function (response) {
      console.log("response: ", response.data);
      // console.log(
      //   "yahoo response: ",
      //   response.data.marketSummaryAndSparkResponse.result[12].spark
      //     .timestamp[0]
      // );
      let timestamp =  response.data.marketSummaryAndSparkResponse.result[12].regularMarketTime.raw;
      
      timeConverter(timestamp);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const timeConverter = (unix: number) => {
  let date = new Date(unix * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  console.log("formatted Time: ", formattedTime);
};
