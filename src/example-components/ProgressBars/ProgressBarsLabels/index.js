import React, { Fragment, Component } from 'react';

import { Progress } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Progress value="55" color="info" className="mb-4 progress-bar-rounded">
          55%
        </Progress>
        <Progress
          value="65"
          color="warning"
          className="mb-4 progress-bar-rounded">
          65%
        </Progress>
        <Progress value="75" color="dark" className="mb-4 progress-bar-rounded">
          75%
        </Progress>
        <Progress
          value="96"
          color="second"
          className="mb-4 progress-bar-rounded">
          96%
        </Progress>
      </Fragment>
    );
  }
}
