import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Row,
  Col,
  Card,
  CardHeader,
  Badge,
  ListGroup,
  ListGroupItem,
  Button,
  Progress
} from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col xl="6">
            <Card className="card-box mb-5">
              <CardHeader>
                <div className="card-header--title">
                  <b>Monthly targets</b>
                  <small className="d-block text-capitalize mt-1">
                    Card with progress bars list items.
                  </small>
                </div>
              </CardHeader>
              <ListGroup flush>
                <ListGroupItem className="py-2">
                  <div className="align-box-row mb-1">
                    <div>
                      <div className="font-weight-bold">Orders</div>
                    </div>
                    <div className="ml-auto">
                      <div className="font-size-xl font-weight-bold text-success">
                        348
                      </div>
                    </div>
                  </div>
                  <Progress
                    className="progress-animated-alt"
                    color="success"
                    value="34">
                    34%
                  </Progress>
                  <div className="align-box-row progress-bar--label mt-1 text-muted">
                    <small className="text-dark">0</small>
                    <div className="ml-auto">100%</div>
                  </div>
                </ListGroupItem>
                <ListGroupItem className="py-2">
                  <div className="align-box-row mb-1">
                    <div>
                      <div className="font-weight-bold">Sales</div>
                    </div>
                    <div className="ml-auto">
                      <div className="font-size-xl font-weight-bold text-danger">
                        <small>$</small>
                        2.3M
                      </div>
                    </div>
                  </div>
                  <Progress
                    className="progress-animated-alt"
                    color="danger"
                    value="39">
                    39%
                  </Progress>
                  <div className="align-box-row progress-bar--label mt-1 text-muted">
                    <small className="text-dark">0</small>
                    <div className="ml-auto">100%</div>
                  </div>
                </ListGroupItem>
                <ListGroupItem className="py-2">
                  <div className="align-box-row mb-1">
                    <div>
                      <div className="font-weight-bold">Users</div>
                    </div>
                    <div className="ml-auto">
                      <div className="font-size-xl font-weight-bold text-info">
                        <small>#</small>
                        87
                      </div>
                    </div>
                  </div>
                  <Progress
                    className="progress-animated-alt"
                    color="info"
                    value="51">
                    51%
                  </Progress>
                  <div className="align-box-row progress-bar--label mt-1 text-muted">
                    <small className="text-dark">0</small>
                    <div className="ml-auto">100%</div>
                  </div>
                </ListGroupItem>
              </ListGroup>
              <div className="card-footer bg-light p-4 text-center">
                <Button color="second">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['far', 'question-circle']}
                      className="font-size-lg"
                    />
                  </span>
                  <span className="btn-wrapper--label">View details</span>
                </Button>
              </div>
            </Card>
          </Col>
          <Col xl="6">
            <Card className="card-box mb-5">
              <div className="card-header bg-light">
                <div className="card-header--title">
                  <small className="d-block text-uppercase mt-1">
                    Progress
                  </small>
                  <b>Users Analytics</b>
                </div>
                <div className="card-header--actions">
                  <Badge pill color="dark">
                    Pending
                  </Badge>
                </div>
              </div>
              <ListGroup flush>
                <ListGroupItem>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <Progress
                        className="progress-bar-rounded progress-animated-alt"
                        color="success"
                        value="61">
                        61%
                      </Progress>
                    </div>
                    <div className="line-height-sm text-center ml-4">
                      <small className="text-black-50 d-block text-uppercase">
                        Totals
                      </small>
                      <b className="font-size-lg text-success">
                        <small className="pr-1 text-black-50">$</small>
                        1,628
                      </b>
                    </div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <Progress
                        className="progress-animated-alt progress-bar-rounded"
                        color="info"
                        value="44">
                        44%
                      </Progress>
                    </div>
                    <div className="line-height-sm text-center ml-4">
                      <small className="text-black-50 d-block text-uppercase">
                        Totals
                      </small>
                      <b className="font-size-lg text-info">
                        <small className="text-black-50 pr-1">$</small>
                        7,389
                      </b>
                    </div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <Progress
                        className="progress-bar-rounded progress-animated-alt"
                        color="danger"
                        value="29">
                        29%
                      </Progress>
                    </div>
                    <div className="line-height-sm text-center ml-4">
                      <small className="text-black-50 d-block text-uppercase">
                        Totals
                      </small>
                      <b className="font-size-lg text-danger">
                        <small className="text-black-50 pr-1">$</small>
                        8,493
                      </b>
                    </div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <Progress
                        className="progress-bar-rounded progress-animated-alt"
                        color="warning"
                        value="38">
                        38%
                      </Progress>
                    </div>
                    <div className="line-height-sm text-center ml-4">
                      <small className="text-black-50 d-block text-uppercase">
                        Totals
                      </small>
                      <b className="font-size-lg text-warning">
                        <small className="text-black-50 pr-1">$</small>
                        2,594
                      </b>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
              <div className="card-footer bg-light text-center">
                <Button size="sm" color="first">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'question-circle']} />
                  </span>
                  <span className="btn-wrapper--label">Generate reports</span>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
