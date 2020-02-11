import React, { Fragment, useState } from 'react';

import {
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { InputGroupButtonDropdown } from 'reactstrap';

const LivePreviewExample = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  return (
    <Fragment>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <CardBody>
              <CardTitle className="font-weight-bold font-size-lg mb-4">
                Input Groups
              </CardTitle>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="username" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Input
                      addon
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Check it out" />
              </InputGroup>
              <br />
              <InputGroup>
                <Input placeholder="username" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>@example.com</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>$</InputGroupText>
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Dolla dolla billz yo!" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>$</InputGroupText>
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input
                  placeholder="Amount"
                  min={0}
                  max={100}
                  type="number"
                  step="1"
                />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>
          <Card className="card-box mb-5">
            <CardBody>
              <CardTitle className="font-weight-bold font-size-lg mb-4">
                Input Groups
              </CardTitle>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <Button color="primary">I'm a button</Button>
                </InputGroupAddon>
                <Input />
              </InputGroup>
              <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                  <Button color="success">I'm a button</Button>
                </InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <CardBody>
              <CardTitle className="font-weight-bold font-size-lg mb-4">
                Input Groups Addons
              </CardTitle>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>To the Left!</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
              <br />
              <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                  <InputGroupText>To the Right!</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>To the Left!</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="and..." />
                <InputGroupAddon addonType="append">
                  <InputGroupText>To the Right!</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <br />
              <InputGroup size="lg">
                <InputGroupAddon addonType="prepend">@lg</InputGroupAddon>
                <Input />
              </InputGroup>
              <br />
              <InputGroup size="sm">
                <InputGroupAddon addonType="prepend">@sm</InputGroupAddon>
                <Input />
              </InputGroup>
            </CardBody>
          </Card>
          <Card className="card-box mb-5">
            <CardBody>
              <CardTitle className="font-weight-bold font-size-lg mb-4">
                Input Group Button Dropdowns
              </CardTitle>
              <InputGroup>
                <Input />
                <InputGroupButtonDropdown
                  addonType="append"
                  isOpen={dropdownOpen}
                  toggle={toggleDropDown}>
                  <DropdownToggle color="danger" caret>
                    Button Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </InputGroupButtonDropdown>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupButtonDropdown
                  addonType="prepend"
                  isOpen={splitButtonOpen}
                  toggle={toggleSplit}>
                  <Button outline color="warning">
                    Split Button
                  </Button>
                  <DropdownToggle color="warning" split outline />
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </InputGroupButtonDropdown>
                <Input placeholder="and..." />
                <InputGroupAddon addonType="append">
                  <Button color="first">I'm a button</Button>
                </InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default LivePreviewExample;
