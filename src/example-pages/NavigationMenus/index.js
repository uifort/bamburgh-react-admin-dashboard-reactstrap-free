import React, { Fragment, Component } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import NavigationMenusHorizontal from '../../example-components/NavigationMenus/NavigationMenusHorizontal';
import NavigationMenusVerticalBasic from '../../example-components/NavigationMenus/NavigationMenusVerticalBasic';
export default class NavigationMenus extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Navigation menus"
          titleDescription="Navigation menus are one of the basic building blocks for any web or mobile app."
        />

        <ExampleWrapperSimple sectionHeading="Vertical menus">
          <NavigationMenusVerticalBasic />
        </ExampleWrapperSimple>

        <ExampleWrapperSimple sectionHeading="Horizontal menus">
          <NavigationMenusHorizontal />
        </ExampleWrapperSimple>
      </Fragment>
    );
  }
}
