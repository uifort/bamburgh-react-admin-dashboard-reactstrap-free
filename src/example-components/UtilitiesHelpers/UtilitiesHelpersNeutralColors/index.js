import React, { Fragment, Component } from 'react';

import { Row, Col } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col md="3">
            <div className="color-swatch">
              <div className="color-swatch--bg bg-neutral-primary" />
              <h6 className="color-swatch--title">bg-neutral-primary</h6>
            </div>
          </Col>
          <Col md="3">
            <div className="color-swatch">
              <div className="color-swatch--bg bg-neutral-first" />
              <h6 className="color-swatch--title">bg-neutral-first</h6>
            </div>
          </Col>
          <Col md="3">
            <div className="color-swatch">
              <div className="color-swatch--bg bg-neutral-second" />
              <h6 className="color-swatch--title">bg-neutral-second</h6>
            </div>
          </Col>
          <Col md="3">
            <div className="color-swatch">
              <div className="color-swatch--bg bg-neutral-success" />
              <h6 className="color-swatch--title">bg-neutral-success</h6>
            </div>
          </Col>
          <Col md="3">
            <div className="color-swatch">
              <div className="color-swatch--bg bg-neutral-warning" />
              <h6 className="color-swatch--title">bg-neutral-warning</h6>
            </div>
          </Col>
          <Col md="3">
            <div className="color-swatch">
              <div className="color-swatch--bg bg-neutral-danger" />
              <h6 className="color-swatch--title">bg-neutral-danger</h6>
            </div>
          </Col>
          <Col md="3">
            <div className="color-swatch">
              <div className="color-swatch--bg bg-neutral-info" />
              <h6 className="color-swatch--title">bg-neutral-info</h6>
            </div>
          </Col>
          <Col md="3">
            <div className="color-swatch">
              <div className="color-swatch--bg bg-neutral-dark" />
              <h6 className="color-swatch--title">bg-neutral-dark</h6>
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
