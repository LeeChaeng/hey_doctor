import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

import axios from "axios";

class Rchart extends Component {
  state = {
    series: [],
    series2: [],
    options: {
      chart: {
        height: 200,
        type: "scatter",
        zoom: {
          enabled: true,
          type: "xy",
        },
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function (val) {
            return parseFloat(val).toFixed(1);
          },
        },
      },
      yaxis: {
        tickAmount: 10,
      },
    },
  };

  getData = async () => {
    const res = await axios.get("http://localhost:4000/getDBDT");
    console.log(res.data);

    this.setState({
      series: [
        {
          name: "Group A",
          data: res.data[0][0],
        },
        {
          name: "Group B",
          data: res.data[0][1],
        },
        {
          name: "Group C",
          data: res.data[0][2],
        },
      ],
      series2: [
        {
          name: "Group A",
          data: res.data[1][0],
        },
        {
          name: "Group B",
          data: res.data[1][1],
        },
        {
          name: "Group C",
          data: res.data[1][2],
        },
      ],
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { series, options, series2 } = this.state;
    return (
      <div className="chart">
        <div className="row">
          <div className="mixed-chart">
            <div className="title">수축기혈압 vs 이완기혈압</div>
            <ReactApexChart
              options={options}
              series={series}
              type="scatter"
              height={350}
            />
            <div className="title">몸무게 + 연령(혈압 group)</div>
            <ReactApexChart
              options={options}
              series={series2}
              type="scatter"
              height={350}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Rchart;
