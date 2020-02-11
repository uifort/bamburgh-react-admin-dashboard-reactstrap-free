import React, { Fragment, Component } from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import ApexChartsLine from '../../example-components/ApexCharts/ApexChartsLine';
import ApexChartsArea from '../../example-components/ApexCharts/ApexChartsArea';
import ApexChartsColumn from '../../example-components/ApexCharts/ApexChartsColumn';
import ApexChartsBar from '../../example-components/ApexCharts/ApexChartsBar';
import ApexChartsMixed from '../../example-components/ApexCharts/ApexChartsMixed';
import ApexChartsHeatmap from '../../example-components/ApexCharts/ApexChartsHeatmap';
import ApexChartsRadialbar from '../../example-components/ApexCharts/ApexChartsRadialbar';
import ApexChartsRadar from '../../example-components/ApexCharts/ApexChartsRadar';
export default class ApexCharts extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Apex Charts"
          titleDescription="Wonderful animated charts built with ApexCharts components."
        />

        <Row>
          <Col xl="6">
            <ExampleWrapperSimple sectionHeading="Area">
              <ApexChartsArea />
            </ExampleWrapperSimple>
            <ExampleWrapperSimple sectionHeading="Column">
              <ApexChartsColumn />
            </ExampleWrapperSimple>
            <ExampleWrapperSimple sectionHeading="Line">
              <ApexChartsLine />
            </ExampleWrapperSimple>
            <ExampleWrapperSimple sectionHeading="Radar">
              <ApexChartsRadar />
            </ExampleWrapperSimple>
          </Col>
          <Col xl="6">
            <ExampleWrapperSimple sectionHeading="Bar">
              <ApexChartsBar />
            </ExampleWrapperSimple>
            <ExampleWrapperSimple sectionHeading="Heatmap">
              <ApexChartsHeatmap />
            </ExampleWrapperSimple>
            <ExampleWrapperSimple sectionHeading="Mixed">
              <ApexChartsMixed />
            </ExampleWrapperSimple>
            <ExampleWrapperSimple sectionHeading="Radial bar">
              <ApexChartsRadialbar />
            </ExampleWrapperSimple>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
