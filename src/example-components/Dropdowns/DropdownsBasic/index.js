import React, { Fragment, Component } from 'react';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <UncontrolledDropdown tag="span" className="m-2">
          <DropdownToggle size="sm" color="second" caret>
            Action
          </DropdownToggle>
          <DropdownMenu>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#"
                onClick={e => e.preventDefault()}>
                Action
              </a>
            </div>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#"
                onClick={e => e.preventDefault()}>
                Another action
              </a>
            </div>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#"
                onClick={e => e.preventDefault()}>
                Something else here
              </a>
            </div>
            <div className="divider dropdown-divider" />
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#"
                onClick={e => e.preventDefault()}>
                Separated link
              </a>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown tag="span" className="m-2">
          <DropdownToggle color="second" caret>
            Action
          </DropdownToggle>
          <DropdownMenu>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#"
                onClick={e => e.preventDefault()}>
                Action
              </a>
            </div>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#"
                onClick={e => e.preventDefault()}>
                Another action
              </a>
            </div>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#"
                onClick={e => e.preventDefault()}>
                Something else here
              </a>
            </div>
            <div className="divider dropdown-divider" />
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#"
                onClick={e => e.preventDefault()}>
                Separated link
              </a>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown tag="span" className="m-2">
          <DropdownToggle size="lg" color="second" caret>
            Action
          </DropdownToggle>
          <DropdownMenu>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#"
                onClick={e => e.preventDefault()}>
                Action
              </a>
            </div>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#"
                onClick={e => e.preventDefault()}>
                Another action
              </a>
            </div>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#"
                onClick={e => e.preventDefault()}>
                Something else here
              </a>
            </div>
            <div className="divider dropdown-divider" />
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#"
                onClick={e => e.preventDefault()}>
                Separated link
              </a>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Fragment>
    );
  }
}
