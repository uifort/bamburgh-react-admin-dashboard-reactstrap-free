import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Row,
  Col,
  Card,
  Badge,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import people1 from '../../../assets/images/stock-photos/people-1.jpg';

import people3 from '../../../assets/images/stock-photos/people-3.jpg';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col xl="6">
            <Card className="card-box mb-5">
              <ListGroup flush>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <div>
                    <b>Popular people</b>
                    <div className="avatar-wrapper-overlap mt-2">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar7} />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar6} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge pill color="primary">
                    14
                  </Badge>
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  className="d-flex justify-content-between align-items-center"
                  href="#"
                  onClick={e => e.preventDefault()}>
                  View available rooms
                  <span>
                    <FontAwesomeIcon icon={['fas', 'angle-right']} />
                  </span>
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  className="d-flex justify-content-between align-items-center"
                  href="#"
                  onClick={e => e.preventDefault()}>
                  Book a room
                  <span>
                    <FontAwesomeIcon icon={['fas', 'angle-right']} />
                  </span>
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  className="d-flex justify-content-between align-items-center"
                  href="#"
                  onClick={e => e.preventDefault()}>
                  View reservation
                  <span>
                    <FontAwesomeIcon icon={['fas', 'angle-right']} />
                  </span>
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  className="d-flex justify-content-between align-items-center"
                  href="#"
                  onClick={e => e.preventDefault()}>
                  Calendar options
                  <span>
                    <FontAwesomeIcon icon={['fas', 'angle-right']} />
                  </span>
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  className="d-flex justify-content-between align-items-center"
                  href="#"
                  onClick={e => e.preventDefault()}>
                  Search for a castle
                  <span>
                    <FontAwesomeIcon icon={['fas', 'angle-right']} />
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex bg-light justify-content-between align-items-center">
                  Finish today's tasks
                  <Badge color="neutral-success" className="text-success">
                    NEW Task
                  </Badge>
                </ListGroupItem>
                <ListGroupItem className="d-flex bg-light justify-content-between align-items-center">
                  Attend Java training
                  <small className="d-block">
                    19<sup>th</sup> September
                    <FontAwesomeIcon icon={['far', 'clock']} className="ml-1" />
                  </small>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col xl="6">
            <Card className="card-box mb-5">
              <ListGroup flush>
                <ListGroupItem className="d-flex justify-content-between bg-light align-items-center">
                  <div className="avatar-icon-wrapper avatar-icon-lg">
                    <div className="avatar-icon rounded">
                      <img alt="..." src={avatar1} />
                    </div>
                  </div>
                  <div className="flex-grow-1 pl-2">
                    <h5 className="mt-0 mb-1">John Doe</h5>
                    <p className="card-text mb-0">
                      This is a short bio for John's widget...
                    </p>
                  </div>
                  <span className="pl-3">
                    <Button size="sm" color="second" className="pl-2 pr-2">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon
                          icon={['fas', 'cog']}
                          className="font-size-lg"
                        />
                      </span>
                    </Button>
                  </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  Fortifications in Europe
                  <Badge pill color="neutral-primary">
                    21
                  </Badge>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  Popular castles
                  <Badge pill color="neutral-success">
                    76
                  </Badge>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  Famous forts
                  <Badge pill color="neutral-danger">
                    34
                  </Badge>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <div className="w-100">
                    <div className="d-flex flex-wrap justify-content-between mb-2">
                      <small className="line-height-xs text-uppercase text-muted">
                        Nov 12, 11:25am
                      </small>
                      <small className="line-height-xs text-uppercase text-success">
                        Due in 12 days
                      </small>
                    </div>
                    <h6 className="pt-1 pb-1">
                      <Badge
                        pill
                        color="neutral-warning"
                        className="text-warning"
                        href="#"
                        onClick={e => e.preventDefault()}>
                        New report generated
                      </Badge>
                    </h6>
                    <p className="mb-3">
                      This is a dummy text acting like a small description for
                      the above title...
                    </p>
                    <div className="mt-3 mb-2">
                      <a href="#" onClick={e => e.preventDefault()}>
                        <img
                          alt="Rounded image"
                          className="img-fluid rounded mr-3 shadow-sm"
                          src={people1}
                          width="70"
                        />
                      </a>
                      <a href="#" onClick={e => e.preventDefault()}>
                        <img
                          alt="Rounded image"
                          className="img-fluid rounded shadow-sm"
                          src={people3}
                          width="70"
                        />
                      </a>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
