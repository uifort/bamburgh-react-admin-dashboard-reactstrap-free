import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col, CardBody, Card, CardHeader } from 'reactstrap';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col lg="6">
            <Card className="card-box mb-5">
              <CardHeader>
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                  Reports
                </h4>
              </CardHeader>
              <CardBody>
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>Stats</b>
                    <div className="text-black-50">Last month targets</div>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    $1,23M
                  </div>
                </div>
                <div className="divider" />
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>Payments</b>
                    <div className="text-black-50">Week's expenses</div>
                  </div>
                  <div className="font-weight-bold text-danger font-size-xl">
                    - $123,305
                  </div>
                </div>
                <div className="divider" />
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>Orders</b>
                    <div className="text-black-50">Total products ordered</div>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    65
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-box mb-5">
              <CardHeader>
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                  Statistics
                </h4>
              </CardHeader>
              <CardBody>
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>Reports</b>
                    <div className="text-black-50">Monthly sales reports</div>
                  </div>
                  <div className="font-weight-bold text-danger font-size-xl">
                    2363
                  </div>
                </div>
                <div className="divider" />
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>User</b>
                    <div className="text-black-50">Visitors last week</div>
                  </div>
                  <div className="font-weight-bold text-success font-size-xl">
                    584
                  </div>
                </div>
                <div className="divider" />
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>Sales</b>
                    <div className="text-black-50">
                      Total average weekly report
                    </div>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    483
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Card className="card-box mb-5">
              <CardBody>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex">
                    <div>
                      <b>User</b>
                      <div className="text-black-50">Visitors last week</div>
                    </div>
                  </div>
                  <div className="font-weight-bold text-success font-size-lg">
                    235
                  </div>
                </div>
                <div className="divider my-3" />
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex">
                    <div>
                      <b>Stats</b>
                      <div className="text-black-50">Last month targets</div>
                    </div>
                  </div>
                  <div className="font-weight-bold text-first font-size-lg">
                    {' '}
                    $1,23M
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-box mb-5">
              <CardBody>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Inez Conley
                        </a>
                        <span className="text-black-50 d-block">
                          Project Manager
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="font-weight-bold text-danger font-size-lg pr-2">
                      584
                    </div>
                    <FontAwesomeIcon
                      icon={['fas', 'arrow-down']}
                      className="font-size-sm text-danger opacity-5"
                    />
                  </div>
                </div>
                <div className="divider my-3" />
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar4} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Beck Simpson
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Consultant
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="font-weight-bold text-first font-size-lg pr-2">
                      {' '}
                      $12,23M
                    </div>
                    <FontAwesomeIcon
                      icon={['fas', 'arrow-up']}
                      className="font-size-sm text-first opacity-5"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
