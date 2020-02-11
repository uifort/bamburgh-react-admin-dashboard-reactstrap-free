import React, { Fragment, Component } from 'react';

import { Row, Col, Form, CustomInput, Label, Input } from 'reactstrap';

import { FormFeedback } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Form>
          <Row>
            <Col md="6" className="mb-3">
              <Label for="form-2-first-name">First name</Label>
              <Input
                valid
                id="form-2-first-name"
                placeholder="First name"
                required=""
              />
            </Col>
            <Col md="6" className="mb-3">
              <Label for="form-2-last-name">Last name</Label>
              <Input
                valid
                id="form-2-last-name"
                placeholder="Last name"
                required=""
              />
            </Col>
          </Row>
          <Row>
            <Col md="6" className="mb-3">
              <Label for="form-2-city">City</Label>
              <Input invalid id="form-2-city" placeholder="City" required="" />
              <FormFeedback>Invalid city</FormFeedback>
            </Col>
            <div className="col-md-3 mb-3">
              <Label for="form-2-state">State</Label>
              <Input
                invalid
                id="form-2-state"
                placeholder="State"
                required=""
              />
              <FormFeedback>Invalid state</FormFeedback>
            </div>
            <div className="col-md-3 mb-3">
              <Label for="form-2-zip">Zip</Label>
              <Input invalid id="form-2-zip" placeholder="Zip" required="" />
              <FormFeedback>Invalid ZIP code</FormFeedback>
            </div>
          </Row>
          <Row className="mb-2">
            <Col md="6" className="mb-3">
              <Label for="form-file-4">Photo ID Scan</Label>
              <CustomInput
                invalid
                type="file"
                id="form-file-4"
                name="customFile"
              />
            </Col>
            <Col md="6" className="mb-3">
              <Label className="d-block" for="form-3-select">
                Favourite Number
              </Label>
              <CustomInput type="select" invalid id="form-3-select" required="">
                <option>Invalid select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </CustomInput>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <CustomInput
                type="checkbox"
                id="exampleCustomInline2"
                invalid
                label="Do you agree to our terms &amp; conditions?"
                inline
              />
            </Col>
            <Col md="6">
              <div className="custom-controls-stacked d-block">
                <CustomInput
                  type="radio"
                  id="radioStacked1"
                  name="customRadio"
                  invalid
                  label="Subscribe me"
                  inline
                />
                <CustomInput
                  type="radio"
                  id="radioStacked2"
                  name="customRadio"
                  invalid
                  label="Don't subscribe me"
                  inline
                />
              </div>
            </Col>
          </Row>
        </Form>
      </Fragment>
    );
  }
}
