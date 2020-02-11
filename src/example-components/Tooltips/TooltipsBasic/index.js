import React, { Fragment, Component } from 'react';

import { UncontrolledTooltip, Button } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <div className="text-center">
          <Button
            outline
            color="primary"
            className="m-2"
            placement="top"
            title="Tooltip on top"
            id="TooltipExampleBasicTop">
            Tooltip on top
          </Button>
          <UncontrolledTooltip
            placement="top"
            container="body"
            target="TooltipExampleBasicTop">
            Tooltip on top
          </UncontrolledTooltip>

          <Button
            outline
            color="primary"
            className="m-2"
            placement="right"
            title="Tooltip on right"
            id="TooltipExampleBasicRight">
            Tooltip on right
          </Button>
          <UncontrolledTooltip
            placement="right"
            container="body"
            target="TooltipExampleBasicRight">
            Tooltip on right
          </UncontrolledTooltip>

          <Button
            outline
            color="primary"
            className="m-2"
            placement="auto"
            title="Tooltip auto"
            id="TooltipExampleBasicAuto">
            Tooltip auto
          </Button>
          <UncontrolledTooltip
            placement="auto"
            container="body"
            target="TooltipExampleBasicAuto">
            Tooltip auto
          </UncontrolledTooltip>

          <Button
            outline
            color="primary"
            className="m-2"
            placement="bottom"
            title="Tooltip on bottom"
            id="TooltipExampleBasicBottom">
            Tooltip on bottom
          </Button>
          <UncontrolledTooltip
            placement="bottom"
            container="body"
            target="TooltipExampleBasicBottom">
            Tooltip on bottom
          </UncontrolledTooltip>

          <Button
            outline
            color="primary"
            className="m-2"
            placement="left"
            title="Tooltip on left"
            id="TooltipExampleBasicLeft">
            Tooltip on left
          </Button>
          <UncontrolledTooltip
            placement="left"
            container="body"
            target="TooltipExampleBasicLeft">
            Tooltip on left
          </UncontrolledTooltip>
        </div>
      </Fragment>
    );
  }
}
