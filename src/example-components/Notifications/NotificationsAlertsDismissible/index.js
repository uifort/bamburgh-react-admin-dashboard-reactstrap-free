import React, { Fragment, useState } from 'react';

import { Alert } from 'reactstrap';

import { UncontrolledAlert } from 'reactstrap';

const LivePreviewExample = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <Fragment>
      <UncontrolledAlert color="primary">
        This is a primary alert with{' '}
        <a href="#" onClick={e => e.preventDefault()} className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </UncontrolledAlert>
      <UncontrolledAlert color="success">
        This is a success alert with{' '}
        <a href="#" onClick={e => e.preventDefault()} className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </UncontrolledAlert>
      <UncontrolledAlert color="danger">
        This is a danger alert with{' '}
        <a href="#" onClick={e => e.preventDefault()} className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </UncontrolledAlert>
      <UncontrolledAlert color="warning">
        This is a warning alert with{' '}
        <a href="#" onClick={e => e.preventDefault()} className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </UncontrolledAlert>
      <UncontrolledAlert color="info">
        This is a info alert with{' '}
        <a href="#" onClick={e => e.preventDefault()} className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </UncontrolledAlert>
      <UncontrolledAlert color="dark">
        This is a dark alert with{' '}
        <a href="#" onClick={e => e.preventDefault()} className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </UncontrolledAlert>

      <div className="divider my-4" />

      <UncontrolledAlert color="success">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </UncontrolledAlert>

      <div className="divider my-4" />

      <Alert color="info" isOpen={visible} toggle={onDismiss}>
        I am an alert and I can be dismissed!
      </Alert>
    </Fragment>
  );
};

export default LivePreviewExample;
