import React from 'react';
import MetaTags from 'react-meta-tags';
import { Container, Row, Col, Card, FormGroup, CardBody, CardTitle, CardSubtitle, Label, Button } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import NormalValidation from './NormalValidation';
import TooltipsValidation from './TooltipsValidation';

const FormValidation = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Form Validation | Minia - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Forms" breadcrumbItem="Form Validation" />

                    <Row>
                        {/* import NormalValidation */}
                        <NormalValidation />
                        {/* import TooltipsValidation */}
                        <TooltipsValidation />
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardBody>
                                    <CardTitle>Validation type</CardTitle>
                                    <CardSubtitle className="mb-3">
                                        Parsley is a availity reactstrap validation. It helps you
                                        provide your users with feedback on their form submission
                                        before sending it to your server.
                                    </CardSubtitle>

                                    <AvForm>
                                        <div className="mb-3">
                                            <AvField
                                                name="username"
                                                label="Required  "
                                                placeholder="Type Something"
                                                type="text"
                                                errorMessage="Enter Name"
                                                validate={{ required: { value: true } }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <Label>Equal To</Label>
                                            <AvField
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                                errorMessage="Enter password"
                                                validate={{ required: { value: true } }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <AvField
                                                name="password1"
                                                type="password"
                                                placeholder="Re-type Password"
                                                errorMessage="Enter Re-password"
                                                validate={{
                                                    required: { value: true },
                                                    match: { value: "password" },
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <AvField
                                                name="email"
                                                label="E-Mail"
                                                placeholder="Enter Valid Email"
                                                type="email"
                                                errorMessage="Invalid Email"
                                                validate={{
                                                    required: { value: true },
                                                    email: { value: true },
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <AvField
                                                name="digits"
                                                label="Digits  "
                                                placeholder="Enter Only Digits"
                                                type="number"
                                                errorMessage="Enter Only Digits"
                                                validate={{
                                                    required: { value: true },
                                                    pattern: {
                                                        value: "^[0-9]+$",
                                                        errorMessage: "Only Digits",
                                                    },
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <AvField
                                                name="number"
                                                label="Number  "
                                                placeholder="Enter Only number"
                                                type="number"
                                                errorMessage="Enter Only Number"
                                                validate={{
                                                    required: { value: true },
                                                    pattern: {
                                                        value: "^[0-9]+$",
                                                        errorMessage: "Only Numbers",
                                                    },
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <AvField
                                                name="alphanumeric"
                                                label="Alphanumeric  "
                                                placeholder="Enter Only alphanumeric value"
                                                type="text"
                                                errorMessage="Enter Only Alphanumeric"
                                                validate={{
                                                    required: { value: true },
                                                    pattern: {
                                                        value: "^[0-9a-zA-Z]+$",
                                                        errorMessage: "Only Alphanumeric",
                                                    },
                                                }}
                                            />
                                        </div>
                                        <div className="d-flex flex-wrap gap-2">
                                            <Button type="submit" color="primary" className="">
                                                Submit
                                            </Button>{" "}
                                            <Button type="reset" color="secondary" className="">
                                                Cancel
                                            </Button>
                                        </div>
                                    </AvForm>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <CardBody>
                                    <CardTitle>Range validation</CardTitle>
                                    <CardSubtitle className="mb-3">
                                        Parsley is a availity reactstrap validation. It helps you
                                        provide your users with feedback on their form submission
                                        before sending it to your server.
                                    </CardSubtitle>

                                    <AvForm>
                                        <div className="mb-3">
                                            <AvField
                                                name="Min_Length"
                                                label="Min Length  "
                                                placeholder="Min 6 chars"
                                                type="number"
                                                errorMessage="Min 6 chars."
                                                validate={{
                                                    required: { value: true },
                                                    minLength: { value: 6, errorMessage: "Min 6 chars." },
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <AvField
                                                name="Max_Length"
                                                label="Max Length  "
                                                placeholder="Max 6 chars"
                                                type="number"
                                                errorMessage="Max 6 chars."
                                                validate={{
                                                    required: { value: true },
                                                    maxLength: { value: 6, errorMessage: "Max 6 chars." },
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <AvField
                                                name="Min_Value"
                                                label="Min Value  "
                                                placeholder="Min 6 Chars"
                                                min={6}
                                                type="number"
                                                errorMessage="Min Value 6"
                                                validate={{
                                                    required: { value: true },
                                                    min: { value: 6 },
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <AvField
                                                name="Max_Value"
                                                label="Max Value  "
                                                placeholder="max 5 Chars"
                                                max={6}
                                                type="number"
                                                errorMessage="Max Value 6"
                                                validate={{
                                                    required: { value: true },
                                                    max: { value: 6 },
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <AvField
                                                name="Range_Value"
                                                label="Range Length  "
                                                placeholder="Text between 5 - 10 chars length"
                                                type="number"
                                                errorMessage="range between 5 to 10"
                                                validate={{
                                                    required: { value: true },
                                                    minLength: { value: 5, errorMessage: "Min 6 chars." },
                                                    maxLength: { value: 10, errorMessage: "Max 10 chars." },
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <AvField
                                                name="Regular_Exp"
                                                label="Regular Exp  "
                                                placeholder="Hex. Color"
                                                type="number"
                                                errorMessage="Hex Value"
                                                validate={{
                                                    required: { value: true },
                                                    pattern: {
                                                        value: "^[#0-9]+$",
                                                        errorMessage: "Only Hex Value",
                                                    },
                                                }}
                                            />
                                        </div>
                                        <FormGroup className="mb-0">
                                            <div>
                                                <Button type="submit" color="primary" className="ms-1">
                                                    Submit
                                                </Button>{" "}
                                                <Button type="reset" color="secondary">
                                                    Cancel
                                                </Button>
                                            </div>
                                        </FormGroup>
                                    </AvForm>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default FormValidation;