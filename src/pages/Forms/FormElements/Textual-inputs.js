import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';

const TextualInputs = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={6}>
                    <div>
                        <div className="mb-3">
                            <Label htmlFor="example-text-input" className="form-Label">Text</Label>
                            <Input className="form-control" type="text" defaultValue="Artisanal kale" id="example-text-input" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="example-search-input" className="form-Label">Search</Label>
                            <Input className="form-control" type="search" defaultValue="How do I shoot web" id="example-search-input" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="example-email-input" className="form-Label">Email</Label>
                            <Input className="form-control" type="email" defaultValue="bootstrap@example.com" id="example-email-input" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="example-url-input" className="form-Label">URL</Label>
                            <Input className="form-control" type="url" defaultValue="https://getbootstrap.com" id="example-url-input" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="example-tel-input" className="form-Label">Telephone</Label>
                            <Input className="form-control" type="tel" defaultValue="1-(555)-555-5555" id="example-tel-input" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="example-password-input" className="form-Label">Password</Label>
                            <Input className="form-control" type="password" defaultValue="hunter2" id="example-password-input" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="example-number-input" className="form-Label">Number</Label>
                            <Input className="form-control" type="number" defaultValue="42" id="example-number-input" />
                        </div>
                        <div>
                            <Label htmlFor="example-datetime-local-input" className="form-Label">Date and time</Label>
                            <Input className="form-control" type="datetime-local" defaultValue="2019-08-19T13:45:00" id="example-datetime-local-input" />
                        </div>
                    </div>
                </Col>

                <div className="col-lg-6">
                    <div className="mt-3 mt-lg-0">
                        <div className="mb-3">
                            <Label htmlFor="example-date-input" className="form-Label">Date</Label>
                            <Input className="form-control" type="date" defaultValue="2019-08-19" id="example-date-input" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="example-month-input" className="form-Label">Month</Label>
                            <Input className="form-control" type="month" defaultValue="2019-08" id="example-month-input" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="example-week-input" className="form-Label">Week</Label>
                            <Input className="form-control" type="week" defaultValue="2019-W33" id="example-week-input" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="example-time-input" className="form-Label">Time</Label>
                            <Input className="form-control" type="time" defaultValue="13:45:00" id="example-time-input" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="example-color-input" className="form-Label">Color picker</Label>
                            <Input type="color" className="form-control form-control-color mw-100" id="example-color-input" defaultValue="#5156be" title="Choose your color" />
                        </div>
                        <div className="mb-3">
                            <Label className="form-Label">Select</Label>
                            <select className="form-select">
                                <option>Select</option>
                                <option>Large select</option>
                                <option>Small select</option>
                            </select>
                        </div>

                        <div>
                            <Label htmlFor="exampleDataList" className="form-Label">Datalists</Label>
                            <Input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                            <datalist id="datalistOptions">
                                <option value="San Francisco" />
                                <option value="New York" />
                                <option value="Seattle" />
                                <option value="Los Angeles" />
                                <option value="Chicago" />
                            </datalist>
                        </div>
                    </div>
                </div>
            </Row>
        </React.Fragment>
    );
}

export default TextualInputs;