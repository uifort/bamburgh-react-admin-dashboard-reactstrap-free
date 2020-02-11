import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Button size="sm" color="primary" className="m-2">
          Button
        </Button>
        <Button color="primary" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'lightbulb']} />
          </span>
          <span className="btn-wrapper--label">Left icon</span>
        </Button>
        <Button size="lg" color="primary" className="m-2">
          <span className="btn-wrapper--label">Right icon</span>
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'keyboard']} />
          </span>
        </Button>
      </Fragment>
    );
  }
}
