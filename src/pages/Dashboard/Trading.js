import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Col, CardHeader, CardBody } from 'reactstrap';
import classnames from 'classnames';

const Trading = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <React.Fragment>
            <Col xl={4}>
                <Card>
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Trading</h4>
                        <div className="flex-shrink-0">
                            <Nav className="nav-tabs-custom card-header-tabs" role="tablist">
                                <NavItem>
                                    <NavLink
                                        to="#"
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >Buy</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        to="#"
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >Sell</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </CardHeader>

                    <CardBody>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <div className="float-end ms-2">
                                    <h5 className="font-size-14"><i className="bx bx-wallet text-primary font-size-16 align-middle me-1"></i> <a href="#!" className="text-reset text-decoration-underline">$4335.23</a></h5>
                                </div>
                                <h5 className="font-size-14 mb-4">Buy Coins</h5>
                                <div>
                                    <div className="form-group mb-3">
                                        <label>Payment method :</label>
                                        <select className="form-select">
                                            <option>Direct Bank Payment</option>
                                            <option>Credit / Debit Card</option>
                                            <option>Paypal</option>
                                            <option>Payoneer</option>
                                            <option>Stripe</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label>Add Amount :</label>
                                        <div className="input-group mb-3">
                                            <label className="input-group-text">Amount</label>
                                            <select className="form-select" style={{ maxWidth: "90px" }}>
                                                <option defaultValue="BT">BTC</option>
                                                <option value="ET">ETH</option>
                                                <option value="LT">LTC</option>
                                            </select>
                                            <input type="text" className="form-control" placeholder="0.00121255" />
                                        </div>

                                        <div className="input-group mb-3">
                                            <label className="input-group-text">Price</label>
                                            <input type="text" className="form-control" placeholder="$58,245" />
                                            <label className="input-group-text">$</label>
                                        </div>

                                        <div className="input-group mb-3">
                                            <label className="input-group-text">Total</label>
                                            <input type="text" className="form-control" placeholder="$36,854.25" />
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <button type="button" className="btn btn-success w-md">Buy Coin</button>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="2">
                                <div className="float-end ms-2">
                                    <h5 className="font-size-14"><i className="bx bx-wallet text-primary font-size-16 align-middle me-1"></i> <a href="#!" className="text-reset text-decoration-underline">$4235.23</a></h5>
                                </div>
                                <h5 className="font-size-14 mb-4">Sell Coins</h5>

                                <div>

                                    <div className="form-group mb-3">
                                        <label>Wallet ID :</label>
                                        <input type="email" className="form-control" placeholder="1cvb254ugxvfcd280ki" />
                                    </div>

                                    <div>
                                        <label>Add Amount :</label>
                                        <div className="input-group mb-3">
                                            <label className="input-group-text">Amount</label>

                                            <select className="form-select" style={{ maxWidth: "90px" }}>
                                                <option defaultValue="BT">BTC</option>
                                                <option value="ET">ETH</option>
                                                <option value="LT">LTC</option>
                                            </select>
                                            <input type="text" className="form-control" placeholder="0.00121255" />
                                        </div>

                                        <div className="input-group mb-3">

                                            <label className="input-group-text">Price</label>

                                            <input type="text" className="form-control" placeholder="$23,754.25" />

                                            <label className="input-group-text">$</label>
                                        </div>

                                        <div className="input-group mb-3">
                                            <label className="input-group-text">Total</label>
                                            <input type="text" className="form-control" placeholder="$6,852.41" />
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <button type="button" className="btn btn-danger w-md">Sell Coin</button>
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default Trading;