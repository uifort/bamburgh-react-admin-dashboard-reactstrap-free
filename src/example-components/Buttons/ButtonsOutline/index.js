import React, { Fragment, Component } from 'react';

import { Button } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Button className="m-2" outline color="primary">
          Primary
        </Button>
        <Button className="m-2" outline color="first">
          Primary Alt
        </Button>
        <Button className="m-2" outline color="second">
          Secondary Alt
        </Button>

        <Button className="m-2" outline color="info">
          Info
        </Button>
        <Button className="m-2" outline color="success">
          Success
        </Button>
        <Button className="m-2" outline color="warning">
          Warning
        </Button>
        <Button className="m-2" outline color="danger">
          Danger
        </Button>
        <Button className="m-2" outline color="dark">
          Dark
        </Button>
      </Fragment>
    );
  }
}
