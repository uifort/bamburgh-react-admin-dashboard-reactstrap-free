import React, { Fragment, Component } from 'react';

import { Progress } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Progress value="25" className="progress-xs mb-4" />
        <Progress value="45" className="progress-sm mb-4" />
        <Progress value="65" className="mb-4" />
        <Progress value="85" className="progress-lg mb-4" />
      </Fragment>
    );
  }
}
