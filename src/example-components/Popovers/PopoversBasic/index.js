import React, { Fragment, Component } from 'react';

import {
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Button
} from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <div className="text-center">
          <Button
            outline
            color="primary"
            className="m-2"
            container="body"
            id="PopoverExampleBasic1">
            Popover on top
          </Button>
          <UncontrolledPopover
            trigger="hover"
            placement="top"
            target="PopoverExampleBasic1">
            <PopoverHeader>Popover on top</PopoverHeader>
            <PopoverBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </PopoverBody>
          </UncontrolledPopover>

          <Button
            outline
            color="primary"
            className="m-2"
            id="PopoverExampleBasic2">
            Popover on right
          </Button>
          <UncontrolledPopover
            trigger="hover"
            placement="right"
            target="PopoverExampleBasic2">
            <PopoverHeader>Popover on right</PopoverHeader>
            <PopoverBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </PopoverBody>
          </UncontrolledPopover>

          <Button
            outline
            color="primary"
            className="m-2"
            id="PopoverExampleBasic3">
            Popover auto
          </Button>
          <UncontrolledPopover
            trigger="hover"
            placement="auto"
            target="PopoverExampleBasic3">
            <PopoverHeader>Popover auto</PopoverHeader>
            <PopoverBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </PopoverBody>
          </UncontrolledPopover>

          <Button
            outline
            color="primary"
            className="m-2"
            id="PopoverExampleBasic4">
            Popover on bottom
          </Button>
          <UncontrolledPopover
            trigger="hover"
            placement="bottom"
            target="PopoverExampleBasic4">
            <PopoverHeader>Popover on bottom</PopoverHeader>
            <PopoverBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </PopoverBody>
          </UncontrolledPopover>

          <Button
            outline
            color="primary"
            className="m-2"
            id="PopoverExampleBasic5">
            Popover on left
          </Button>
          <UncontrolledPopover
            trigger="hover"
            placement="left"
            target="PopoverExampleBasic5">
            <PopoverHeader>Popover on left</PopoverHeader>
            <PopoverBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </PopoverBody>
          </UncontrolledPopover>
        </div>
      </Fragment>
    );
  }
}
