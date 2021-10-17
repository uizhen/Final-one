import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

//SimpleBar
import SimpleBar from "simplebar-react"

const RecentActivity = () => {
    return (
        <React.Fragment>
            <Col xl={4}>
                <Card>
                    <CardHeader className="align-items-center d-flex">
                        <CardTitle className="mb-0 flex-grow-1">Recent Activity</CardTitle>
                        <div className="flex-shrink-0">
                            <select className="form-select form-select-sm mb-0 my-n1">
                                <option defaultValue="Today">Today</option>
                                <option value="Yesterday">Yesterday</option>
                                <option value="Week">Last Week</option>
                                <option value="Month">Last Month</option>
                            </select>
                        </div>
                    </CardHeader>

                    <CardBody className="px-0">
                        <SimpleBar className="px-3" style={{ maxHeight: "352px" }}>
                            <ul className="list-unstyled activity-wid mb-0">

                                <li className="activity-list activity-border">
                                    <div className="activity-icon avatar-md">
                                        <span className="avatar-title bg-soft-warning text-warning rounded-circle">
                                            <i className="bx bx-bitcoin font-size-24"></i>
                                        </span>
                                    </div>
                                    <div className="timeline-list-item">
                                        <div className="d-flex">
                                            <div className="flex-grow-1 overflow-hidden me-4">
                                                <h5 className="font-size-14 mb-1">24/05/2021, 18:24:56</h5>
                                                <p className="text-truncate text-muted font-size-13">0xb77ad0099e21d4fca87fa4ca92dda1a40af9e05d205e53f38bf026196fa2e431</p>
                                            </div>
                                            <div className="flex-shrink-0 text-end me-3">
                                                <h6 className="mb-1">+0.5 BTC</h6>
                                                <div className="font-size-13">$178.53</div>
                                            </div>

                                            <div className="flex-shrink-0 text-end">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle className="text-muted font-size-24" tag="a">
                                                        <i className="mdi mdi-dots-vertical"></i>
                                                    </DropdownToggle>

                                                    <DropdownMenu className="dropdown-menu-end">
                                                        <DropdownItem to="#">Action</DropdownItem>
                                                        <DropdownItem to="#">Another action</DropdownItem>
                                                        <DropdownItem to="#">Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem to="#">Separated link</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="activity-list activity-border">
                                    <div className="activity-icon avatar-md">
                                        <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                                            <i className="mdi mdi-ethereum font-size-24"></i>
                                        </span>
                                    </div>
                                    <div className="timeline-list-item">
                                        <div className="d-flex">
                                            <div className="flex-grow-1 overflow-hidden me-4">
                                                <h5 className="font-size-14 mb-1">24/05/2021, 18:24:56</h5>
                                                <p className="text-truncate text-muted font-size-13">0xb77ad0099e21d4fca87fa4ca92dda1a40af9e05d205e53f38bf026196fa2e431</p>
                                            </div>
                                            <div className="flex-shrink-0 text-end me-3">
                                                <h6 className="mb-1">-20.5 ETH</h6>
                                                <div className="font-size-13">$3541.45</div>
                                            </div>

                                            <div className="flex-shrink-0 text-end">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle className="text-muted font-size-24" tag="a">
                                                        <i className="mdi mdi-dots-vertical"></i>
                                                    </DropdownToggle>

                                                    <DropdownMenu className="dropdown-menu-end">
                                                        <DropdownItem to="#">Action</DropdownItem>
                                                        <DropdownItem to="#">Another action</DropdownItem>
                                                        <DropdownItem to="#">Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem to="#">Separated link</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="activity-list activity-border">
                                    <div className="activity-icon avatar-md">
                                        <span className="avatar-title bg-soft-warning text-warning rounded-circle">
                                            <i className="bx bx-bitcoin font-size-24"></i>
                                        </span>
                                    </div>
                                    <div className="timeline-list-item">
                                        <div className="d-flex">
                                            <div className="flex-grow-1 overflow-hidden me-4">
                                                <h5 className="font-size-14 mb-1">24/05/2021, 18:24:56</h5>
                                                <p className="text-truncate text-muted font-size-13">0xb77ad0099e21d4fca87fa4ca92dda1a40af9e05d205e53f38bf026196fa2e431</p>
                                            </div>
                                            <div className="flex-shrink-0 text-end me-3">
                                                <h6 className="mb-1">+0.5 BTC</h6>
                                                <div className="font-size-13">$5791.45</div>
                                            </div>

                                            <div className="flex-shrink-0 text-end">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle className="text-muted font-size-24" tag="a">
                                                        <i className="mdi mdi-dots-vertical"></i>
                                                    </DropdownToggle>

                                                    <DropdownMenu className="dropdown-menu-end">
                                                        <DropdownItem to="#">Action</DropdownItem>
                                                        <DropdownItem to="#">Another action</DropdownItem>
                                                        <DropdownItem to="#">Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem to="#">Separated link</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="activity-list activity-border">
                                    <div className="activity-icon avatar-md">
                                        <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                                            <i className="mdi mdi-litecoin font-size-24"></i>
                                        </span>
                                    </div>
                                    <div className="timeline-list-item">
                                        <div className="d-flex">
                                            <div className="flex-grow-1 overflow-hidden me-4">
                                                <h5 className="font-size-14 mb-1">24/05/2021, 18:24:56</h5>
                                                <p className="text-truncate text-muted font-size-13">0xb77ad0099e21d4fca87fa4ca92dda1a40af9e05d205e53f38bf026196fa2e431</p>
                                            </div>
                                            <div className="flex-shrink-0 text-end me-3">
                                                <h6 className="mb-1">-1.5 LTC</h6>
                                                <div className="font-size-13">$5791.45</div>
                                            </div>

                                            <div className="flex-shrink-0 text-end">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle className="text-muted font-size-24" tag="a">
                                                        <i className="mdi mdi-dots-vertical"></i>
                                                    </DropdownToggle>

                                                    <DropdownMenu className="dropdown-menu-end">
                                                        <DropdownItem to="#">Action</DropdownItem>
                                                        <DropdownItem to="#">Another action</DropdownItem>
                                                        <DropdownItem to="#">Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem to="#">Separated link</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                        </div>
                                    </div>
                                </li>


                                <li className="activity-list activity-border">
                                    <div className="activity-icon avatar-md">
                                        <span className="avatar-title bg-soft-warning text-warning rounded-circle">
                                            <i className="bx bx-bitcoin font-size-24"></i>
                                        </span>
                                    </div>
                                    <div className="timeline-list-item">
                                        <div className="d-flex">
                                            <div className="flex-grow-1 overflow-hidden me-4">
                                                <h5 className="font-size-14 mb-1">24/05/2021, 18:24:56</h5>
                                                <p className="text-truncate text-muted font-size-13">0xb77ad0099e21d4fca87fa4ca92dda1a40af9e05d205e53f38bf026196fa2e431</p>
                                            </div>
                                            <div className="flex-shrink-0 text-end me-3">
                                                <h6 className="mb-1">+0.5 BTC</h6>
                                                <div className="font-size-13">$5791.45</div>
                                            </div>

                                            <div className="flex-shrink-0 text-end">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle className="text-muted font-size-24" tag="a">
                                                        <i className="mdi mdi-dots-vertical"></i>
                                                    </DropdownToggle>

                                                    <DropdownMenu className="dropdown-menu-end">
                                                        <DropdownItem to="#">Action</DropdownItem>
                                                        <DropdownItem to="#">Another action</DropdownItem>
                                                        <DropdownItem to="#">Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem to="#">Separated link</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="activity-list">
                                    <div className="activity-icon avatar-md">
                                        <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                                            <i className="mdi mdi-litecoin font-size-24"></i>
                                        </span>
                                    </div>
                                    <div className="timeline-list-item">
                                        <div className="d-flex">
                                            <div className="flex-grow-1 overflow-hidden me-4">
                                                <h5 className="font-size-14 mb-1">24/05/2021, 18:24:56</h5>
                                                <p className="text-truncate text-muted font-size-13">0xb77ad0099e21d4fca87fa4ca92dda1a40af9e05d205e53f38bf026196fa2e431</p>
                                            </div>
                                            <div className="flex-shrink-0 text-end me-3">
                                                <h6 className="mb-1">+.55 LTC</h6>
                                                <div className="font-size-13">$91.45</div>
                                            </div>

                                            <div className="flex-shrink-0 text-end">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle className="text-muted font-size-24" tag="a">
                                                        <i className="mdi mdi-dots-vertical"></i>
                                                    </DropdownToggle>

                                                    <DropdownMenu className="dropdown-menu-end">
                                                        <DropdownItem to="#">Action</DropdownItem>
                                                        <DropdownItem to="#">Another action</DropdownItem>
                                                        <DropdownItem to="#">Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem to="#">Separated link</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </SimpleBar>
                    </CardBody>

                </Card>

            </Col>
        </React.Fragment>
    );
}

export default RecentActivity;