import React, { Fragment, Component } from 'react';

import { Badge } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Badge color="primary" className="btn-pill m-1">
          Primary
        </Badge>
        <Badge color="second" className="btn-pill m-1">
          Secondary
        </Badge>
        <Badge color="success" className="btn-pill m-1">
          Success
        </Badge>
        <Badge color="danger" className="btn-pill m-1">
          Danger
        </Badge>
        <Badge color="warning" className="btn-pill m-1">
          Warning
        </Badge>
        <Badge color="info" className="btn-pill m-1">
          Info
        </Badge>
        <Badge color="dark" className="btn-pill m-1">
          Dark
        </Badge>

        <div className="divider my-4" />

        <Badge pill color="neutral-primary" className="m-1 text-primary">
          Primary
        </Badge>
        <Badge pill color="neutral-second" className="m-1 text-second">
          Secondary
        </Badge>
        <Badge pill color="neutral-success" className="m-1 text-success">
          Success
        </Badge>
        <Badge pill color="neutral-danger" className="m-1 text-danger">
          Danger
        </Badge>
        <Badge pill color="neutral-warning" className="m-1 text-warning">
          Warning
        </Badge>
        <Badge pill color="neutral-info" className="m-1 text-info">
          Info
        </Badge>
        <Badge pill color="neutral-dark" className="m-1 text-dark">
          Dark
        </Badge>
      </Fragment>
    );
  }
}
