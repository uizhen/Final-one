import React from 'react';
import MetaTags from 'react-meta-tags';
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

//import Components
import Checkboxes from './Checkboxes';
import Formlayouts from './Formlayouts';
import RangeInputs from './RangeInputs';
import SizingInput from './SizingInput';
import TextualInputs from './Textual-inputs';

const FormElements = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Basic Elements | Minia - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Forms" breadcrumbItem="Basic Elements" />

                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Textual inputs</h4>
                                    <p className="card-title-desc">Here are examples of <code>.form-control</code> applied to each
                                        textual HTML5 <code>&lt;input&gt;</code> <code>type</code>.</p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    {/* import TextualInputs */}
                                    <TextualInputs />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        {/* import SizingInput  */}
                        <SizingInput />
                        {/* import RangeInputs  */}
                        <RangeInputs />
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Form layouts</h4>
                                    <p className="card-title-desc">Form layout options : from inline, horizontal & custom grid implementations</p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    {/* import Formlayouts */}
                                    <Formlayouts />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    {/* import Checkbox */}
                    <Checkboxes />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default FormElements;