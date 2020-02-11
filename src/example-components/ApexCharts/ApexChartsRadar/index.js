import React, { Fragment, Component } from 'react';

import Chart from 'react-apexcharts';

export default class LivePreviewExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['A', 'B', 'C', 'D', 'E']
      },
      series: [44, 55, 41, 17, 15]
    };
  }

  render() {
    return (
      <Fragment>
        <div className="d-flex justify-content-center">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width="380"
          />
        </div>
      </Fragment>
    );
  }
}
