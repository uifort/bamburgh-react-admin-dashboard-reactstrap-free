import React, { Fragment, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Card,
  InputGroupText,
  FormGroup,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

const LivePreviewExample = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);
  const toggle4 = () => setModal4(!modal4);
  const toggle5 = () => setModal5(!modal5);

  return (
    <Fragment>
      <Button color="primary" className="m-2" onClick={toggle1}>
        Open example
      </Button>
      <Modal zIndex={2000} centered isOpen={modal1} toggle={toggle1}>
        <ModalHeader toggle={toggle1}>Example Modal</ModalHeader>
        <ModalBody>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle1}>
            Close
          </Button>{' '}
          <Button color="primary" className="ml-auto" onClick={toggle1}>
            Save changes
          </Button>
        </ModalFooter>
      </Modal>

      <Button color="primary" className="m-2" onClick={toggle2}>
        Inner scroll
      </Button>
      <Modal zIndex={2000} centered scrollable isOpen={modal2} toggle={toggle2}>
        <ModalHeader toggle={toggle2}>Inner scroll modal</ModalHeader>
        <ModalBody>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle2}>
            Close
          </Button>{' '}
          <Button color="primary" className="ml-auto" onClick={toggle2}>
            Save changes
          </Button>
        </ModalFooter>
      </Modal>

      <Button color="primary" className="m-2" onClick={toggle3}>
        Large modal
      </Button>
      <Modal zIndex={2000} centered size="lg" isOpen={modal3} toggle={toggle3}>
        <ModalHeader toggle={toggle3}>Large modal</ModalHeader>
        <ModalBody>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle3}>
            Close
          </Button>{' '}
          <Button color="primary" className="ml-auto" onClick={toggle3}>
            Save changes
          </Button>
        </ModalFooter>
      </Modal>

      <Button color="primary" className="m-2" onClick={toggle4}>
        Small modal
      </Button>
      <Modal zIndex={2000} centered size="sm" isOpen={modal4} toggle={toggle4}>
        <ModalHeader toggle={toggle4}>Small modal</ModalHeader>
        <ModalBody>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle4}>
            Close
          </Button>{' '}
          <Button color="primary" className="ml-auto" onClick={toggle4}>
            Save changes
          </Button>
        </ModalFooter>
      </Modal>

      <Button color="primary" className="m-2" onClick={toggle5}>
        Form modal
      </Button>
      <Modal zIndex={2000} centered isOpen={modal5} toggle={toggle5}>
        <div>
          <Card className="bg-secondary shadow-none border-0">
            <div className="card-header d-block bg-white pt-4 pb-5">
              <div className="text-muted text-center mb-3">
                <small>Sign in with</small>
              </div>
              <div className="text-center">
                <Button color="facebook" className="mr-2">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </span>
                  <span className="btn-wrapper--label">Facebook</span>
                </Button>
                <Button color="twitter" className="ml-2">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </span>
                  <span className="btn-wrapper--label">Twitter</span>
                </Button>
              </div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <form>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['far', 'envelope']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Email" type="email" />
                  </div>
                </div>
                <FormGroup>
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon={['fas', 'unlock-alt']} />
                      </InputGroupText>
                    </div>
                    <Input placeholder="Password" type="password" />
                  </div>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id="customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheckLogin">
                    <span>Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button color="second" className="mt-4">
                    Sign in
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </Modal>
    </Fragment>
  );
};

export default LivePreviewExample;
