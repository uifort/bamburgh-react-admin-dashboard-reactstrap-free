import React, { Fragment, Component } from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';
import { ExampleWrapperSeamless } from '../../layout-components';

import AccordionsBasic from '../../example-components/Accordions/AccordionsBasic';
import AccordionsCollapse from '../../example-components/Accordions/AccordionsCollapse';

export default class Accordions extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Accordions"
          titleDescription="Accordions represent collapsable component with extended functionality."
        />
        <Row>
          <Col xl="6">
            <ExampleWrapperSeamless sectionHeading="Basic">
              <AccordionsBasic />
            </ExampleWrapperSeamless>
          </Col>
          <Col xl="6">
            <ExampleWrapperSeamless sectionHeading="Collapse">
              <AccordionsCollapse />
            </ExampleWrapperSeamless>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
