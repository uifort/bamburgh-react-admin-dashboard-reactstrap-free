import React, { Fragment, Component } from 'react';

import { Button, DropdownToggle, DropdownMenu } from 'reactstrap';

import { UncontrolledButtonDropdown } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <UncontrolledButtonDropdown className="m-2">
          <Button size="sm" color="danger">
            Action
          </Button>
          <DropdownToggle caret color="danger">
            <span className="sr-only">Split button!</span>
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
        </UncontrolledButtonDropdown>
        <UncontrolledButtonDropdown className="m-2">
          <Button color="danger">Action</Button>
          <DropdownToggle caret color="danger">
            <span className="sr-only">Split button!</span>
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
        </UncontrolledButtonDropdown>
        <UncontrolledButtonDropdown className="m-2">
          <Button size="lg" color="danger">
            Action
          </Button>
          <DropdownToggle caret color="danger">
            <span className="sr-only">Split button!</span>
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
        </UncontrolledButtonDropdown>
      </Fragment>
    );
  }
}
