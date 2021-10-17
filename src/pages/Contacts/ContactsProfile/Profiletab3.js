import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardTitle, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';

//import images
import img1 from "../../../assets/images/small/img-3.jpg";

const Profiletab3 = () => {
    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <CardTitle className="mb-0">Post</CardTitle>
                </CardHeader>
                <CardBody>
                    <div>
                        <Row className="justify-content-center">
                            <Col xl={8}>
                                <div className="mt-5">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h5 className="font-size-14 text-truncate"><Link to="#" className="text-dark">Project discussion with team</Link></h5>
                                            <p className="font-size-13 text-muted mb-0">24 Mar, 2020</p>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
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


                                    <div className="pt-3">
                                        <ul className="list-inline">
                                            <li className="list-inline-item me-3">
                                                <Link to="#" className="text-muted">
                                                    <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i> Development
                                                </Link>
                                            </li>
                                            <li className="list-inline-item me-3">
                                                <Link to="#" className="text-muted">
                                                    <i className="bx bx-comment-dots align-middle text-muted me-1"></i> 08 Comments
                                                </Link>
                                            </li>
                                        </ul>
                                        <p className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>

                                        <div>
                                            <Link to="/contacts-list" className="text-primary">Read more <i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-5" />

                                <div>
                                    <div className="d-flex align-items-start">
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h5 className="font-size-14 text-truncate"><Link to="#" className="text-dark">Beautiful Day with Friends</Link></h5>
                                            <p className="font-size-13 text-muted mb-0">10 Apr, 2020</p>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
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

                                    <div className="position-relative mt-3">
                                        <img src={img1} alt="" className="img-thumbnail" />
                                    </div>

                                    <div className="pt-3">
                                        <ul className="list-inline">
                                            <li className="list-inline-item me-3">
                                                <Link to="#" className="text-muted">
                                                    <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i> Project
                                                </Link>
                                            </li>
                                            <li className="list-inline-item me-3">
                                                <Link to="#" className="text-muted">
                                                    <i className="bx bx-comment-dots align-middle text-muted me-1"></i> 12 Comments
                                                </Link>
                                            </li>
                                        </ul>
                                        <p className="text-muted">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, aliquam quaerat voluptatem. Ut enim ad minima veniam, quis</p>

                                        <div>
                                            <Link to="/contacts-list" className="text-primary">Read more <i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-5" />

                                <div>
                                    <div className="d-flex align-items-start">
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h5 className="font-size-14 text-truncate"><Link to="#" className="text-dark">Drawing a sketch</Link></h5>
                                            <p className="font-size-13 text-muted mb-0">20 Mar, 2020</p>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
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

                                    <div className="pt-3">
                                        <ul className="list-inline">
                                            <li className="list-inline-item me-3">
                                                <Link to="#" className="text-muted">
                                                    <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i> Project
                                                </Link>
                                            </li>
                                            <li className="list-inline-item me-3">
                                                <Link to="#" className="text-muted">
                                                    <i className="bx bx-comment-dots align-middle text-muted me-1"></i> 12 Comments
                                                </Link>
                                            </li>
                                        </ul>
                                        <p className="text-muted">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, aliquam quaerat voluptatem. Ut enim ad minima veniam, quis</p>

                                        <div>
                                            <Link to="/contacts-list" className="text-primary">Read more <i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                        </Row>

                        <div className="row g-0 mt-4">
                            <div className="col-sm-6">
                                <div>
                                    <p className="mb-sm-0">Showing 1 to 10 of 57 entries</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="float-sm-end">
                                    <ul className="pagination mb-sm-0">
                                        <li className="page-item disabled">
                                            <Link to="#" className="page-link"><i className="mdi mdi-chevron-left"></i></Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#" className="page-link">1</Link>
                                        </li>
                                        <li className="page-item active">
                                            <Link to="#" className="page-link">2</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#" className="page-link">3</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#" className="page-link">4</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#" className="page-link">5</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#" className="page-link"><i className="mdi mdi-chevron-right"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

export default Profiletab3;