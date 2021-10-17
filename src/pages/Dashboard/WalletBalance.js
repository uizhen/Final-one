import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

import WalletPieChart from "./WalletPieChart";

const WalletBalance = () => {
    return (
        <React.Fragment>
            <Col xl={5}>
                <Card className="card-h-100">
                    <CardBody>
                        <div className="d-flex flex-wrap align-items-center mb-4">
                            <h5 className="card-title me-2">Wallet Balance</h5>
                            <div className="ms-auto">
                                <div>
                                    <button type="button" className="btn btn-soft-secondary btn-sm">
                                        ALL
                                    </button>
                                    <button type="button" className="btn btn-soft-primary btn-sm">
                                        1M
                                    </button>
                                    <button type="button" className="btn btn-soft-secondary btn-sm">
                                        6M
                                    </button>
                                    <button type="button" className="btn btn-soft-secondary btn-sm active">
                                        1Y
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Row className="align-items-center">
                            <div className="col-sm">
                                <div id="wallet-balance" className="apex-charts">
                                    <WalletPieChart />
                                </div>
                            </div>
                            <div className="col-sm align-self-center">
                                <div className="mt-4 mt-sm-0">
                                    <div>
                                        <p className="mb-2"><i className="mdi mdi-circle align-middle font-size-10 me-2 text-success"></i> Bitcoin</p>
                                        <h6>0.4412 BTC = <span className="text-muted font-size-14 fw-normal">$ 4025.32</span></h6>
                                    </div>

                                    <div className="mt-4 pt-2">
                                        <p className="mb-2"><i className="mdi mdi-circle align-middle font-size-10 me-2 text-primary"></i> Ethereum</p>
                                        <h6>4.5701 ETH = <span className="text-muted font-size-14 fw-normal">$ 1123.64</span></h6>
                                    </div>

                                    <div className="mt-4 pt-2">
                                        <p className="mb-2"><i className="mdi mdi-circle align-middle font-size-10 me-2 text-info"></i> Litecoin</p>
                                        <h6>35.3811 LTC = <span className="text-muted font-size-14 fw-normal">$ 2263.09</span></h6>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default WalletBalance;