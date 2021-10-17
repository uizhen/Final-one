import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Col, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent, TabPane, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import avatar from "./1.png";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";

import classnames from "classnames"
import ProfileTab1 from './ProfileTab1';
import ProfileTab2 from './Profiletab2';
import ProfileTab3 from './Profiletab3';
import './style.css';

const ProfileTab = () => {
    const [activeTab, toggleTab] = useState("1");

    return (
        <React.Fragment>
            <Row>
                <Col xl={20} lg={10}>
                    <Card>
                        <CardBody className="cover">
                            <Row>
                                <div className="col-sm order-2 order-sm-1">
                                    <div className="d-flex align-items-start mt-3 mt-sm-0">
                                        <div className="flex-shrink-0">
                                            <div className="avatar-xl me-3">
                                                <img src={avatar} alt="" className="img-fluid rounded-circle d-block" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div>
                                                <h1 className="font-size-30 ">Сэлэнгэ аймаг /Test/</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-sm-auto order-1 order-sm-2">
                                    <div className="d-flex align-items-start justify-content-end gap-2">
                                        <div>
                                            <button type="button" className="btn btn-soft-light"><i className="me-1"></i> Message</button>
                                        </div>
                                        <div>
                                            <UncontrolledDropdown>
                                                <DropdownToggle className="btn btn-link font-size-16 shadow-none text-muted" tag="a">
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <li><DropdownItem to="#">Action</DropdownItem></li>
                                                    <li><DropdownItem to="#">Another action</DropdownItem></li>
                                                    <li><DropdownItem to="#">Something else here</DropdownItem></li>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>
                                    </div>
                                </div> */}
                            </Row>
{/* 
                            <Nav className="nav-tabs-custom card-header-tabs border-top mt-4">
                                <NavItem>
                                    <NavLink
                                        to="#"
                                        className={classnames({
                                            active: activeTab === "1",
                                        }, "px-3")}
                                        onClick={() => {
                                            toggleTab("1")
                                        }}>
                                        Overview</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        to="#"
                                        className={classnames({
                                            active: activeTab === "2",
                                        }, "px-3")}
                                        onClick={() => {
                                            toggleTab("2")
                                        }}
                                    >About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        to="#"
                                        className={classnames({
                                            active: activeTab === "3",
                                        }, "px-3")}
                                        onClick={() => {
                                            toggleTab("3")
                                        }}
                                    >Post</NavLink>
                                </NavItem>
                            </Nav> */}
                        </CardBody>
                    </Card>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <ProfileTab1 />
                        </TabPane>
                        <TabPane tabId="2">
                            <ProfileTab2 />
                        </TabPane>
                        <TabPane tabId="3">
                            <ProfileTab3 />
                        </TabPane>
                    </TabContent>
                </Col>
                {/* <Col xl={3} lg={4}>
                    <Card>
                        <CardBody>
                            <CardTitle className="mb-3">Skills</CardTitle>

                            <div className="d-flex flex-wrap gap-2 font-size-16">
                                <Link to="#" className="badge badge-soft-primary">Photoshop</Link>
                                <Link to="#" className="badge badge-soft-primary">illustrator</Link>
                                <Link to="#" className="badge badge-soft-primary">HTML</Link>
                                <Link to="#" className="badge badge-soft-primary">CSS</Link>
                                <Link to="#" className="badge badge-soft-primary">Javascript</Link>
                                <Link to="#" className="badge badge-soft-primary">Php</Link>
                                <Link to="#" className="badge badge-soft-primary">Python</Link>
                            </div>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle className="mb-3">Portfolio</CardTitle>

                            <div>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link to="#" className="py-2 d-block text-muted"><i className="mdi mdi-web text-primary me-1"></i> Website</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="py-2 d-block text-muted"><i className="mdi mdi-note-text-outline text-primary me-1"></i> Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle className="mb-3">Similar Profiles</CardTitle>

                            <div className="list-group list-group-flush">
                                <Link to="#" className="list-group-item list-group-item-action">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0 me-3">
                                            <img src={avatar1} alt="" className="img-thumbnail rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div>
                                                <h5 className="font-size-14 mb-1">James Nix</h5>
                                                <p className="font-size-13 text-muted mb-0">Full Stack Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="#" className="list-group-item list-group-item-action">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0 me-3">
                                            <img src={avatar3} alt="" className="img-thumbnail rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div>
                                                <h5 className="font-size-14 mb-1">Darlene Smith</h5>
                                                <p className="font-size-13 text-muted mb-0">UI/UX Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="#" className="list-group-item list-group-item-action">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0 me-3">
                                            <div className="avatar-title bg-soft-light text-light rounded-circle font-size-22">
                                                <i className="bx bxs-user-circle"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div>
                                                <h5 className="font-size-14 mb-1">William Swift</h5>
                                                <p className="font-size-13 text-muted mb-0">Backend Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </CardBody>
                    </Card>
                </Col> */}
            </Row>
        </React.Fragment>
    );
}

export default ProfileTab;