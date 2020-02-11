import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Table,
  CardBody,
  Card,
  Badge,
  UncontrolledTooltip,
  Button,
  Progress
} from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Card className="card-box mb-5">
          <div className="card-header pr-2">
            <div className="card-header--title">Employees status</div>
            <div className="card-header--actions">
              <Button
                tag="a"
                href="#"
                onClick={e => e.preventDefault()}
                size="sm"
                color="link"
                className="text-primary"
                id="RefreshTooltip1">
                <FontAwesomeIcon icon={['fas', 'cog']} spin />
              </Button>
              <UncontrolledTooltip target="RefreshTooltip1">
                Refresh
              </UncontrolledTooltip>
            </div>
          </div>
          <CardBody>
            <div className="table-responsive">
              <Table hover borderless className="text-nowrap mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th className="text-left">Name</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Progress</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12</td>
                    <td>
                      <div>
                        <a
                          href="#"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </td>
                    <td className="text-center">
                      <Badge
                        color="neutral-warning"
                        className="text-warning px-4">
                        Pending
                      </Badge>
                    </td>
                    <td>
                      <Progress
                        value="55"
                        className="progress-bar-rounded"
                        color="info">
                        55%
                      </Progress>
                    </td>
                    <td className="text-center">
                      <Button
                        size="sm"
                        color="neutral-dark"
                        id="ViewDetailsTooltip6">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </Button>
                      <UncontrolledTooltip target="ViewDetailsTooltip6">
                        View details
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>
                      <div>
                        <a
                          href="#"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </td>
                    <td className="text-center">
                      <Badge
                        color="neutral-warning"
                        className="text-warning px-4">
                        Pending
                      </Badge>
                    </td>
                    <td>
                      <Progress
                        value="55"
                        className="progress-bar-rounded"
                        color="info">
                        55%
                      </Progress>
                    </td>
                    <td className="text-center">
                      <Button
                        size="sm"
                        color="neutral-dark"
                        id="ViewDetailsTooltip6">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </Button>
                      <UncontrolledTooltip target="ViewDetailsTooltip6">
                        View details
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>
                      <div>
                        <a
                          href="#"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Regan Norris
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Project Manager
                        </span>
                      </div>
                    </td>
                    <td className="text-center">
                      <Badge
                        color="neutral-danger"
                        className="text-danger px-4">
                        Failed
                      </Badge>
                    </td>
                    <td>
                      <Progress
                        value="67"
                        color="danger"
                        className="progress-bar-rounded">
                        {' '}
                        67%
                      </Progress>
                    </td>
                    <td className="text-center">
                      <Button
                        size="sm"
                        color="neutral-dark"
                        id="ViewDetailsTooltip6">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </Button>
                      <UncontrolledTooltip target="ViewDetailsTooltip6">
                        View details
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>
                      <div>
                        <a
                          href="#"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Beck Simpson
                        </a>
                        <span className="text-black-50 d-block">
                          Frontend Developer
                        </span>
                      </div>
                    </td>
                    <td className="text-center">
                      <Badge
                        color="neutral-success"
                        className="text-success px-4">
                        Completed
                      </Badge>
                    </td>
                    <td>
                      <Progress
                        value="39"
                        color="dark"
                        className="progress-bar-rounded">
                        {' '}
                        39%
                      </Progress>
                    </td>
                    <td className="text-center">
                      <Button
                        size="sm"
                        color="neutral-dark"
                        id="ViewDetailsTooltip6">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </Button>
                      <UncontrolledTooltip target="ViewDetailsTooltip6">
                        View details
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
          <div className="card-footer d-flex justify-content-between">
            <Button outline color="danger" size="sm">
              Delete
            </Button>
            <div>
              <Button size="sm" color="link" className="btn-link-primary">
                View all
              </Button>
              <Button size="sm" color="primary">
                Add new entry
              </Button>
            </div>
          </div>
        </Card>
      </Fragment>
    );
  }
}
