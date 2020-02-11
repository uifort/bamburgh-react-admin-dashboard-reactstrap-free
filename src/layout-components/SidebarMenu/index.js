import React, { Fragment, Component } from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';

import { connect } from 'react-redux';
import RouterLink from '../ReactMetismenuRouterLink';

import MetisMenu from 'react-metismenu';

const sidebarMenuContent = [
  {
    label: 'Dashboards',
    icon: 'pe-7s-safe',
    content: [
      {
        label: 'Default',
        to: '/DashboardDefault'
      }
    ]
  },
  {
    label: 'Elements',
    icon: 'pe-7s-keypad',
    content: [
      {
        label: 'Buttons',
        to: '/Buttons'
      },
      {
        label: 'Dropdowns',
        to: '/Dropdowns'
      },
      {
        label: 'Navigation menus',
        to: '/NavigationMenus'
      },
      {
        label: 'Progress Bars',
        to: '/ProgressBars'
      },
      {
        label: 'Pagination',
        to: '/Pagination'
      },
      {
        label: 'Scrollable',
        to: '/Scrollable'
      },
      {
        label: 'Badges',
        to: '/Badges'
      },
      {
        label: 'Icons',
        to: '/Icons'
      },
      {
        label: 'Utilities & Helpers',
        to: '/UtilitiesHelpers'
      }
    ]
  },
  {
    label: 'Cards',
    icon: 'pe-7s-box2',
    content: [
      {
        label: 'Cards examples 3',
        to: '/Cards3'
      }
    ]
  },
  {
    label: 'List Groups',
    icon: 'pe-7s-id',
    to: '/ListGroups'
  },
  {
    label: 'Presentation Blocks',
    icon: 'pe-7s-box2',
    content: [
      {
        label: 'Landing page',
        to: '/LandingPage'
      }
    ]
  },
  {
    label: 'Widgets',
    icon: 'pe-7s-display2',
    content: [
      {
        label: 'Accordions',
        to: '/Accordions'
      },
      {
        label: 'Modal dialogs',
        to: '/Modals'
      },
      {
        label: 'Notifications',
        to: '/Notifications'
      },
      {
        label: 'Carousels',
        to: '/Carousels'
      },
      {
        label: 'Popovers',
        to: '/Popovers'
      },
      {
        label: 'Tooltips',
        to: '/Tooltips'
      },
      {
        label: 'Tabs',
        to: '/Tabs'
      }
    ]
  },
  {
    label: 'Regular Tables',
    icon: 'pe-7s-albums',
    content: [
      {
        label: 'Tables examples 1',
        to: '/RegularTables1'
      },
      {
        label: 'Tables examples 4',
        to: '/RegularTables4'
      }
    ]
  },
  {
    label: 'Forms Elements',
    icon: 'pe-7s-menu',
    content: [
      {
        label: 'Layout',
        to: '/FormsLayout'
      },
      {
        label: 'Controls',
        to: '/FormsControls'
      }
    ]
  },
  {
    label: 'Charts',
    icon: 'pe-7s-graph1',
    content: [
      {
        label: 'Apex Charts',
        to: '/ApexCharts'
      }
    ]
  },
  {
    label: 'Maps',
    icon: 'pe-7s-map-2',
    to: '/Maps'
  }
];

class SidebarMenu extends Component {
  render() {
    let { sidebarUserbox } = this.props;

    return (
      <Fragment>
        <PerfectScrollbar>
          <div className="sidebar-navigation">
            <div className="sidebar-header">
              <span>Navigation menu</span>
            </div>
            <MetisMenu
              content={sidebarMenuContent}
              LinkComponent={RouterLink}
              activeLinkFromLocation
              iconNamePrefix=""
              noBuiltInClassNames={true}
              classNameItemActive="active"
              classNameIcon="sidebar-icon"
              iconNameStateVisible="sidebar-icon-indicator"
              iconNameStateHidden="sidebar-icon-indicator"
              classNameItemHasVisibleChild="submenu-open"
              classNameItemHasActiveChild="active"
              classNameStateIcon="pe-7s-angle-down"
            />
          </div>
        </PerfectScrollbar>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  sidebarUserbox: state.ThemeOptions.sidebarUserbox
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
