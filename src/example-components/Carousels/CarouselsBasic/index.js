import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col, Card, Button } from 'reactstrap';

import hero8 from '../../../assets/images/hero-bg/hero-8.jpg';

import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <div className="hero-wrapper bg-composed-wrapper rounded-lg bg-plum-plate">
          <div className="flex-grow-1 w-100 d-flex rounded-lg align-items-center">
            <div
              className="bg-composed-wrapper--image rounded-lg opacity-3"
              style={{ backgroundImage: 'url(' + hero8 + ')' }}
            />
            <div className="bg-composed-wrapper--bg bg-first rounded-lg opacity-3" />
            <div className="bg-composed-wrapper--content">
              <div className="container-fluid p-5">
                <Row>
                  <Col xl="7" className="d-flex align-items-center">
                    <div className="text-white text-center text-xl-left">
                      <h1 className="display-3 mb-3 font-weight-bold">
                        Bootstrap 4 Carousel
                      </h1>
                      <p className="font-size-lg d-block mb-5 text-white-50">
                        This is an example Bootstrap carousel integrated into
                        one of our hero sections!
                      </p>
                      <div>
                        <Button
                          tag="a"
                          color="success"
                          title="Dummy tooltip example"
                          href="#"
                          onClick={e => e.preventDefault()}>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['far', 'gem']} />
                          </span>
                        </Button>
                        <Button
                          tag="a"
                          color="secondary"
                          outline
                          className="ml-3"
                          title="View available downloads"
                          href="#"
                          onClick={e => e.preventDefault()}>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'download']} />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col xl="5" className="d-flex align-items-center">
                    <Card className="mt-5 mt-xl-0">
                      <div className="p-3">
                        <UncontrolledCarousel items={items} />
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
