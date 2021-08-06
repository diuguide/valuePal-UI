import { Row, Col, Button } from "react-bootstrap";
import { yahoo } from "../../utilities/stockData";
import Chart from "react-apexcharts";
import { useState, useRef } from "react";

const Summary = () => {
 
  const [showChart, setShowChart] = useState(false);
  const [dataResponse, setDataResponse] = useState({});
  const response = useRef({
    close: [],
    timestamp: [],
  });

  const chartState = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: response.current.timestamp,
        labels: {
          show: false
        }
      },
      yaxis: {
        min: Math.min(...response.current.close) - 10,
        max: Math.max(...response.current.close) + 10,
      },
    },
    series: [
      {
        name: "series-1",
        data: response.current.close,
      },
    ],
  };

  const showData = () => {
    setShowChart(true);
  };

  const handleClick = () => {
    const endpoint = "market/v2/get-summary";
    const params = {
      region: "BR",
    };

    yahoo(params, endpoint)
      .then((res: any) => response.current = res)
      .catch((err) => console.error(err));
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Button onClick={handleClick}>Click</Button>
            <Button onClick={showData}>Show Data</Button>
          </Col>
        </Row>
        {showChart && (
          <Row>
            <Col>
              <Chart
                options={chartState.options}
                series={chartState.series}
                type="bar"
                width="500"
              />
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default Summary;
