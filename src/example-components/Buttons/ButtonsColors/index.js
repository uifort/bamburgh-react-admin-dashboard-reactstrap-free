import React, { Fragment, Component } from 'react';

import { Button } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Button color="primary" className="m-2">
          Primary
        </Button>
        <Button className="m-2" color="secondary">
          Secondary
        </Button>
        <Button className="m-2" color="first">
          Primary Alt
        </Button>
        <Button className="m-2" color="second">
          Secondary Alt
        </Button>
        <Button className="m-2" color="info">
          Info
        </Button>
        <Button className="m-2" color="success">
          Success
        </Button>
        <Button className="m-2" color="warning">
          Warning
        </Button>
        <Button className="m-2" color="danger">
          Danger
        </Button>
        <Button className="m-2" color="dark">
          Dark
        </Button>

        <div className="divider my-2" />

        <Button className="m-2" color="neutral-primary">
          Primary
        </Button>
        <Button className="m-2" color="neutral-secondary">
          Secondary
        </Button>
        <Button className="m-2" color="neutral-first">
          Primary Alt
        </Button>
        <Button className="m-2" color="neutral-second">
          Secondary Alt
        </Button>
        <Button className="m-2" color="neutral-info">
          Info
        </Button>
        <Button className="m-2" color="neutral-success">
          Success
        </Button>
        <Button className="m-2" color="neutral-warning">
          Warning
        </Button>
        <Button className="m-2" color="neutral-danger">
          Danger
        </Button>
        <Button className="m-2" color="neutral-dark">
          Dark
        </Button>
      </Fragment>
    );
  }
}
