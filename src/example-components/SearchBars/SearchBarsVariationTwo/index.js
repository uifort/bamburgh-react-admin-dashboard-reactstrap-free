import React, { Fragment, Component } from 'react';

import cx from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class LivePreviewExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchStatus1: false,
      searchStatus2: false
    };
  }

  render() {
    return (
      <Fragment>
        <div
          className={cx('search-wrapper mb-4', {
            'is-active': this.state.searchStatus1
          })}>
          <div className="search-options">
            <div>
              <input
                name="type"
                type="radio"
                value="type-audio"
                id="type-audio"
              />
              <label htmlFor="type-audio">
                <FontAwesomeIcon
                  icon={['far', 'file-audio']}
                  className="font-size-lg"
                />
                <span>Audio</span>
              </label>
            </div>
            <div>
              <input
                name="type"
                type="radio"
                value="type-video"
                id="type-video"
              />
              <label htmlFor="type-video">
                <FontAwesomeIcon
                  icon={['fas', 'film']}
                  className="font-size-lg"
                />
                <span>Videos</span>
              </label>
            </div>
            <div>
              <input
                name="type"
                type="radio"
                value="type-images"
                id="type-images"
              />
              <label htmlFor="type-images">
                <FontAwesomeIcon
                  icon={['far', 'images']}
                  className="font-size-lg"
                />
                <span>Images</span>
              </label>
            </div>
          </div>
          <span className="icon-wrapper text-black">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </span>
          <input
            type="search"
            onFocus={() => this.setState({ searchStatus1: true })}
            onBlur={() => this.setState({ searchStatus1: false })}
            placeholder="Search terms..."
            className="form-control"
          />
        </div>

        <div
          className={cx('search-wrapper mb-4', {
            'is-active': this.state.searchStatus2
          })}>
          <div className="search-options">
            <div>
              <input
                name="type"
                type="radio"
                value="type-audio2"
                id="type-audio2"
              />
              <label htmlFor="type-audio2">
                <FontAwesomeIcon
                  icon={['far', 'file-audio']}
                  className="font-size-lg"
                />
                <span>Audio</span>
              </label>
            </div>
            <div>
              <input
                name="type"
                type="radio"
                value="type-video2"
                id="type-video2"
              />
              <label htmlFor="type-video2">
                <FontAwesomeIcon
                  icon={['fas', 'film']}
                  className="font-size-lg"
                />
                <span>Videos</span>
              </label>
            </div>
            <div>
              <input
                name="type"
                type="radio"
                value="type-images2"
                id="type-images2"
              />
              <label htmlFor="type-images2">
                <FontAwesomeIcon
                  icon={['far', 'images']}
                  className="font-size-lg"
                />
                <span>Images</span>
              </label>
            </div>
          </div>
          <span className="icon-wrapper text-black">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </span>
          <input
            type="search"
            onFocus={() => this.setState({ searchStatus2: true })}
            onBlur={() => this.setState({ searchStatus2: false })}
            placeholder="Search terms..."
            className="form-control rounded-pill"
          />
        </div>
      </Fragment>
    );
  }
}
