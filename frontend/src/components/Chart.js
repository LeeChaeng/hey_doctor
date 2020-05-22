import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { getHello } from "../api/hello";

class Rchart extends Component {
  constructor(props) {
    super(props);

    // getHello().then((res) => {
    //   console.log("hello임 ");
    //   console.log(res.data.Hello);
    // });

    this.state = {
      series: [
        {
          name: "Group A",
          data: [
            [89, 151],
            [89, 151],
          ],
        },
        {
          name: "Group B",
          data: [
            [83, 136],
            [91, 141],
            [87, 142],
            [88, 144],
            [83, 136],
            [91, 141],
            [87, 142],
            [88, 144],
          ],
        },
        {
          name: "Group C",
          data: [
            [60, 110],
            [78, 128],
            [65, 128],
            [62, 114],
            [93, 119],
            [71, 137],
            [70, 110],
            [60, 110],
            [78, 128],
            [65, 128],
            [62, 114],
            [93, 119],
            [71, 137],
            [70, 110],
          ],
        },
      ],
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
  }

  render() {
    return (
      <div className="chart">
        <div className="row">
          <div className="mixed-chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
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
