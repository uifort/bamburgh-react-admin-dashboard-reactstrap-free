import React, { Fragment, Component } from 'react';

import { Button } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Button color="link" className="m-2 btn-link-primary">
          <span>Primary</span>
        </Button>
        <Button color="link" className="m-2 btn-link-first">
          <span>Primary Alt</span>
        </Button>
        <Button color="link" className="m-2 btn-link-second">
          <span>Secondary Alt</span>
        </Button>

        <Button color="link" className="m-2 btn-link-info">
          <span>Info</span>
        </Button>
        <Button color="link" className="m-2 btn-link-success">
          <span>Success</span>
        </Button>
        <Button color="link" className="m-2 btn-link-warning">
          <span>Warning</span>
        </Button>
        <Button color="link" className="m-2 btn-link-danger">
          <span>Danger</span>
        </Button>
        <Button color="link" className="m-2 btn-link-dark">
          <span>Dark</span>
        </Button>
      </Fragment>
    );
  }
}
