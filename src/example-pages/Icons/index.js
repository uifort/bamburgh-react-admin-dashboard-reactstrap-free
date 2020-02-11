import React, { Fragment, Component } from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import IconsFontawesome from '../../example-components/Icons/IconsFontawesome';
import IconsSocicons from '../../example-components/Icons/IconsSocicons';
export default class Icons extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          titleHeading="Icons"
          titleDescription="Wide icons selection including from flag icons to FontAwesome and other icons libraries."
        />

        <Row>
          <Col xl="6">
            <div className="bg-premium-dark mb-5 rounded">
              <div className="pt-5 pb-4">
                <h4 className="heading-2 heading-2-demo pb-1 text-white">
                  FontAwesome
                </h4>
                <p className="mb-3 px-4">
                  Over 1500 pixel perfect icons available, each designed from
                  scratch, forged from years of experience.
                </p>
                <div className="px-5">
                  <IconsFontawesome />
                </div>
              </div>
            </div>
          </Col>

          <Col xl="6">
            <div className="bg-midnight-bloom mb-5 rounded">
              <div className="pt-5 pb-4">
                <h4 className="heading-2 heading-2-demo pb-1 text-white">
                  Socicons
                </h4>
                <p className="mb-3 px-4">
                  Over 290 icons from various companies and logos ready to be
                  used in your application.
                </p>
                <div className="px-5">
                  <IconsSocicons />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
