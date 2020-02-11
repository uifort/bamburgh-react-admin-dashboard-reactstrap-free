import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Card, Badge, ListGroup, ListGroupItem } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col xl="6">
            <Card className="card-box mb-5">
              <ListGroup flush>
                <div className="scroll-area rounded bg-white shadow-overflow">
                  <PerfectScrollbar option={{ wheelPropagation: false }}>
                    <ListGroupItem className="py-3 border-0">
                      <div className="align-box-row w-100">
                        <div className="mr-3">
                          <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                            <FontAwesomeIcon icon={['far', 'bell']} />
                          </div>
                        </div>
                        <div>
                          <div className="font-weight-bold d-block opacity-8">
                            Customers
                          </div>
                          <div className="text-dark opacity-5">
                            A wonderful serenity has taken possession of my
                            entire soul.
                          </div>
                        </div>
                      </div>
                    </ListGroupItem>
                    <div className="divider" />
                    <ListGroupItem className="py-3 border-0">
                      <div className="align-box-row w-100">
                        <div className="mr-3">
                          <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                            <FontAwesomeIcon icon={['far', 'object-group']} />
                          </div>
                        </div>
                        <div>
                          <div className="font-weight-bold d-block opacity-8">
                            New articles
                          </div>
                          <div className="text-dark opacity-5">
                            I am alone, and feel the charm of existence in this
                            spot.
                          </div>
                        </div>
                      </div>
                    </ListGroupItem>
                    <div className="divider" />
                    <ListGroupItem className="py-3 border-0">
                      <div className="align-box-row w-100">
                        <div className="mr-3">
                          <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                            <FontAwesomeIcon icon={['far', 'chart-bar']} />
                          </div>
                        </div>
                        <div>
                          <div className="font-weight-bold d-block opacity-8">
                            Blog posts
                          </div>
                          <div className="text-dark opacity-5">
                            When, while the lovely valley teems with vapour
                            around me.
                          </div>
                        </div>
                      </div>
                    </ListGroupItem>
                    <div className="divider" />
                    <ListGroupItem className="py-3 border-0">
                      <div className="align-box-row w-100">
                        <div className="mr-3">
                          <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                            <FontAwesomeIcon icon={['far', 'map']} />
                          </div>
                        </div>
                        <div>
                          <div className="font-weight-bold d-block opacity-8">
                            Google maps
                          </div>
                          <div className="text-dark opacity-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </div>
                        </div>
                      </div>
                    </ListGroupItem>
                  </PerfectScrollbar>
                </div>
              </ListGroup>
            </Card>
          </Col>
          <Col xl="6">
            <Card className="card-box mb-5">
              <div className="scroll-area rounded bg-white shadow-overflow">
                <PerfectScrollbar option={{ wheelPropagation: false }}>
                  <div className="p-3">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Wrong product price
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <a href="#" onClick={e => e.preventDefault()}>
                            Nazim Kidd
                          </a>
                          <span className="pl-2 text-muted">
                            opened 20 minutes ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <Badge color="success">Completed</Badge>
                      </div>
                    </div>
                    <div className="divider my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Active IE8 issues
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <a href="#" onClick={e => e.preventDefault()}>
                            Charlton Oconnell
                          </a>
                          <span className="pl-2 text-muted">
                            opened two hours ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <Badge color="success">Completed</Badge>
                      </div>
                    </div>
                    <div className="divider my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            My account doesn't work
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <a href="#" onClick={e => e.preventDefault()}>
                            Isha Rollins
                          </a>
                          <span className="pl-2 text-muted">
                            opened three hours ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <Badge color="info">On Hold</Badge>
                      </div>
                    </div>
                    <div className="divider my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Unpaid invoice status
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <a href="#" onClick={e => e.preventDefault()}>
                            Celine Goulding
                          </a>
                          <span className="pl-2 text-muted">
                            opened 3 days ag0
                          </span>
                        </small>
                      </div>
                      <div>
                        <Badge color="warning">Pending</Badge>
                      </div>
                    </div>
                    <div className="divider my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Mobile app problems
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <a href="#" onClick={e => e.preventDefault()}>
                            Kush Malone
                          </a>
                          <span className="pl-2 text-muted">
                            opened one week ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <Badge color="danger">Rejected</Badge>
                      </div>
                    </div>
                    <div className="divider my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Responsive issues on Firefox
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <a href="#" onClick={e => e.preventDefault()}>
                            Celine Goulding
                          </a>
                          <span className="pl-2 text-muted">
                            opened one week ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <Badge color="info">On Hold</Badge>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
