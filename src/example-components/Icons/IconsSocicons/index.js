import React, { Fragment, Component } from 'react';

import { Card } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <div className="icon-demo-box">
          <Card className="p-2 text-primary">
            <span className="socicon-stackoverflow line-height-1"></span>
          </Card>
          <Card className="p-2 text-success">
            <span className="socicon-skype line-height-1"></span>
          </Card>
          <Card className="p-2 text-warning">
            <span className="socicon-youtube line-height-1"></span>
          </Card>
          <Card className="p-2 text-danger">
            <span className="socicon-apple line-height-1"></span>
          </Card>
          <Card className="p-2 text-dark">
            <span className="socicon-facebook line-height-1"></span>
          </Card>
          <Card className="p-2 text-info">
            <span className="socicon-behance line-height-1"></span>
          </Card>
          <Card className="p-2 text-first">
            <span className="socicon-discord line-height-1"></span>
          </Card>
          <Card className="p-2 text-second">
            <span className="socicon-chrome line-height-1"></span>
          </Card>
          <Card className="p-2">
            <span className="socicon-github line-height-1"></span>
          </Card>
          <Card className="p-2">
            <span className="socicon-instagram line-height-1"></span>
          </Card>
          <Card className="p-2">
            <span className="socicon-lastfm line-height-1"></span>
          </Card>
          <Card className="p-2">
            <span className="socicon-outlook line-height-1"></span>
          </Card>
        </div>
      </Fragment>
    );
  }
}
