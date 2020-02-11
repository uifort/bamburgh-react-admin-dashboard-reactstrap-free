import React, { Fragment, Component } from 'react';

import { Progress } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Progress
          value="45"
          color="danger"
          className="progress-bar-rounded progress-sm mb-4"
        />
        <Progress
          value="65"
          color="danger"
          className="progress-bar-rounded mb-4"
        />
        <Progress
          value="85"
          color="danger"
          className="progress-bar-rounded progress-lg"
        />
      </Fragment>
    );
  }
}
