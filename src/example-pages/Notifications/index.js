import React, { Fragment, Component } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import NotificationsToasts from '../../example-components/Notifications/NotificationsToasts';
import NotificationsAlertsBasic from '../../example-components/Notifications/NotificationsAlertsBasic';
import NotificationsAlertsDismissible from '../../example-components/Notifications/NotificationsAlertsDismissible';
export default class Notifications extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Notifications"
          titleDescription="Show beautiful, animated growl like notifications or alerts on your pages screens."
        />

        <ExampleWrapperSimple sectionHeading="Basic alerts">
          <NotificationsAlertsBasic />
        </ExampleWrapperSimple>

        <ExampleWrapperSimple sectionHeading="Alerts dismissible">
          <NotificationsAlertsDismissible />
        </ExampleWrapperSimple>

        <ExampleWrapperSimple sectionHeading="Toasts">
          <NotificationsToasts />
        </ExampleWrapperSimple>
      </Fragment>
    );
  }
}
