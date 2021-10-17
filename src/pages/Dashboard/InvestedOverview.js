import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, CardBody, Row } from "reactstrap";
import ApexRadial from './ApexRadial';

const InvestedOverview = () => {
    return (
        <React.Fragment>
            <Col xl={8}>
                <Card className="card-h-100">
                    <CardBody>
                        <div className="d-flex flex-wrap align-items-center mb-4">
                            <h5 className="card-title me-2">Invested Overview</h5>
                            <div className="ms-auto">
                                <select className="form-select form-select-sm">
                                    <option defaultValue="MAY">May</option>
                                    <option value="AP">April</option>
                                    <option value="MA">March</option>
                                    <option value="FE">February</option>
                                    <option value="JA">January</option>
                                    <option value="DE">December</option>
                                </select>
                            </div>
                        </div>

                        <Row className="align-items-center">
                            <div className="col-sm">
                                <div id="invested-overview" className="apex-charts">
                                    <ApexRadial />
                                </div>
                            </div>
                            <div className="col-sm align-self-center">
                                <div className="mt-4 mt-sm-0">
                                    <p className="mb-1">Invested Amount</p>
                                    <h4>$ 6134.39</h4>

                                    <p className="text-muted mb-4"> + 0.0012.23 ( 0.2 % ) <i className="mdi mdi-arrow-up ms-1 text-success"></i></p>

                                    <Row className="g-0">
                                        <Col xs={6}>
                                            <div>
                                                <p className="mb-2 text-muted text-uppercase font-size-11">Income</p>
                                                <h5 className="fw-medium">$ 2632.46</h5>
                                            </div>
                                        </Col>
                                        <Col xs={6}>
                                            <div>
                                                <p className="mb-2 text-muted text-uppercase font-size-11">Expenses</p>
                                                <h5 className="fw-medium">-$ 924.38</h5>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="mt-2">
                                        <Link to="/email-inbox" className="btn btn-primary btn-sm">View more <i className="mdi mdi-arrow-right ms-1"></i></Link>
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

export default InvestedOverview;