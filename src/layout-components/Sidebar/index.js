import React, {Fragment, useState, Component} from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';
import { ExampleWrapperSeamless } from '../../layout-components';
import { ExampleWrapperSimple } from '../../layout-components';

import {connect} from 'react-redux';

import {
    setSidebarToggleMobile
} from '../../reducers/ThemeOptions';

import {SidebarHeader, SidebarMenu, SidebarFooter} from '../../layout-components'

class Sidebar extends Component {

    toggleSidebarMobile = () => {
        let {sidebarToggleMobile, setSidebarToggleMobile} = this.props;
        setSidebarToggleMobile(!sidebarToggleMobile);
    }

    render() {
        let {
            sidebarShadow,
            sidebarStyle,
            sidebarFooter,
            sidebarToggleMobile
        } = this.props;

        return (
            <Fragment>
                <div className={cx(
                    "app-sidebar", sidebarStyle,
                    )}>
                    <SidebarHeader/>
                    <div className="app-sidebar--content">
                        <SidebarMenu/>
                    </div>
                </div>
                <div onClick={this.toggleSidebarMobile} className={cx("app-sidebar-overlay", {'is-active': sidebarToggleMobile})}/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    sidebarShadow: state.ThemeOptions.sidebarShadow,
    sidebarStyle: state.ThemeOptions.sidebarStyle,
    sidebarFooter: state.ThemeOptions.sidebarFooter,
    sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = dispatch => ({

    setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
