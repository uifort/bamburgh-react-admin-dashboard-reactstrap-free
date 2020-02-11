import React, {Fragment, useState, Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Table, Col, CardBody, Card, CardTitle, CardHeader, Collapse, UncontrolledPopover, Container, InputGroup, InputGroupAddon, InputGroupText, FormText, Form, CustomInput, Label, FormGroup, Input, Badge, ListGroup, ListGroupItem, PopoverHeader, PopoverBody, UncontrolledTooltip, TabContent, TabPane, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, Progress, DropdownToggle, DropdownMenu, Alert, DropdownItem } from 'reactstrap'
import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import people1 from '../../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';
import svgImage1 from '../../../assets/images/illustrations/business_plan.svg';
import svgImage2 from '../../../assets/images/illustrations/monitor.svg';
import svgImage3 from '../../../assets/images/illustrations/404.svg';
import svgImage4 from '../../../assets/images/illustrations/maps.svg';
import svgImage5 from '../../../assets/images/illustrations/experience_design.svg';
import svgImage6 from '../../../assets/images/illustrations/data_points.svg';
import svgImage7 from '../../../assets/images/illustrations/500.svg';
import svgImage8 from '../../../assets/images/illustrations/505.svg';
import svgImage9 from '../../../assets/images/illustrations/login.svg';
import svgImage10 from '../../../assets/images/illustrations/projections.svg';
import svgImage11 from '../../../assets/images/illustrations/tree_swing.svg';
import svgImage12 from '../../../assets/images/illustrations/process.svg';
import svgImage13 from '../../../assets/images/illustrations/businesswoman.svg';
import svgImage14 from '../../../assets/images/illustrations/powerful.svg';
import svgImage15 from '../../../assets/images/stock-logos/1.svg';
import svgImage16 from '../../../assets/images/stock-logos/2.svg';
import svgImage17 from '../../../assets/images/stock-logos/3.svg';
import svgImage18 from '../../../assets/images/stock-logos/4.svg';
import svgImage19 from '../../../assets/images/stock-logos/5.svg';
import svgImage20 from '../../../assets/images/stock-logos/6.svg';
import svgImage21 from '../../../assets/images/stock-logos/7.svg';
import svgImage22 from '../../../assets/images/stock-logos/8.svg';
import svgImage23 from '../../../assets/images/illustrations/modern_professional.svg';
import hero1 from '../../../assets/images/hero-bg/hero-1.jpg';
import hero2 from '../../../assets/images/hero-bg/hero-2.jpg';
import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';
import hero4 from '../../../assets/images/hero-bg/hero-4.jpg';
import hero5 from '../../../assets/images/hero-bg/hero-5.jpg';
import hero6 from '../../../assets/images/hero-bg/hero-6.jpg';
import hero7 from '../../../assets/images/hero-bg/hero-7.jpg';
import hero8 from '../../../assets/images/hero-bg/hero-8.jpg';
import hero9 from '../../../assets/images/hero-bg/hero-9.jpg';

import GoogleMapReact from 'google-map-react';


  const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default

    class LivePreviewExample extends Component {

        static defaultProps = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11
        };

        render() {
            return (
                <Fragment>
                    <div className="w-100" style={{height: '350px'}}>
                        <GoogleMapReact
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </Fragment>
            );
        }
    }
