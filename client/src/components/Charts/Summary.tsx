import { Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";

const Summary = ({data}) => {
  
  const chartState = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: data.timestamp,
        labels: {
          show: false,
        },
      },
      yaxis: {
        min: Math.min(...data.close) - 10,
        max: Math.max(...data.close) + 10,
      },
    },
    series: [
      {
        name: "series-1",
        data: data.close,
      },
    ],
  };

  return (
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
  );
};

export default Summary;
