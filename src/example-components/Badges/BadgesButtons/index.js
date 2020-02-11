import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Badge, UncontrolledTooltip, Button } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Button color="primary" className="m-2">
          <FontAwesomeIcon icon={['far', 'bell']} />
          <Badge color="warning" className="ml-3">
            <b>23</b> New
          </Badge>
        </Button>
        <Button color="success" id="TooltipExample1">
          <Badge color="second" className="mr-3">
            New
          </Badge>
          <span>
            <FontAwesomeIcon icon={['far', 'lightbulb']} />
          </span>
        </Button>
        <UncontrolledTooltip target="TooltipExample1" placement="top">
          Tooltip Example!
        </UncontrolledTooltip>
        <Button color="dark" className="m-2">
          <FontAwesomeIcon icon={['far', 'keyboard']} />
          <Badge color="second" className="ml-3">
            <b>65</b>
          </Badge>
        </Button>
        <Button color="second" className="m-2">
          <FontAwesomeIcon icon={['far', 'bell']} />
          <Badge color="success" className="ml-3">
            Info
          </Badge>
        </Button>
      </Fragment>
    );
  }
}
