import React, { Fragment, Component } from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import ProgressBarsBasic from '../../example-components/ProgressBars/ProgressBarsBasic';
import ProgressBarsAnimated from '../../example-components/ProgressBars/ProgressBarsAnimated';
import ProgressBarsLabels from '../../example-components/ProgressBars/ProgressBarsLabels';
import ProgressBarsRounded from '../../example-components/ProgressBars/ProgressBarsRounded';
import ProgressBarsColors from '../../example-components/ProgressBars/ProgressBarsColors';
import ProgressBarsMultiple from '../../example-components/ProgressBars/ProgressBarsMultiple';
export default class ProgressBars extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Progress Bars"
          titleDescription="You can use the progress bars on their own or in combination with other widgets."
        />

        <Row>
          <Col xl="6">
            <ExampleWrapperSimple sectionHeading="Basic">
              <ProgressBarsBasic />
            </ExampleWrapperSimple>
            <ExampleWrapperSimple sectionHeading="Labels">
              <ProgressBarsLabels />
            </ExampleWrapperSimple>
            <ExampleWrapperSimple sectionHeading="Animated">
              <ProgressBarsAnimated />
            </ExampleWrapperSimple>
            <ExampleWrapperSimple sectionHeading="Multiple">
              <ProgressBarsMultiple />
            </ExampleWrapperSimple>
          </Col>
          <Col xl="6">
            <ExampleWrapperSimple sectionHeading="Rounded">
              <ProgressBarsRounded />
            </ExampleWrapperSimple>
            <ExampleWrapperSimple sectionHeading="Colors">
              <ProgressBarsColors />
            </ExampleWrapperSimple>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
