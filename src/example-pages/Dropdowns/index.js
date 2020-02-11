import React, { Fragment, Component } from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import DropdownsBasic from '../../example-components/Dropdowns/DropdownsBasic';
import DropdownsSplit from '../../example-components/Dropdowns/DropdownsSplit';
export default class Dropdowns extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Dropdowns"
          titleDescription="A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list."
        />

        <Row>
          <Col xl="6">
            <ExampleWrapperSimple sectionHeading="Basic">
              <DropdownsBasic />
            </ExampleWrapperSimple>
          </Col>
          <Col xl="6">
            <ExampleWrapperSimple sectionHeading="Split">
              <DropdownsSplit />
            </ExampleWrapperSimple>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
