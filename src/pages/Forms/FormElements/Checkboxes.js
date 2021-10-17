import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

const Checkboxes = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="card-title mb-4">Checkboxes</h4>

                            <Row>
                                <Col md={5}>

                                    <div>
                                        <h5 className="font-size-14 mb-4"><i
                                            className="mdi mdi-arrow-right text-primary me-1"></i> Form Checkboxes
                                        </h5>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" id="formCheck1" />
                                            <label className="form-check-label" htmlFor="formCheck1">
                                                Form Checkbox
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="formCheck2" defaultChecked />
                                            <label className="form-check-label" htmlFor="formCheck2">
                                                Form Checkbox checked
                                            </label>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6} className="ms-auto">

                                    <div className="mt-md-0">
                                        <h5 className="font-size-14 mb-4"><i
                                            className="mdi mdi-arrow-right text-primary me-1"></i> Form Checkboxes
                                            Right</h5>
                                        <div>
                                            <div className="form-check form-check-right mb-3">
                                                <input className="form-check-input" type="checkbox" id="formCheckRight1" />
                                                <label className="form-check-label" htmlFor="formCheckRight1">
                                                    Form Checkbox Right
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="form-check form-check-right">
                                                <input className="form-check-input" type="checkbox" id="formCheckRight2"
                                                    defaultChecked />
                                                <label className="form-check-label" htmlFor="formCheckRight2">
                                                    Form Checkbox Right checked
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="card-title mb-4">Radios</h4>

                            <Row>
                                <Col md={5}>
                                    <div>
                                        <h5 className="font-size-14 mb-4">Form Radios</h5>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="radio" name="formRadios"
                                                id="formRadios1" defaultChecked />
                                            <label className="form-check-label" htmlFor="formRadios1">
                                                Form Radio
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="formRadios"
                                                id="formRadios2" />
                                            <label className="form-check-label" htmlFor="formRadios2">
                                                Form Radio checked
                                            </label>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className="ms-auto">
                                    <div className="mt-lg-0">
                                        <h5 className="font-size-14 mb-4">Form Radios Right</h5>
                                        <div>
                                            <div className="form-check form-check-right mb-3">
                                                <input className="form-check-input" type="radio" name="formRadiosRight"
                                                    id="formRadiosRight1" defaultChecked />
                                                <label className="form-check-label" htmlFor="formRadiosRight1">
                                                    Form Radio Right
                                                </label>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="form-check form-check-right">
                                                <input className="form-check-input" type="radio" name="formRadiosRight"
                                                    id="formRadiosRight2" />
                                                <label className="form-check-label" htmlFor="formRadiosRight2">
                                                    Form Radio Right checked
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Card>
                        <CardHeader>
                            <h4 className="card-title">Switches</h4>
                            <p className="card-title-desc">A switch has the markup of a custom checkbox but uses the <code>.form-switch</code> class to render a toggle switch. Switches also support the <code>disabled</code> attribute.</p>
                        </CardHeader>
                        <CardBody>

                            <Row>

                                <Col md={6}>
                                    <div>
                                        <h5 className="font-size-14 mb-3">Switch examples</h5>


                                        <div className="form-check form-switch mb-3" dir="ltr">
                                            <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                                            <label className="form-check-label" htmlFor="customSwitch1">Toggle this switch element</label>
                                        </div>
                                        <div className="form-check form-switch" dir="ltr">
                                            <input type="checkbox" className="form-check-input" disabled id="customSwitch2" />
                                            <label className="form-check-label" htmlFor="customSwitch2">Disabled switch element</label>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="mt-4 mt-md-0">
                                        <h5 className="font-size-14 mb-3">Switch sizes</h5>

                                        <div className="form-check form-switch mb-3" dir="ltr">
                                            <input type="checkbox" className="form-check-input" id="customSwitchsizesm" defaultChecked />
                                            <label className="form-check-label" htmlFor="customSwitchsizesm">Small Size Switch</label>
                                        </div>

                                        <div className="form-check form-switch form-switch-md mb-3" dir="ltr">
                                            <input type="checkbox" className="form-check-input" id="customSwitchsizemd" />
                                            <label className="form-check-label" htmlFor="customSwitchsizemd">Medium Size Switch</label>
                                        </div>

                                        <div className="form-check form-switch form-switch-lg mb-3" dir="ltr">
                                            <input type="checkbox" className="form-check-input" id="customSwitchsizelg" defaultChecked />
                                            <label className="form-check-label" htmlFor="customSwitchsizelg">Large Size Switch</label>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Checkboxes;