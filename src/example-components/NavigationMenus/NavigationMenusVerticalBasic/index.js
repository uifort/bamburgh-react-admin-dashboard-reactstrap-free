import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col, Card, Badge, Nav, NavItem, NavLink } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col xl="4">
            <div className="heading-3 text-center">Default style</div>
            <Card className="card-box shadow-none rounded-0 border-2 mb-3">
              <Nav className=" flex-column py-2">
                <NavItem>
                  <NavLink href="#" onClick={e => e.preventDefault()}>
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </div>
                    <span>Services</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={e => e.preventDefault()} active>
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'question-circle']} />
                    </div>
                    <span>Layouts</span>
                    <Badge color="warning" className="ml-auto">
                      512
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="disabled">
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'user-circle']} />
                    </div>
                    <span>Reports</span>
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item--header">
                  <span>Others</span>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={e => e.preventDefault()}>
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </div>
                    <span>Components</span>
                  </NavLink>
                </NavItem>
                <li className="dropdown-divider" />
                <NavItem>
                  <NavLink href="#" onClick={e => e.preventDefault()}>
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </div>
                    <span>Services</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Card>
          </Col>
          <Col xl="4">
            <div className="heading-3 text-center">Alternate style</div>
            <Card className="card-box shadow-none rounded-0 border-2 mb-3">
              <Nav pills className=" flex-column p-3">
                <NavItem>
                  <NavLink href="#" onClick={e => e.preventDefault()}>
                    <span>My Account</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active href="#" onClick={e => e.preventDefault()}>
                    <span>Profile settings</span>
                    <Badge color="first" className="ml-auto">
                      23
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={e => e.preventDefault()}>
                    <span>Active tasks</span>
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item--header">
                  <span>Heading</span>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={e => e.preventDefault()}>
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'bell']} />
                    </div>
                    <span>Customers</span>
                  </NavLink>
                </NavItem>
                <li className="dropdown-divider" />
                <NavItem>
                  <NavLink href="#" onClick={e => e.preventDefault()}>
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'eye']} />
                    </div>
                    <span>Statistics</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Card>
          </Col>
          <Col xl="4">
            <div className="heading-3 text-center">Rounded corners</div>
            <Card className="card-box shadow-none rounded-0 border-2 mb-3">
              <Nav pills className="nav-pills-rounded flex-column p-3">
                <NavItem>
                  <NavLink href="#" onClick={e => e.preventDefault()}>
                    <span>My Account</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active href="#" onClick={e => e.preventDefault()}>
                    <span>Profile settings</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={e => e.preventDefault()}>
                    <span>Active tasks</span>
                    <Badge className="ml-auto" color="success">
                      New
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item--header">
                  <span>Heading</span>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={e => e.preventDefault()}>
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'bell']} />
                    </div>
                    <span>Customers</span>
                  </NavLink>
                </NavItem>
                <li className="dropdown-divider" />
                <NavItem>
                  <NavLink href="#" onClick={e => e.preventDefault()}>
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'eye']} />
                    </div>
                    <span>Statistics</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
