import React from 'react';
import { Card, CardBody, CardHeader, Col, Input, Label } from 'reactstrap';

const RangeInputs = () => {
    return (
        <React.Fragment>
            <Col lg={6}>
                <Card>
                    <CardHeader>
                        <h4 className="card-title">Range Inputs</h4>
                        <p className="card-title-desc">Create custom <code>&lt;input type="range"&gt;</code>
                            controls with <code>.form-range</code>.</p>
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3">
                            <Label htmlFor="customRange1" className="form-label">Example range</Label>
                            <Input type="range" className="form-range" id="customRange1" />
                        </div>

                        <div className="mb-4">
                            <h5 className="font-size-14 mb-1">Min and max</h5>
                            <p className="card-title-desc mb-2">Range inputs have implicit values for min and
                                max—0 and 100, respectively.</p>
                            <Input type="range" className="form-range" min="0" max="5" id="customRange2" />
                        </div>

                        <div>
                            <h5 className="font-size-14 mb-1">Steps</h5>
                            <p className="card-title-desc mb-2">By default, range inputs “snap” to integer
                                values. To change this, you can specify a <code>step</code> value.</p>
                            <Input type="range" className="form-range" min="0" max="5" id="customRange3" />
                        </div>

                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default RangeInputs;