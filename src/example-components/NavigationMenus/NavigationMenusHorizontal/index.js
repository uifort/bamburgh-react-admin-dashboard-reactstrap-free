import React, { Fragment, Component } from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <div className="heading-3">Pills menu</div>
        <Nav pills className="mb-4">
          <NavItem>
            <NavLink
              active
              className="d-block mr-1"
              href="#"
              onClick={e => e.preventDefault()}>
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="d-block mr-1"
              href="#"
              onClick={e => e.preventDefault()}>
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="d-block mr-1"
              href="#"
              onClick={e => e.preventDefault()}>
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              disabled
              className="d-block mr-1"
              href="#"
              onClick={e => e.preventDefault()}>
              Disabled
            </NavLink>
          </NavItem>
        </Nav>

        <div className="divider mb-4" />

        <div className="heading-3">Justified menu</div>
        <Nav pills justified>
          <NavItem>
            <NavLink
              active
              className="d-block mr-1"
              href="#"
              onClick={e => e.preventDefault()}>
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="d-block mr-1"
              href="#"
              onClick={e => e.preventDefault()}>
              Longer nav link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="d-block mr-1"
              href="#"
              onClick={e => e.preventDefault()}>
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              disabled
              className="d-block mr-1"
              href="#"
              onClick={e => e.preventDefault()}>
              Disabled
            </NavLink>
          </NavItem>
        </Nav>
      </Fragment>
    );
  }
}
