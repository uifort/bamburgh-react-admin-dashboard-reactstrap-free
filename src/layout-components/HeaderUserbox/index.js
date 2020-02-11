import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import avatar5 from '../../assets/images/avatars/avatar5.jpg';
export default class HeaderUserbox extends Component {
  render() {
    return (
      <Fragment>
        <UncontrolledDropdown className="user-box position-relative ml-2">
          <DropdownToggle
            color="link"
            className="p-0 text-left d-flex align-items-center">
            <div className="d-block d-44 rounded-sm overflow-hidden">
              <img src={avatar5} className="img-fluid" alt="..." />
            </div>
            <div className="d-none d-xl-block pl-2">
              <div className="font-weight-bold">Ryan Kent</div>
              <span className="text-black-50">Senior accountant</span>
            </div>
            <span className="pl-1 pl-xl-3">
              <FontAwesomeIcon
                icon={['fas', 'angle-down']}
                className="opacity-5"
              />
            </span>
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-lg overflow-hidden p-0">
            <ListGroup flush className="text-left bg-transparent">
              <ListGroupItem className="rounded-top">
                <Nav pills className="nav-neutral-primary flex-column">
                  <NavItem>
                    <NavLink href="#" onClick={e => e.preventDefault()}>
                      My Account
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" onClick={e => e.preventDefault()}>
                      Profile settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" onClick={e => e.preventDefault()}>
                      Active tasks
                    </NavLink>
                  </NavItem>
                </Nav>
              </ListGroupItem>
              <ListGroupItem className="rounded-bottom p-3 text-center">
                <Button
                  tag="a"
                  href="#"
                  onClick={e => e.preventDefault()}
                  color="twitter"
                  id="btnTwitterTooltipHeader"
                  container="body">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnTwitterTooltipHeader">
                  Twitter
                </UncontrolledTooltip>
              </ListGroupItem>
            </ListGroup>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Fragment>
    );
  }
}
