import React, { Fragment, Component } from 'react';

import { Row, Col, CardBody, Card, Button } from 'reactstrap';
import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col xl="4" lg="6">
            <Card className="mb-5">
              <img alt="..." className="card-img-top" src={stock1} />
              <CardBody>
                <h5 className="card-title font-weight-bold font-size-lg">
                  Card title
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Button
                  tag="a"
                  color="primary"
                  href="#"
                  onClick={e => e.preventDefault()}>
                  Go somewhere
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" lg="6">
            <Card className="mb-5">
              <img alt="..." className="card-img-top" src={stock2} />
              <CardBody>
                <h5 className="card-title font-weight-bold font-size-lg">
                  Card title
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Button
                  tag="a"
                  color="primary"
                  href="#"
                  onClick={e => e.preventDefault()}>
                  Go somewhere
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" className="d-none d-xl-block">
            <Card className="mb-5">
              <img alt="..." className="card-img-top" src={stock3} />
              <CardBody>
                <h5 className="card-title font-weight-bold font-size-lg">
                  Card title
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Button
                  tag="a"
                  color="primary"
                  href="#"
                  onClick={e => e.preventDefault()}>
                  Go somewhere
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
