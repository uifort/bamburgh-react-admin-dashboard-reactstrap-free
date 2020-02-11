import React, { Fragment, Component } from 'react';

import {
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  FormText,
  Form,
  CustomInput,
  Label,
  FormGroup,
  Input,
  Button
} from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col md="6">
            <Card className="card-box mb-5">
              <CardBody>
                <CardTitle className="font-weight-bold font-size-lg mb-4">
                  Controls Types
                </CardTitle>
                <Form>
                  <FormGroup>
                    <Label htmlFor="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="with a placeholder"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password placeholder"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="exampleSelectMulti">Select Multiple</Label>
                    <Input
                      type="select"
                      name="selectMulti"
                      id="exampleSelectMulti"
                      multiple>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                      This is some placeholder block-level help text for the
                      above input. It's a bit lighter and easily wraps to a new
                      line.
                    </FormText>
                  </FormGroup>
                  <Button color="primary" className="mt-1">
                    Submit
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-box mb-5">
              <CardBody>
                <CardTitle className="font-weight-bold font-size-lg mb-4">
                  Sizing
                </CardTitle>
                <Form>
                  <Input className="mb-2" placeholder="lg" bsSize="lg" />
                  <Input className="mb-2" placeholder="default" />
                  <Input className="mb-2" placeholder="sm" bsSize="sm" />
                  <div className="divider" />
                  <Input className="mb-2" type="select" bsSize="lg">
                    <option>Large Select</option>
                  </Input>
                  <Input className="mb-2" type="select">
                    <option>Default Select</option>
                  </Input>
                  <Input type="select" bsSize="sm">
                    <option>Small Select</option>
                  </Input>
                </Form>
              </CardBody>
            </Card>
            <Card className="card-box mb-5">
              <CardBody>
                <CardTitle className="font-weight-bold font-size-lg mb-4">
                  Checkboxes & Radios
                </CardTitle>
                <Form>
                  <FormGroup tag="fieldset">
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" /> Option one is this
                        and that—be sure to include why it's great
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" /> Option two can be
                        something else and selecting it will deselect option one
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input type="radio" name="radio1" disabled /> Option
                        three is disabled
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" /> Check me out
                    </Label>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="card-box mb-5">
              <CardBody>
                <CardTitle className="font-weight-bold font-size-lg mb-4">
                  Checkboxes
                </CardTitle>
                <FormGroup>
                  <div>
                    <CustomInput
                      className="mb-3"
                      type="checkbox"
                      id="exampleCustomCheckbox"
                      label="Check this custom checkbox"
                    />
                    <CustomInput
                      className="mb-3"
                      type="checkbox"
                      id="exampleCustomCheckbox2"
                      label="Or this one"
                    />
                    <CustomInput
                      type="checkbox"
                      id="exampleCustomCheckbox3"
                      label="But not this disabled one"
                      disabled
                    />
                  </div>
                </FormGroup>
              </CardBody>
            </Card>
            <Card className="card-box mb-5">
              <CardBody>
                <CardTitle className="font-weight-bold font-size-lg mb-4">
                  Radios
                </CardTitle>
                <FormGroup>
                  <div>
                    <CustomInput
                      className="mb-3"
                      type="radio"
                      id="exampleCustomRadio"
                      name="customRadio"
                      label="Select this custom radio"
                    />
                    <CustomInput
                      className="mb-3"
                      type="radio"
                      id="exampleCustomRadio2"
                      name="customRadio"
                      label="Or this one"
                    />
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio3"
                      label="But not this disabled one"
                      disabled
                    />
                  </div>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-box mb-5">
              <CardBody>
                <CardTitle className="font-weight-bold font-size-lg mb-4">
                  Inline
                </CardTitle>
                <FormGroup>
                  <div>
                    <CustomInput
                      type="checkbox"
                      id="exampleCustomInline"
                      label="An inline custom input"
                      inline
                    />
                    <CustomInput
                      type="checkbox"
                      id="exampleCustomInline2"
                      label="and another one"
                      inline
                    />
                  </div>
                </FormGroup>
              </CardBody>
            </Card>
            <Card className="card-box mb-5">
              <CardBody>
                <CardTitle className="font-weight-bold font-size-lg mb-4">
                  Form Select
                </CardTitle>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="exampleCustomSelect">Custom Select</Label>
                      <CustomInput
                        type="select"
                        id="exampleCustomSelect"
                        name="customSelect">
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                      </CustomInput>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="exampleCustomMutlipleSelect">
                        Custom Multiple Select
                      </Label>
                      <CustomInput
                        type="select"
                        id="exampleCustomMutlipleSelect"
                        name="customSelect"
                        multiple>
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                      </CustomInput>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="exampleCustomSelectDisabled">
                        Custom Select Disabled
                      </Label>
                      <CustomInput
                        type="select"
                        id="exampleCustomSelectDisabled"
                        name="customSelect"
                        disabled>
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                      </CustomInput>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="exampleCustomMutlipleSelectDisabled">
                        Custom Multiple Select Disabled
                      </Label>
                      <CustomInput
                        type="select"
                        id="exampleCustomMutlipleSelectDisabled"
                        name="customSelect"
                        multiple
                        disabled>
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                      </CustomInput>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
