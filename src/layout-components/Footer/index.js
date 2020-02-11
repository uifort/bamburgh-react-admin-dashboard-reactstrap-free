import React, { Fragment, Component } from 'react';

import cx from 'classnames';

import { Nav, NavItem, NavLink } from 'reactstrap';

import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    let { footerShadow, footerFixed, footerBgTransparent } = this.props;

    return (
      <Fragment>
        <div
          className={cx('app-footer text-black-50', {
            'app-footer--shadow': footerShadow,
            'app-footer--opacity-bg': footerBgTransparent
          })}>
          <div className="app-footer--first">
            <Nav>
              <NavItem>
                <NavLink
                  href="https://uifort.com/template/bamburgh-react-admin-dashboard-reactstrap-free"
                  className="rounded-sm"
                  target="_blank">
                  Download now
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://uifort.com/template/bamburgh-react-admin-dashboard-reactstrap-pro"
                  className="rounded-sm"
                  target="_blank">
                  View PRO Version
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <div className="app-footer--second">
            <span>Bamburgh React Admin Dashboard with Reactstrap Free</span> ©
            2020 - crafted with <span className="text-danger px-1">❤</span> by{' '}
            <a href="https://uifort.com" target="_blank" title="UiFort.com">
              UiFort.com
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  footerFixed: state.ThemeOptions.footerFixed,
  footerShadow: state.ThemeOptions.footerShadow,
  footerBgTransparent: state.ThemeOptions.footerBgTransparent
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
