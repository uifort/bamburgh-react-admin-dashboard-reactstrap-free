import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col, CardBody, Card } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col xl="4">
            <Card className="card-box mb-5">
              <CardBody>
                <div className="align-box-row align-items-start">
                  <div className="font-weight-bold">
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      New Accounts
                    </small>
                    <span className="font-size-xxl mt-1">586,356</span>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-love-kiss text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'keyboard']} />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-up']}
                    className="text-success"
                  />
                  <span className="text-success px-1">15.4%</span>
                  <span className="text-black-50">increase this month</span>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="card-box mb-5">
              <CardBody>
                <div className="align-box-row align-items-start">
                  <div className="font-weight-bold">
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Sales
                    </small>
                    <span className="font-size-xxl mt-1">23,274</span>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-happy-fisher text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'dot-circle']} />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-up']}
                    className="text-warning"
                  />
                  <span className="text-warning px-1">5.9%</span>
                  <span className="text-black-50">same as before</span>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="card-box mb-5">
              <CardBody>
                <div className="align-box-row align-items-start">
                  <div className="font-weight-bold">
                    <small className="text-black-50 d-block mb-1 text-uppercase">
                      Orders
                    </small>
                    <span className="font-size-xxl mt-1">345</span>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-plum-plate text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'keyboard']} />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-up']}
                    className="text-danger"
                  />
                  <span className="text-danger px-1">5.9%</span>
                  <span className="text-black-50">lower order numbers</span>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
