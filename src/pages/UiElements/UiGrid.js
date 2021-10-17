import React from 'react';
import MetaTags from 'react-meta-tags';
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiGrid = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Grid | Minia - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Components" breadcrumbItem="Grid" />
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Grid Options</h4>
                                    <p className="card-title-desc">See how aspects of the Bootstrap grid
                                        system work across multiple devices with a handy table.</p>
                                </CardHeader>

                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col" className="text-center">
                                                        xs<br />
                                                        <span className="fw-normal">&lt;576px</span>
                                                    </th>
                                                    <th scope="col" className="text-center">
                                                        sm<br />
                                                        <span className="fw-normal">≥576px</span>
                                                    </th>
                                                    <th scope="col" className="text-center">
                                                        md<br />
                                                        <span className="fw-normal">≥768px</span>
                                                    </th>
                                                    <th scope="col" className="text-center">
                                                        lg<br />
                                                        <span className="fw-normal">≥992px</span>
                                                    </th>
                                                    <th scope="col" className="text-center">
                                                        xl<br />
                                                        <span className="fw-normal">≥1200px</span>
                                                    </th>
                                                    <th scope="col" className="text-center">
                                                        xxl<br />
                                                        <span className="fw-normal">≥1400px</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Grid behavior</th>
                                                    <td>Horizontal at all times</td>
                                                    <td colSpan="5">Collapsed to start, horizontal above breakpoints</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Max container width</th>
                                                    <td>None (auto)</td>
                                                    <td>540px</td>
                                                    <td>720px</td>
                                                    <td>960px</td>
                                                    <td>1140px</td>
                                                    <td>1320px</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Class prefix</th>
                                                    <td><code>.col-</code></td>
                                                    <td><code>.col-sm-</code></td>
                                                    <td><code>.col-md-</code></td>
                                                    <td><code>.col-lg-</code></td>
                                                    <td><code>.col-xl-</code></td>
                                                    <td><code>.col-xxl-</code></td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row"># of columns</th>
                                                    <td colSpan="6">12</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Gutter width</th>
                                                    <td colSpan="6">24px (12px on each side of a column)</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Custom gutters</th>
                                                    <td colSpan="6">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Nestable</th>
                                                    <td colSpan="6">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Offsets</th>
                                                    <td colSpan="6">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Column ordering</th>
                                                    <td colSpan="6">Yes</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Grid Example</h4>
                                    <p className="card-title-desc">Use flexbox alignment utilities to vertically and horizontally align columns</p>
                                </CardHeader>

                                <CardBody>
                                    <div className="grid-structure">
                                        <Row>
                                            <div className="col-lg-12">
                                                <div className="grid-container">
                                                    <code>col-lg-12</code>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-lg-11">
                                                <div className="grid-container">
                                                    <code>col-lg-11</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-1">
                                                <div className="grid-container">
                                                    <code>col-lg-1</code>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-lg-10">
                                                <div className="grid-container">
                                                    <code>col-lg-10</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="grid-container">
                                                    <code>col-lg-2</code>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-lg-9">
                                                <div className="grid-container">
                                                    <code>col-lg-9</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="grid-container">
                                                    <code>col-lg-3</code>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-lg-8">
                                                <div className="grid-container">
                                                    <code>col-lg-8</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="grid-container">
                                                    <code>col-lg-4</code>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-lg-7">
                                                <div className="grid-container">
                                                    <code>col-lg-7</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="grid-container">
                                                    <code>col-lg-5</code>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-lg-6">
                                                <div className="grid-container">
                                                    <code>col-lg-6</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="grid-container">
                                                    <code>col-lg-6</code>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-lg-5">
                                                <div className="grid-container">
                                                    <code>col-lg-5</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="grid-container">
                                                    <code>col-lg-7</code>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-lg-4">
                                                <div className="grid-container">
                                                    <code>col-lg-4</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="grid-container">
                                                    <code>col-lg-8</code>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-lg-3">
                                                <div className="grid-container">
                                                    <code>col-lg-3</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="grid-container">
                                                    <code>col-lg-9</code>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-lg-2">
                                                <div className="grid-container">
                                                    <code>col-lg-2</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="grid-container">
                                                    <code>col-lg-10</code>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-lg-1">
                                                <div className="grid-container">
                                                    <code>col-lg-1</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-11">
                                                <div className="grid-container">
                                                    <code>col-lg-11</code>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-lg-2">
                                                <div className="grid-container">
                                                    <code>col-lg-2</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="grid-container">
                                                    <code>col-lg-3</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="grid-container">
                                                    <code>col-lg-4</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="grid-container">
                                                    <code>col-lg-2</code>
                                                </div>
                                            </div>
                                            <div className="col-lg-1">
                                                <div className="grid-container">
                                                    <code>col-lg-1</code>
                                                </div>
                                            </div>
                                        </Row>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <div className="col-lg-12">
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Alignment</h4>
                                    <p className="card-title-desc">Use flexbox alignment utilities to vertically and horizontally align columns</p>
                                </CardHeader>

                                <CardBody>
                                    <CardBody>
                                        <h5 className="font-size-13 mb-3">Vertical alignment (align-items-start)</h5>
                                        <div className="bg-soft-light p-3 text-center">
                                            <Row className="align-items-start" style={{ minHeight: '6rem' }}>
                                                <Col sm={4}>
                                                    <div className="grid-example">
                                                        <code>col-sm-4</code>
                                                    </div>
                                                </Col>
                                                <Col sm={4}>
                                                    <div className="grid-example mt-2 mt-sm-0">
                                                        <code>col-sm-4</code>
                                                    </div>
                                                </Col>
                                                <Col sm={4}>
                                                    <div className="grid-example mt-2 mt-sm-0">
                                                        <code>col-sm-4</code>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </CardBody>

                                    <div className="mt-4">
                                        <h5 className="font-size-13 mb-2">Align Items Center</h5>
                                        <div className="bg-soft-light p-3 text-center">
                                            <Row className="align-items-center" style={{ minHeight: '6rem' }}>
                                                <Col sm={4}>
                                                    <div className="grid-example">
                                                        <code>col-sm-4</code>
                                                    </div>
                                                </Col>
                                                <Col sm={4}>
                                                    <div className="grid-example mt-2 mt-sm-0">
                                                        <code>col-sm-4</code>
                                                    </div>
                                                </Col>
                                                <Col sm={4}>
                                                    <div className="grid-example mt-2 mt-sm-0">
                                                        <code>col-sm-4</code>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <h5 className="font-size-13 mb-2">Align Items End</h5>
                                        <div className="bg-soft-light p-3 text-center">
                                            <Row className="align-items-end" style={{ minHeight: '6rem' }}>
                                                <Col sm={4}>
                                                    <div className="grid-example">
                                                        <code>col-sm-4</code>
                                                    </div>
                                                </Col>
                                                <Col sm={4}>
                                                    <div className="grid-example mt-2 mt-sm-0">
                                                        <code>col-sm-4</code>
                                                    </div>
                                                </Col>
                                                <Col sm={4}>
                                                    <div className="grid-example mt-2 mt-sm-0">
                                                        <code>col-sm-4</code>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <h5 className="font-size-13 mb-2">Align Self</h5>
                                        <div className="bg-soft-light p-3 text-center">
                                            <Row style={{ minHeight: '9rem' }}>
                                                <Col xs={4} className="align-self-start">
                                                    <div className="grid-example">
                                                        <code>align-self-start</code>
                                                    </div>
                                                </Col>
                                                <Col xs={4} className="align-self-center">
                                                    <div className="grid-example mt-2 mt-sm-0">
                                                        <code>align-self-center</code>
                                                    </div>
                                                </Col>
                                                <Col xs={4} className="align-self-end">
                                                    <div className="grid-example mt-2 mt-sm-0">
                                                        <code>align-self-end</code>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <h5 className="font-size-13 mb-2">Horizontal Alignment</h5>
                                        <div className="bg-soft-light p-3 text-center">
                                            <Row className="justify-content-start">
                                                <Col xs={4}>
                                                    <div className="grid-example">
                                                        <code>justify-content-start</code>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="justify-content-center">
                                                <Col xs={4}>
                                                    <div className="grid-example mt-2 mt-sm-0">
                                                        <code>justify-content-center</code>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="justify-content-end">
                                                <Col xs={4}>
                                                    <div className="grid-example mt-2 mt-sm-0">
                                                        <code>justify-content-end</code>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </CardBody>

                            </Card>

                        </div>

                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default UiGrid;