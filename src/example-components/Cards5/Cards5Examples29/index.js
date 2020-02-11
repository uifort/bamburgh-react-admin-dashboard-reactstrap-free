import React, { Fragment, Component } from 'react';

import { Row, Col, Card, Button } from 'reactstrap';
import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col xl="4" lg="6">
            <Card className="card-transparent mb-5">
              <div className="card-img-wrapper">
                <img src={stock1} className="card-img-top rounded" alt="..." />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title font-weight-bold font-size-lg">
                  Card title
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Button
                  size="sm"
                  outline
                  color="first"
                  className="btn-pill mt-1">
                  View Details
                </Button>
              </div>
            </Card>
          </Col>
          <Col xl="4" lg="6">
            <Card className="card-transparent mb-5">
              <div className="card-img-wrapper">
                <img src={stock2} className="card-img-top rounded" alt="..." />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title font-weight-bold font-size-lg">
                  Card title
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Button
                  size="sm"
                  outline
                  color="first"
                  className="btn-pill mt-1">
                  View Details
                </Button>
              </div>
            </Card>
          </Col>
          <Col xl="4" lg="12">
            <Card className="card-transparent mb-5">
              <div className="card-img-wrapper">
                <img src={stock3} className="card-img-top rounded" alt="..." />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title font-weight-bold font-size-lg">
                  Card title
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Button
                  size="sm"
                  outline
                  color="first"
                  className="btn-pill mt-1">
                  View Details
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
