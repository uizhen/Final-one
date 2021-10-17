import React from 'react';
import { Card, CardBody, CardHeader, Col, Form, Input, Label } from 'reactstrap';

const SizingInput = () => {
    return (
        <React.Fragment>
            <Col lg={6}>
                <Card>
                    <CardHeader>
                        <h4 className="card-title">Sizing</h4>
                        <p className="card-title-desc">Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.</p>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <div className="mb-4">
                                <Label className="form-label" htmlFor="default-input">Default input</Label>
                                <Input className="form-control" type="text" id="default-input" placeholder="Default input" />
                            </div>
                            <div className="mb-4">
                                <Label className="form-label" htmlFor="form-sm-input">Form Small input</Label>
                                <Input className="form-control form-control-sm" type="text" id="form-sm-input" placeholder=".form-control-sm" />
                            </div>
                            <div>
                                <Label className="form-label" htmlFor="form-lg-input">Form Large input</Label>
                                <Input className="form-control form-control-lg" type="text" id="form-lg-input" placeholder=".form-control-lg" />
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default SizingInput;