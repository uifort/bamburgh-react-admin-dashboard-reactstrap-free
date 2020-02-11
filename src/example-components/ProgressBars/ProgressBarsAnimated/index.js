import React, { Fragment, Component } from 'react';

import { Progress } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Progress
          value="55"
          striped
          animated
          className="mb-4 progress-bar-rounded"
          color="info">
          55%
        </Progress>
        <Progress value="65" animated striped className="mb-4" color="warning">
          Warning
        </Progress>
        <div className="divider mb-4" />
        <Progress
          value="75"
          striped
          animated
          className="progress-animated-alt mb-4"
          color="dark">
          75%
        </Progress>
        <Progress
          value="85"
          striped
          animated
          className="progress-bar-rounded progress-animated-alt mb-4"
          color="first">
          85%
        </Progress>
      </Fragment>
    );
  }
}
