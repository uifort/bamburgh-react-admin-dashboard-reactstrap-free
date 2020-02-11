import React, { Fragment, Component } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import ModalsBasic from '../../example-components/Modals/ModalsBasic';
export default class Modals extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Modal dialogs"
          titleDescription="Wide selection of modal dialogs styles and animations available."
        />

        <ExampleWrapperSimple sectionHeading="Basic">
          <ModalsBasic />
        </ExampleWrapperSimple>
      </Fragment>
    );
  }
}
