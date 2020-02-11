import React, { Fragment, Component } from 'react';

import { Row, Col, Card, Progress } from 'reactstrap';

export default class LivePreviewExample extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col md="6" xl="3">
            <Card className="p-3 mb-5">
              <div className="align-box-row">
                <div className="text-first font-size-xl font-weight-bold pr-2">
                  55%
                </div>
                <div className="flex-grow-1">
                  <Progress
                    animated
                    className="progress-bar-rounded progress-sm"
                    color="first"
                    value="55"
                  />
                </div>
              </div>
              <div className="text-black-50 pt-2">Expenses target</div>
            </Card>
          </Col>
          <Col md="6" xl="3">
            <Card className="p-3 mb-5">
              <div className="align-box-row">
                <div className="text-success font-size-xl font-weight-bold pr-2">
                  76%
                </div>
                <div className="flex-grow-1">
                  <Progress
                    animated
                    className="progress-bar-rounded progress-sm"
                    color="success"
                    value="76"
                  />
                </div>
              </div>
              <div className="text-black-50 pt-2">Sales target</div>
            </Card>
          </Col>
          <Col md="6" xl="3">
            <Card className="p-3 mb-5 bg-asteroid">
              <div className="align-box-row">
                <div className="text-danger font-size-xl font-weight-bold pr-2">
                  61%
                </div>
                <div className="flex-grow-1">
                  <Progress
                    animated
                    className="progress-bar-rounded bg-white-50 progress-sm"
                    color="danger"
                    value="61"
                  />
                </div>
              </div>
              <div className="text-white-50 pt-2">Income target</div>
            </Card>
          </Col>
          <Col md="6" xl="3">
            <Card className="p-3 mb-5 bg-midnight-bloom">
              <div className="align-box-row">
                <div className="text-warning font-size-xl font-weight-bold pr-2">
                  83%
                </div>
                <div className="flex-grow-1">
                  <Progress
                    animated
                    className="progress-bar-rounded bg-white-50 progress-sm"
                    color="warning"
                    value="83"
                  />
                </div>
              </div>
              <div className="text-white-50 pt-2">Spendings target</div>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
