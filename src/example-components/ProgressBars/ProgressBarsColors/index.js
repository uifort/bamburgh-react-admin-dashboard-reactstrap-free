import React, { Fragment, Component } from 'react';

import { Progress } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Progress className="mb-4" color="primary" value="25" />
        <Progress className="mb-4" color="success" value="35" />
        <Progress className="mb-4" color="danger" value="45" />
        <Progress className="mb-4" color="info" value="55" />
        <Progress className="mb-4" color="warning" value="65" />
        <Progress className="mb-4" color="dark" value="75" />
        <Progress className="mb-4" color="first" value="85" />
        <Progress color="second" value="95" />
      </Fragment>
    );
  }
}
