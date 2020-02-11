import React, { Fragment, useState } from 'react';

import cx from 'classnames';

import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const LivePreviewExample = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={cx({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={cx({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}>
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={cx({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3');
            }}>
            Messages
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="mb-5" activeTab={activeTab}>
        <TabPane tabId="1">
          <p className="mb-0 p-3">
            I am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine.
          </p>
        </TabPane>
        <TabPane tabId="2">
          <p className="mb-0 p-3">
            I am so happy, my dear friend, so absorbed in the exquisite sense of
            mere tranquil existence, that I neglect my talents.
          </p>
        </TabPane>
        <TabPane tabId="3">
          <p className="mb-0 p-3">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
        </TabPane>
      </TabContent>
      <Row>
        <Col xl="6">
          <Nav className="nav-line">
            <NavItem>
              <NavLink
                className={cx({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1');
                }}>
                Home
                <div className="divider" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={cx({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2');
                }}>
                Profile
                <div className="divider" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={cx({ active: activeTab === '3' })}
                onClick={() => {
                  toggle('3');
                }}>
                Messages
                <div className="divider" />
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="mb-5" activeTab={activeTab}>
            <TabPane tabId="1">
              <p className="mb-0 p-3">
                I am alone, and feel the charm of existence in this spot, which
                was created for the bliss of souls like mine.
              </p>
            </TabPane>
            <TabPane tabId="2">
              <p className="mb-0 p-3">
                I am so happy, my dear friend, so absorbed in the exquisite
                sense of mere tranquil existence, that I neglect my talents.
              </p>
            </TabPane>
            <TabPane tabId="3">
              <p className="mb-0 p-3">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart.
              </p>
            </TabPane>
          </TabContent>
        </Col>
        <Col xl="6">
          <div className="nav-line-alt">
            <Nav className="nav-line">
              <NavItem>
                <NavLink
                  className={cx({ active: activeTab === '1' })}
                  onClick={() => {
                    toggle('1');
                  }}>
                  Home
                  <div className="divider" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={cx({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}>
                  Profile
                  <div className="divider" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={cx({ active: activeTab === '3' })}
                  onClick={() => {
                    toggle('3');
                  }}>
                  Messages
                  <div className="divider" />
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <TabContent className="mb-5" activeTab={activeTab}>
            <TabPane tabId="1">
              <p className="mb-0 p-3">
                I am alone, and feel the charm of existence in this spot, which
                was created for the bliss of souls like mine.
              </p>
            </TabPane>
            <TabPane tabId="2">
              <p className="mb-0 p-3">
                I am so happy, my dear friend, so absorbed in the exquisite
                sense of mere tranquil existence, that I neglect my talents.
              </p>
            </TabPane>
            <TabPane tabId="3">
              <p className="mb-0 p-3">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart.
              </p>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Fragment>
  );
};

export default LivePreviewExample;
