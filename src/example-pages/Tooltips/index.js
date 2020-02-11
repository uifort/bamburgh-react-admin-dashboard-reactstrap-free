import React, { Fragment, Component } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import TooltipsBasic from '../../example-components/Tooltips/TooltipsBasic';
export default class Tooltips extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Tooltips"
          titleDescription="The tooltip or infotip or a hint is a common graphical user interface element."
        />

        <ExampleWrapperSimple sectionHeading="Basic">
          <TooltipsBasic />
        </ExampleWrapperSimple>
      </Fragment>
    );
  }
}
