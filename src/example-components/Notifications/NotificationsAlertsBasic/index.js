import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Alert } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Alert color="success">
          <div className="d-flex align-items-center align-content-center">
            <span className="font-size-lg d-block d-40 mr-3 text-center bg-white-50 rounded-sm">
              <FontAwesomeIcon icon={['far', 'object-group']} />
            </span>
            <span>
              <strong className="d-block">Success!</strong> This is a success
              alert—check it out!
            </span>
          </div>
        </Alert>
        <Alert color="info">
          <div className="d-flex align-items-center align-content-center">
            <span className="font-size-lg d-block d-40 mr-3 text-center bg-white-50 rounded-sm">
              <FontAwesomeIcon icon={['far', 'building']} />
            </span>
            <span>
              <strong className="d-block">Info!</strong> This is an info
              alert—check it out!
            </span>
          </div>
        </Alert>
        <Alert color="warning">
          <div className="d-flex align-items-center align-content-center">
            <span className="font-size-lg d-block d-40 mr-3 text-center bg-white-50 rounded-sm">
              <FontAwesomeIcon icon={['far', 'question-circle']} />
            </span>
            <span>
              <strong className="d-block">Warning!</strong> This is a warning
              alert—check it out!
            </span>
          </div>
        </Alert>
        <Alert color="danger">
          <div className="d-flex align-items-center align-content-center">
            <span className="font-size-lg d-block d-40 mr-3 text-center bg-white-50 rounded-sm">
              <FontAwesomeIcon icon={['far', 'keyboard']} />
            </span>
            <span>
              <strong className="d-block">Danger!</strong> This is an error
              alert—check it out!
            </span>
          </div>
        </Alert>
      </Fragment>
    );
  }
}
