import React, { Fragment, Component } from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import PaginationBasic from '../../example-components/Pagination/PaginationBasic';
import PaginationSizing from '../../example-components/Pagination/PaginationSizing';
export default class Pagination extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Pagination"
          titleDescription="Basic and dynamic pagination for use in your next awesome application."
        />

        <Row>
          <Col lg="6">
            <ExampleWrapperSimple sectionHeading="Basic">
              <PaginationBasic />
            </ExampleWrapperSimple>
          </Col>
          <Col lg="6">
            <ExampleWrapperSimple sectionHeading="Sizing">
              <PaginationSizing />
            </ExampleWrapperSimple>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
