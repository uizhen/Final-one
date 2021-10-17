import React from 'react';
import { Col, Form, Input, Label, Row } from 'reactstrap';

const Formlayouts = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={5}>
                    <div>
                        <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Form groups</h5>
                        <Form>
                            <div className="mb-3">
                                <Label className="form-label" htmlFor="formrow-firstname-input">First name</Label>
                                <Input type="text" className="form-control" id="formrow-firstname-input" />
                            </div>

                            <Row>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <Label className="form-label" htmlFor="formrow-email-input">Email</Label>
                                        <Input type="email" className="form-control" id="formrow-email-input" />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <Label className="form-label" htmlFor="formrow-password-input">Password</Label>
                                        <Input type="password" className="form-control" id="formrow-password-input" />
                                    </div>
                                </Col>
                            </Row>

                            <div className="form-group">

                                <div className="form-check">
                                    <Input type="checkbox" className="form-check-input" id="formrow-customCheck" />
                                    <Label className="form-check-label" htmlFor="formrow-customCheck">Check me out</Label>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button type="submit" className="btn btn-primary w-md">Submit</button>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col lg={6} className="ms-lg-auto">
                    <div className="mt-4 mt-lg-0">
                        <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Horizontal form</h5>

                        <Form>
                            <Row className="mb-4">
                                <Label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">First name</Label>
                                <Col sm={9}>
                                    <Input type="text" className="form-control" id="horizontal-firstname-input" />
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">Email</Label>
                                <Col sm={9}>
                                    <Input type="email" className="form-control" id="horizontal-email-input" />
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Password</Label>
                                <Col sm={9}>
                                    <Input type="password" className="form-control" id="horizontal-password-input" />
                                </Col>
                            </Row>

                            <Row className="justify-content-end">
                                <Col sm={9}>
                                    <div className="form-check mb-4">
                                        <Input type="checkbox" className="form-check-input" id="horizontal-customCheck" />
                                        <Label className="form-check-label" htmlFor="horizontal-customCheck">Remember me</Label>
                                    </div>

                                    <div>
                                        <button type="submit" className="btn btn-primary w-md">Submit</button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
            <div className="mt-4">
                <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Inline forms layout</h5>

                <form className="row gx-3 gy-2 align-items-center">
                    <Col sm={2}>
                        <Label className="visually-hidden" htmlFor="specificSizeInputName">Name</Label>
                        <Input type="text" className="form-control" id="specificSizeInputName" placeholder="Enter Name" />
                    </Col>
                    <Col sm={2}>
                        <Label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Username</Label>
                        <div className="input-group">
                            <div className="input-group-text">@</div>
                            <Input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Username" />
                        </div>
                    </Col>
                    <div className="col-auto">
                        <div className="form-check">
                            <Input className="form-check-input" type="checkbox" id="autoSizingCheck2" />
                            <Label className="form-check-label" htmlFor="autoSizingCheck2">
                                Remember me
                            </Label>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Formlayouts;