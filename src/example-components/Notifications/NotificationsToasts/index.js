import React, { Fragment, Component } from 'react';

import { Row, Col } from 'reactstrap';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col md="6">
            <div className="bg-premium-dark rounded-sm p-5 mb-5">
              <Toast className="mx-auto">
                <ToastHeader icon="primary">Toastr title</ToastHeader>
                <ToastBody>
                  This is a toast with a primary icon — check it out!
                </ToastBody>
              </Toast>
            </div>
          </Col>
          <Col md="6">
            <div className="bg-asteroid rounded-sm p-5 mb-5">
              <Toast className="mx-auto">
                <ToastHeader icon="secondary">Toastr title</ToastHeader>
                <ToastBody>
                  This is a toast with a secondary icon — check it out!
                </ToastBody>
              </Toast>
            </div>
          </Col>
          <Col md="6">
            <div className="bg-night-sky rounded-sm p-5 mb-5">
              <Toast className="mx-auto">
                <ToastHeader icon="success">Toastr title</ToastHeader>
                <ToastBody>
                  This is a toast with a success icon — check it out!
                </ToastBody>
              </Toast>
            </div>
          </Col>
          <Col md="6">
            <div className="bg-royal rounded-sm p-5 mb-5">
              <Toast className="mx-auto">
                <ToastHeader icon="danger">Toastr title</ToastHeader>
                <ToastBody>
                  This is a toast with a danger icon — check it out!
                </ToastBody>
              </Toast>
            </div>
          </Col>
          <Col md="6">
            <div className="bg-nice-redora rounded-sm p-5 mb-5">
              <Toast className="mx-auto">
                <ToastHeader icon="warning">Toastr title</ToastHeader>
                <ToastBody>
                  This is a toast with a warning icon — check it out!
                </ToastBody>
              </Toast>
            </div>
          </Col>
          <Col md="6">
            <div className="bg-red-lights rounded-sm p-5 mb-5">
              <Toast className="mx-auto">
                <ToastHeader icon="info">Toastr title</ToastHeader>
                <ToastBody>
                  This is a toast with an info icon — check it out!
                </ToastBody>
              </Toast>
            </div>
          </Col>
          <Col md="6">
            <div className="bg-deep-sky rounded-sm p-5 mb-5">
              <Toast className="mx-auto">
                <ToastHeader icon="light">Toastr title</ToastHeader>
                <ToastBody>
                  This is a toast with a light icon — check it out!
                </ToastBody>
              </Toast>
            </div>
          </Col>
          <Col md="6">
            <div className="bg-arielle-smile rounded-sm p-5 mb-5">
              <Toast className="mx-auto">
                <ToastHeader icon="dark">Toastr title</ToastHeader>
                <ToastBody>
                  This is a toast with a dark icon — check it out!
                </ToastBody>
              </Toast>
            </div>
          </Col>
          <Col md="6">
            <div className="bg-plum-plate rounded-sm p-5 mb-5">
              <Toast className="mx-auto">
                <ToastHeader icon={<Spinner size="sm" />}>
                  Toastr title
                </ToastHeader>
                <ToastBody>
                  This is a toast with a custom icon — check it out!
                </ToastBody>
              </Toast>
            </div>
          </Col>
          <Col md="6">
            <div className="bg-love-kiss rounded-sm p-5 mb-5">
              <Toast className="show mx-auto">
                <ToastHeader
                  icon={
                    <img
                      alt="..."
                      className="rounded mr-2"
                      src={avatar2}
                      width="22"
                    />
                  }>
                  Bootstrap
                </ToastHeader>
                <ToastBody>See? Just like this.</ToastBody>
              </Toast>
            </div>
          </Col>
          <Col md="6">
            <div className="bg-premium-dark rounded-sm p-5 mb-5">
              <Toast className="show mx-auto">
                <ToastHeader
                  icon={
                    <img
                      alt="..."
                      className="rounded mr-2"
                      src={avatar2}
                      width="22"
                    />
                  }>
                  Bootstrap
                </ToastHeader>
                <ToastBody>Heads up, toasts will stack automatically</ToastBody>
              </Toast>
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
