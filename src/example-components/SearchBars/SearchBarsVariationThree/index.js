import React, { Fragment, Component } from 'react';

import cx from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col, Input } from 'reactstrap';

export default class LivePreviewExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchStatus1: false,
      searchStatus2: false,
      searchStatus3: false,
      searchStatus4: false
    };
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col md="6">
            <div
              className={cx('search-wrapper search-wrapper--expandable mb-4', {
                'is-active': this.state.searchStatus1
              })}>
              <span className="icon-wrapper text-black">
                <FontAwesomeIcon icon={['fas', 'search']} />
              </span>
              <Input
                onFocus={() => this.setState({ searchStatus1: true })}
                onBlur={() => this.setState({ searchStatus1: false })}
                placeholder="Search terms..."
                type="search"
              />
            </div>
            <div
              className={cx('search-wrapper search-wrapper--expandable mb-4', {
                'is-active': this.state.searchStatus2
              })}>
              <span className="icon-wrapper text-black">
                <FontAwesomeIcon icon={['fas', 'search']} />
              </span>
              <Input
                onFocus={() => this.setState({ searchStatus2: true })}
                onBlur={() => this.setState({ searchStatus2: false })}
                className="rounded-pill"
                placeholder="Search terms..."
                type="search"
              />
            </div>
          </Col>
          <Col md="6">
            <div
              className={cx(
                'search-wrapper search-wrapper--expandable search-wrapper--alternate mb-4',
                { 'is-active': this.state.searchStatus3 }
              )}>
              <span className="icon-wrapper text-black">
                <FontAwesomeIcon icon={['fas', 'search']} />
              </span>
              <Input
                onFocus={() => this.setState({ searchStatus3: true })}
                onBlur={() => this.setState({ searchStatus3: false })}
                placeholder="Search terms..."
                type="search"
              />
            </div>
            <div
              className={cx(
                'search-wrapper search-wrapper--expandable search-wrapper--alternate mb-4',
                { 'is-active': this.state.searchStatus4 }
              )}>
              <span className="icon-wrapper text-black">
                <FontAwesomeIcon icon={['fas', 'search']} />
              </span>
              <Input
                onFocus={() => this.setState({ searchStatus4: true })}
                onBlur={() => this.setState({ searchStatus4: false })}
                className="rounded-pill"
                placeholder="Search terms..."
                type="search"
              />
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
