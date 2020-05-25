import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { getHello } from "../api/hello";

import axios from "axios";

class Rchart extends Component {
  state = {
    series: [],
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
    const res = await axios.get("http://localhost:4000/getDT");
    console.log(res.data);

    this.setState({
      series: [
        {
          name: "Group A",
          data: res.data[0],
        },
        {
          name: "Group B",
          data: res.data[1],
        },
        {
          name: "Group C",
          data: res.data[2],
        },
      ],
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { series, options } = this.state;
    return (
      <div className="chart">
        <div className="row">
          <div className="mixed-chart">
            <ReactApexChart
              options={options}
              series={series}
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
