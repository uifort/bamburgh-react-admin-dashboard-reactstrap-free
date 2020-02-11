import React, { Fragment, Component } from 'react';

import cx from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Input } from 'reactstrap';

export default class LivePreviewExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchStatus1: false,
      searchStatus2: false,
      searchStatus3: false,
      searchStatus4: false,
      searchStatus5: false,
      searchStatus6: false
    };
  }

  render() {
    return (
      <Fragment>
        <div
          className={cx('search-wrapper search-wrapper--grow mb-4', {
            'is-active': this.state.searchStatus1
          })}>
          <span className="icon-wrapper text-black">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </span>
          <Input
            type="search"
            onFocus={() => this.setState({ searchStatus1: true })}
            onBlur={() => this.setState({ searchStatus1: false })}
            placeholder="Search terms..."
          />
        </div>
        <div
          className={cx('search-wrapper search-wrapper--grow mb-4', {
            'is-active': this.state.searchStatus2
          })}>
          <span className="icon-wrapper text-black">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </span>
          <Input
            type="search"
            onFocus={() => this.setState({ searchStatus2: true })}
            onBlur={() => this.setState({ searchStatus2: false })}
            placeholder="Search terms..."
            className="rounded-pill"
          />
        </div>

        <div className="divider mb-4" />

        <div
          className={cx(
            'search-wrapper search-wrapper--alternate search-wrapper--grow mb-4',
            { 'is-active': this.state.searchStatus3 }
          )}>
          <span className="icon-wrapper text-black">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </span>
          <Input
            type="search"
            onFocus={() => this.setState({ searchStatus3: true })}
            onBlur={() => this.setState({ searchStatus3: false })}
            placeholder="Search terms..."
          />
        </div>
        <div
          className={cx(
            'search-wrapper search-wrapper--alternate search-wrapper--grow mb-4',
            { 'is-active': this.state.searchStatus4 }
          )}>
          <span className="icon-wrapper text-black">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </span>
          <Input
            type="search"
            onFocus={() => this.setState({ searchStatus4: true })}
            onBlur={() => this.setState({ searchStatus4: false })}
            placeholder="Search terms..."
            className="rounded-pill"
          />
        </div>

        <div className="divider mb-4" />

        <div
          className={cx('search-wrapper search-wrapper--alternate mb-4', {
            'is-active': this.state.searchStatus5
          })}>
          <span className="icon-wrapper text-black">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </span>
          <Input
            type="search"
            onFocus={() => this.setState({ searchStatus5: true })}
            onBlur={() => this.setState({ searchStatus5: false })}
            placeholder="Search terms..."
          />
        </div>
        <div
          className={cx('search-wrapper search-wrapper--alternate', {
            'is-active': this.state.searchStatus6
          })}>
          <span className="icon-wrapper text-black">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </span>
          <Input
            type="search"
            onFocus={() => this.setState({ searchStatus6: true })}
            onBlur={() => this.setState({ searchStatus6: false })}
            placeholder="Search terms..."
            className="rounded-pill"
          />
        </div>
      </Fragment>
    );
  }
}
