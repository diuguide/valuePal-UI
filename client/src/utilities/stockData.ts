import axios from "axios";

export const yahoo = async (params: Object, endpoint: String) => {
  let options: object = {
    method: "GET",
    url: `https://apidojo-yahoo-finance-v1.p.rapidapi.com/${endpoint}`,
    params: params,
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_YAHOO_API,
      "x-rapidapi-host": process.env.REACT_APP_YAHOO_HOST,
    },
  };
  interface DB {
    close: Array<number>;
    timestamp: Array<string>;
  }

  let dataObject: DB = {
    close: [],
    timestamp: [],
  };

  await axios
    .request(options)
    .then(function (response: any) {
      console.log(
        "response: ",
        response.data.marketSummaryAndSparkResponse.result
      );
      dataObject.close =
        response.data.marketSummaryAndSparkResponse.result[8].spark.close;
      let timeData: Array<string> =
        response.data.marketSummaryAndSparkResponse.result[8].spark.timestamp;
      timeData.map((time) => dataObject.timestamp.push(timeConverter(time)));
      console.log("dataObject: ", dataObject);
    })
    .catch(function (error) {
      console.error(error);
    });
  return dataObject;
};

const timeConverter = (unix: string) => {
  let num = parseInt(unix);
  let date = new Date(num * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  return formattedTime;
};
