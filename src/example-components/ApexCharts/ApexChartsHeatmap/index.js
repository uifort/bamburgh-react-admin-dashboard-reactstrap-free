import React, { Fragment, Component } from 'react';

import Chart from 'react-apexcharts';

export default class LivePreviewExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Net Profit',
          data: [
            { x: '1', y: 30 },
            { x: '2', y: 40 },
            { x: '3', y: 22 },
            { x: '4', y: 82 },
            { x: '5', y: 44 },
            { x: '6', y: 87 },
            { x: '7', y: 69 },
            { x: '8', y: 53 },
            { x: '9', y: 64 },
            { x: '10', y: 5 },
            { x: '11', y: 72 },
            { x: '12', y: 88 },
            { x: '13', y: 15 },
            { x: '14', y: 67 },
            { x: '15', y: 55 },
            { x: '16', y: 22 },
            { x: '17', y: 43 },
            { x: '18', y: 41 }
          ]
        },
        {
          name: 'Revenue',
          data: [
            { x: '7', y: 69 },
            { x: '8', y: 53 },
            { x: '9', y: 64 },
            { x: '10', y: 5 },
            { x: '11', y: 72 },
            { x: '1', y: 30 },
            { x: '2', y: 40 },
            { x: '3', y: 22 },
            { x: '16', y: 22 },
            { x: '4', y: 82 },
            { x: '5', y: 44 },
            { x: '6', y: 87 },
            { x: '12', y: 88 },
            { x: '13', y: 15 },
            { x: '14', y: 67 },
            { x: '15', y: 55 },
            { x: '17', y: 43 },
            { x: '18', y: 41 }
          ]
        },
        {
          name: 'Growth',
          data: [
            { x: '1', y: 30 },
            { x: '2', y: 40 },
            { x: '13', y: 15 },
            { x: '14', y: 67 },
            { x: '15', y: 55 },
            { x: '3', y: 22 },
            { x: '4', y: 82 },
            { x: '5', y: 44 },
            { x: '6', y: 87 },
            { x: '7', y: 69 },
            { x: '8', y: 53 },
            { x: '9', y: 64 },
            { x: '10', y: 5 },
            { x: '11', y: 72 },
            { x: '12', y: 88 },
            { x: '16', y: 22 },
            { x: '17', y: 43 },
            { x: '18', y: 41 }
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'heatmap'
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#008FFB'],
        title: {
          text: 'HeatMap Chart (Single color)'
        }
      }
    };
  }

  render() {
    return (
      <Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="heatmap"
          height={350}
        />
      </Fragment>
    );
  }
}
