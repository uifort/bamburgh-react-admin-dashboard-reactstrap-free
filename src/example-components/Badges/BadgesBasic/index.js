import React, { Fragment, Component } from 'react';

import { Badge } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Badge className="m-1" color="primary">
          Primary
        </Badge>
        <Badge className="m-1" color="second">
          Secondary
        </Badge>
        <Badge className="m-1" color="success">
          Success
        </Badge>
        <Badge className="m-1" color="danger">
          Danger
        </Badge>
        <Badge className="m-1" color="warning">
          Warning
        </Badge>
        <Badge className="m-1" color="info">
          Info
        </Badge>
        <Badge className="m-1" color="dark">
          Dark
        </Badge>

        <div className="divider my-4" />

        <Badge className="m-1 text-primary" color="neutral-primary">
          Primary
        </Badge>
        <Badge className="m-1 text-second" color="neutral-second">
          Secondary
        </Badge>
        <Badge className="m-1 text-success" color="neutral-success">
          Success
        </Badge>
        <Badge className="m-1 text-danger" color="neutral-danger">
          Danger
        </Badge>
        <Badge className="m-1 text-warning" color="neutral-warning">
          Warning
        </Badge>
        <Badge className="m-1 text-info" color="neutral-info">
          Info
        </Badge>
        <Badge className="m-1 text-dark" color="neutral-dark">
          Dark
        </Badge>
      </Fragment>
    );
  }
}
