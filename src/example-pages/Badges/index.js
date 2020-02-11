import React, { Fragment, Component } from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import BadgesBasic from '../../example-components/Badges/BadgesBasic';
import BadgesPills from '../../example-components/Badges/BadgesPills';
import BadgesButtons from '../../example-components/Badges/BadgesButtons';
export default class Badges extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Badges"
          titleDescription="Badges and labels are used to offer extra small pieces of info for your content."
        />

        <Row>
          <Col xl="6">
            <ExampleWrapperSimple sectionHeading="Basic">
              <BadgesBasic />
            </ExampleWrapperSimple>
          </Col>
          <Col xl="6">
            <ExampleWrapperSimple sectionHeading="Pills">
              <BadgesPills />
            </ExampleWrapperSimple>
            <ExampleWrapperSimple sectionHeading="Buttons with label badges">
              <BadgesButtons />
            </ExampleWrapperSimple>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
