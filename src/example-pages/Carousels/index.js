import React, { Fragment, Component } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import CarouselsBasic from '../../example-components/Carousels/CarouselsBasic';
export default class Carousels extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Carousels"
          titleDescription="Create easy, simple to use and beautiful slideshows &amp; carousels with these components."
        />

        <ExampleWrapperSimple sectionHeading="Basic carousel">
          <CarouselsBasic />
        </ExampleWrapperSimple>
      </Fragment>
    );
  }
}
