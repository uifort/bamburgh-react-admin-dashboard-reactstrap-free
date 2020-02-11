import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Row,
  Col,
  CardBody,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Button,
  Progress
} from 'reactstrap';

import Chart from 'react-apexcharts';

export default class LivePreviewExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart2Options: {
        chart: {
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '70%'
          }
        },
        stroke: {
          show: true,
          color: '#f4772e',
          curve: 'smooth',
          width: 2
        },
        fill: {
          color: '#f4772e',
          gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.3,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0,
            stops: [0, 100]
          }
        },
        colors: ['#f4772e'],
        legend: {
          show: false
        },
        labels: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        yaxis: {
          min: 0
        }
      },
      chart2Data: [
        {
          name: 'Sales',
          data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
        }
      ]
    };
  }
  render() {
    return (
      <Fragment>
        <Row>
          <Col xl="7">
            <Card className="card-box mb-5">
              <CardHeader>
                <div className="font-size-lg d-block text-truncate">
                  <span className="text-black-50 pr-2">#32</span> Global
                  competition
                </div>
                <div className="ml-auto d-flex align-items-center align-content-center">
                  <Button
                    tag="a"
                    href="#"
                    onClick={e => e.preventDefault()}
                    color="first"
                    className="font-size-lg ml-3 d-40 p-0 rounded-circle border-0"
                    id="ViewParticipantsTooltip1">
                    <FontAwesomeIcon icon={['far', 'building']} />
                  </Button>
                  <UncontrolledTooltip target="ViewParticipantsTooltip1">
                    View all participants
                  </UncontrolledTooltip>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="6" md="3">
                    <div className="text-center">
                      <span className="text-black-50 d-block">Users</span>
                      <b className="font-size-xxl">2,345</b>
                    </div>
                  </Col>
                  <Col lg="6" md="3">
                    <div className="text-center">
                      <span className="text-black-50 d-block">Revenue</span>
                      <b className="font-size-xxl">$9,693</b>
                    </div>
                  </Col>
                  <Col lg="12" md="6" className="align-box-row">
                    <div className="w-100 mt-3 mt-md-0">
                      <div className="mb-1">
                        <span className="text-black-50 pr-1">Progress:</span>
                        <span className="text-danger">-12</span>
                      </div>
                      <div className="progress-bar-sm progress-bar-animated-alt progress">
                        <div
                          aria-valuemax="100"
                          aria-valuemin="0"
                          aria-valuenow="43"
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: '43%' }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card className="card-box mb-5">
              <CardHeader>
                <div className="font-size-lg d-block text-truncate">
                  <span className="text-black-50 pr-2">#33</span> International
                  Event
                </div>
                <div className="ml-auto d-flex align-items-center align-content-center">
                  <Button
                    tag="a"
                    href="#"
                    onClick={e => e.preventDefault()}
                    color="first"
                    className="font-size-lg ml-3 d-40 p-0 rounded-circle border-0"
                    id="ViewParticipantsTooltip2">
                    <FontAwesomeIcon icon={['far', 'building']} />
                  </Button>
                  <UncontrolledTooltip target="ViewParticipantsTooltip2">
                    View all participants
                  </UncontrolledTooltip>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="6" md="3">
                    <div className="text-center">
                      <span className="text-black-50 d-block">Users</span>
                      <b className="font-size-xxl">2,345</b>
                    </div>
                  </Col>
                  <Col lg="6" md="3">
                    <div className="text-center">
                      <span className="text-black-50 d-block">Revenue</span>
                      <b className="font-size-xxl">$9,693</b>
                    </div>
                  </Col>
                  <Col lg="12" md="6" className="align-box-row">
                    <div className="w-100 mt-3 mt-md-0">
                      <div className="mb-1">
                        <span className="text-black-50 pr-1">Progress:</span>
                        <span className="text-danger">-12</span>
                      </div>
                      <div className="progress-bar-sm progress-bar-animated-alt progress">
                        <div
                          aria-valuemax="100"
                          aria-valuemin="0"
                          aria-valuenow="43"
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: '43%' }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card className="card-box mb-5">
              <ListGroup tag="div" flush>
                <ListGroupItem tag="div" className="p-0">
                  <div className="card-header bg-light">
                    <div className="font-size-lg d-block text-truncate">
                      <span className="text-black-50 pr-2">#34</span> Hackathon
                    </div>
                    <div className="ml-auto d-flex align-items-center align-content-center">
                      <Button
                        tag="a"
                        href="#"
                        onClick={e => e.preventDefault()}
                        color="first"
                        className="font-size-lg ml-3 d-40 p-0 rounded-circle border-0"
                        id="ViewParticipantsTooltip3">
                        <FontAwesomeIcon icon={['far', 'building']} />
                      </Button>
                      <UncontrolledTooltip target="ViewParticipantsTooltip3">
                        View all participants
                      </UncontrolledTooltip>
                    </div>
                  </div>
                  <CardBody>
                    <Row>
                      <Col lg="6" md="3">
                        <div className="text-center">
                          <span className="text-black-50 d-block">Users</span>
                          <b className="font-size-xxl">2,345</b>
                        </div>
                      </Col>
                      <Col lg="6" md="3">
                        <div className="text-center">
                          <span className="text-black-50 d-block">Revenue</span>
                          <b className="font-size-xxl">$9,693</b>
                        </div>
                      </Col>
                      <Col lg="12" md="6" className="align-box-row">
                        <div className="w-100 mt-3 mt-md-0">
                          <div className="mb-1">
                            <span className="text-black-50 pr-1">
                              Progress:
                            </span>
                            <span className="text-danger">-12</span>
                          </div>
                          <Progress
                            value={43}
                            className="progress-bar-sm progress-bar-animated-alt"
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </ListGroupItem>
                <ListGroupItem tag="div" className="p-0">
                  <div className="card-header bg-light">
                    <div className="font-size-lg d-block text-truncate">
                      <span className="text-black-50 pr-2">#33</span> Gaming
                      center
                    </div>
                    <div className="ml-auto d-flex align-items-center align-content-center">
                      <Button
                        tag="a"
                        href="#"
                        onClick={e => e.preventDefault()}
                        color="first"
                        className="font-size-lg ml-3 d-40 p-0 rounded-circle border-0"
                        id="ViewParticipantsTooltip4">
                        <FontAwesomeIcon icon={['far', 'building']} />
                      </Button>
                      <UncontrolledTooltip target="ViewParticipantsTooltip4">
                        View all participants
                      </UncontrolledTooltip>
                    </div>
                  </div>
                  <CardBody>
                    <Row>
                      <Col lg="6" md="3">
                        <div className="text-center">
                          <span className="text-black-50 d-block">Users</span>
                          <b className="font-size-xxl">1,466</b>
                        </div>
                      </Col>
                      <Col lg="6" md="3">
                        <div className="text-center">
                          <span className="text-black-50 d-block">Revenue</span>
                          <b className="font-size-xxl text-danger">$6,465</b>
                        </div>
                      </Col>
                      <Col lg="12" md="6" className="align-box-row">
                        <div className="w-100 mt-3 mt-md-0">
                          <div className="mb-1">
                            <span className="text-black-50">Progress:</span>
                            <span className="text-warning">-5</span>
                          </div>
                          <div className="progress-bar-sm progress-bar-animated-alt progress">
                            <div
                              aria-valuemax="100"
                              aria-valuemin="0"
                              aria-valuenow="43"
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: '43%' }}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col xl="5">
            <Card className="card-box mb-5">
              <div className="px-4 px-xl-5 pb-1">
                <div className="card-header d-block">
                  <span className="text-uppercase py-3 py-xl-4 text-black d-block text-center font-weight-bold font-size-lg">
                    Inventory
                  </span>
                </div>
                <CardBody className="p-0">
                  <div className="grid-menu grid-menu-2col">
                    <Row className="no-gutters">
                      <Col lg="6" className="p-3">
                        <div className="text-center">
                          <FontAwesomeIcon
                            icon={['fas', 'lemon']}
                            className="font-size-xxl text-warning my-3"
                          />
                          <span className="text-black-50 d-block">Users</span>
                          <b className="font-size-xxl">2,345</b>
                        </div>
                      </Col>
                      <Col lg="6" className="p-3">
                        <div className="text-center">
                          <FontAwesomeIcon
                            icon={['far', 'user']}
                            className="font-size-xxl text-success my-3"
                          />
                          <span className="text-black-50 d-block">Revenue</span>
                          <b className="font-size-xxl">$9,693</b>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
                <div className="card-header border-0 d-block">
                  <span className="text-uppercase pt-4 pb-2 text-black d-block text-center font-weight-bold font-size-lg">
                    Activity
                  </span>
                </div>
                <div>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <Progress
                        value="43"
                        color="success"
                        className="progress-bar-rounded">
                        {' '}
                        43%
                      </Progress>
                    </div>
                    <div className="line-height-sm text-center ml-4">
                      <b className="font-size-lg text-success">
                        <small className="text-black-50 pr-1">$</small>
                        1,754
                      </b>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <Progress
                        value="61"
                        color="info"
                        className="progress-bar-rounded">
                        61%
                      </Progress>
                    </div>
                    <div className="line-height-sm text-center ml-4">
                      <b className="font-size-lg text-info">
                        <small className="text-black-50 pr-1">$</small>
                        7,428
                      </b>
                    </div>
                  </div>
                </div>
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <Progress
                      value="22"
                      color="danger"
                      className="progress-bar-rounded">
                      22%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <b className="font-size-lg text-danger">
                      <small className="text-black-50">$</small>
                      5,358
                    </b>
                  </div>
                </div>

                <div className="card-header border-0 d-block">
                  <span className="text-uppercase pb-1 pt-1 text-black d-block text-center font-weight-bold font-size-lg">
                    Charts
                  </span>
                </div>
                <Chart
                  options={this.state.chart2Options}
                  series={this.state.chart2Data}
                  type="area"
                  height={150}
                />
                <div className="card-footer d-block text-center">
                  <Button
                    tag="a"
                    href="#"
                    onClick={e => e.preventDefault()}
                    size="sm"
                    color="success"
                    id="RefreshTooltip1">
                    <FontAwesomeIcon icon={['fas', 'cog']} spin />
                  </Button>
                  <UncontrolledTooltip target="RefreshTooltip1">
                    Refresh
                  </UncontrolledTooltip>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
