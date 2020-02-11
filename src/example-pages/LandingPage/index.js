import React, { Fragment, useState } from 'react';

import { Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import hero9 from '../../assets/images/hero-bg/hero-9.jpg';
import { Button, UncontrolledTooltip, Badge } from 'reactstrap';

const LandingPage = props => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-midnight-bloom min-vh-100">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-6"
            style={{ backgroundImage: 'url(' + hero9 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-skim-blue opacity-2" />
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
            <div className="container pb-5">
              <Row>
                <Col lg="10" className="px-0 mx-auto d-flex align-items-center">
                  <div className="text-center">
                    <Badge
                      pill
                      color="info"
                      className="px-4 text-uppercase h-auto py-1"
                      id="ProjVersion123">
                      FREE react admin dashboard template
                    </Badge>
                    <UncontrolledTooltip
                      placement="top"
                      target="ProjVersion123">
                      Version: 1.0.0
                    </UncontrolledTooltip>
                    <div className="px-4 px-sm-0 text-white mt-4">
                      <h1 className="display-2 mb-5 font-weight-bold">
                        Bamburgh React Admin Dashboard with Reactstrap Free
                      </h1>
                      <p className="font-size-xl text-white-50 mb-3">
                        This admin template is the perfect lite solution for
                        building React powered applications or presentation
                        websites.
                      </p>
                      <p className="text-white font-size-lg">
                        Check out the live preview to see all the available
                        components in action!
                      </p>
                      <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50" />
                      <div>
                        <Button
                          tag={Link}
                          to="/DashboardDefault"
                          size="lg"
                          color="success"
                          className="d-block d-sm-inline-block"
                          title="View Bamburgh React Admin Dashboard with Reactstrap Free Live Preview">
                          <span className="btn-wrapper--label">Live Demo</span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Button>
                        <Button
                          tag="a"
                          size="lg"
                          color="warning"
                          className="d-block d-sm-inline-block ml-0 mt-3 mt-sm-0 ml-sm-3"
                          href="https://uifort.com/template/bamburgh-react-admin-dashboard-reactstrap-free"
                          target="_blank"
                          title="Download Bamburgh React Admin Dashboard with Reactstrap Free">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'download']} />
                          </span>
                          <span className="btn-wrapper--label">
                            Download now
                          </span>
                        </Button>
                        <Button
                          tag="a"
                          href="https://uifort.com/template/bamburgh-react-admin-dashboard-reactstrap-pro"
                          target="_blank"
                          size="lg"
                          color="first"
                          className="d-block d-sm-inline-block ml-0 ml-sm-3 mt-3 mt-sm-0"
                          title="Learn more about Bamburgh React Admin Dashboard with Reactstrap Free version">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'external-link-alt']}
                            />
                          </span>
                          <span className="btn-wrapper--label">
                            PRO Version
                          </span>
                        </Button>
                      </div>
                      <small className="d-block pt-4">
                        For a comprehensive list of components &amp; commercial
                        licenses, we recommend the PRO version.
                      </small>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
