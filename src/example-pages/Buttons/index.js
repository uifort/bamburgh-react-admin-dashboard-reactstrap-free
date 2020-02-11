import React, { Fragment, Component } from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import ButtonsBasic from '../../example-components/Buttons/ButtonsBasic';
import ButtonsGroups from '../../example-components/Buttons/ButtonsGroups';
import ButtonsGroupsSizing from '../../example-components/Buttons/ButtonsGroupsSizing';
import ButtonsColors from '../../example-components/Buttons/ButtonsColors';
import ButtonsLinks from '../../example-components/Buttons/ButtonsLinks';
import ButtonsOutline from '../../example-components/Buttons/ButtonsOutline';
import ButtonsSizing from '../../example-components/Buttons/ButtonsSizing';
export default class Buttons extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Buttons"
          titleDescription="Wide selection of buttons that feature different styles for backgrounds, borders and hover options!"
        />

        <Row>
          <Col xl="6">
            <ExampleWrapperSimple sectionHeading="Basic">
              <ButtonsBasic />
              <div className="divider my-2" />
              <ButtonsSizing />
            </ExampleWrapperSimple>
          </Col>
          <Col xl="6">
            <ExampleWrapperSimple sectionHeading="Button groups">
              <div className="text-center">
                <ButtonsGroups />
                <div className="divider my-2" />
                <ButtonsGroupsSizing />
              </div>
            </ExampleWrapperSimple>
          </Col>
          <Col xl="12">
            <ExampleWrapperSimple sectionHeading="Colors">
              <ButtonsColors />
            </ExampleWrapperSimple>
          </Col>
        </Row>

        <ExampleWrapperSimple sectionHeading="Links">
          <ButtonsLinks />
        </ExampleWrapperSimple>

        <ExampleWrapperSimple sectionHeading="Outline">
          <ButtonsOutline />
        </ExampleWrapperSimple>
      </Fragment>
    );
  }
}
