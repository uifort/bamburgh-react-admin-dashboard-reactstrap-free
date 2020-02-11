import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { UncontrolledTooltip, Button } from 'reactstrap';

import { connect } from 'react-redux';

class PageTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    let {
      pageTitleStyle,
      pageTitleBackground,
      pageTitleShadow,
      pageTitleBreadcrumb,
      pageTitleIconBox,
      pageTitleDescription
    } = this.props;

    return (
      <Fragment>
        <div className="app-page-title">
          <div>
            <div className="app-page-title--first">
              <div className="app-page-title--heading">
                <h1>{this.props.titleHeading}</h1>
                <div className="app-page-title--description">
                  {this.props.titleDescription}
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Button size="sm" color="primary" className="mx-3">
              <span className="btn-wrapper--label">View details</span>
            </Button>
            <Button size="sm" color="success" id="AddEntryTooltip20">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon
                  icon={['fas', 'plus']}
                  className="opacity-8 font-size-xs"
                />
              </span>
            </Button>
            <UncontrolledTooltip target="AddEntryTooltip20">
              Add new entry
            </UncontrolledTooltip>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  pageTitleStyle: state.ThemeOptions.pageTitleStyle,
  pageTitleBackground: state.ThemeOptions.pageTitleBackground,
  pageTitleShadow: state.ThemeOptions.pageTitleShadow,
  pageTitleBreadcrumb: state.ThemeOptions.pageTitleBreadcrumb,
  pageTitleIconBox: state.ThemeOptions.pageTitleIconBox,
  pageTitleDescription: state.ThemeOptions.pageTitleDescription
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
