import React from 'react';
import MetaTags from 'react-meta-tags';
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//imoprt images
import img4 from "../../assets/images/small/img-4.jpg"
import img3 from "../../assets/images/small/img-3.jpg"
import img2 from "../../assets/images/small/img-2.jpg"
import avtar4 from "../../assets/images/users/avatar-4.jpg";
import avtar3 from "../../assets/images/users/avatar-3.jpg";
import avtar5 from "../../assets/images/users/avatar-5.jpg";
import avtar1 from "../../assets/images/users/avatar-1.jpg";

const UiImages = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Images | Minia - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Components" breadcrumbItem="Images" />
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <div className="card-header">
                                    <h4 className="card-title">Image Rounded & Circle</h4>
                                    <p className="card-title-desc">Use classes
                                        <code>.rounded</code> and <code>.rounded-circle</code>.
                                    </p>
                                </div>

                                <CardBody>
                                    <Row>
                                        <Col md={6}>
                                            <img className="rounded me-2" alt="200x200" width="200" src={img4} data-holder-rendered="true" />
                                        </Col>
                                        <Col md={6}>
                                            <div className="mt-4 mt-md-0">
                                                <img className="rounded-circle avatar-xl" alt="200x200" src={avtar4} data-holder-rendered="true" />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                            <Card>
                                <div className="card-header">
                                    <h4 className="card-title">Image Thumbnails</h4>
                                    <p className="card-title-desc">In addition to our border-radius utilities, you can use
                                        <code className="highlighter-rouge">.img-thumbnail</code> to give an image a
                                        rounded 1px border appearance.</p>
                                </div>

                                <CardBody>
                                    <Row>
                                        <Col md={6}>
                                            <img className="img-thumbnail" alt="200x200" width="200" src={img3} data-holder-rendered="true" />
                                        </Col>
                                        <Col md={6}>
                                            <div className="mt-4 mt-md-0">
                                                <img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avtar3} data-holder-rendered="true" />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <div className="card-header">
                                    <h4 className="card-title">Responsive Images</h4>
                                    <p className="card-title-desc">Images in Bootstrap are made responsive
                                        with <code className="highlighter-rouge">.img-fluid</code>. <code
                                            className="highlighter-rouge">max-width: 100%;</code> and <code
                                                className="highlighter-rouge">height: auto;</code> are applied to
                                        the image so that it scales with the parent element.</p>
                                </div>

                                <CardBody>
                                    <div>
                                        <img src={img2} className="img-fluid" alt="" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <div className="card-header">
                                    <h4 className="card-title"><span>*****</span> Image Sizes</h4>
                                    <p className="card-title-desc">Images in Bootstrap are made responsive
                                        with <code className="highlighter-rouge">.img-fluid</code>. <code
                                            className="highlighter-rouge">max-width: 100%;</code> and <code
                                                className="highlighter-rouge">height: auto;</code> are applied to
                                        the image so that it scales with the parent element.
                                    </p>
                                </div>

                                <CardBody>
                                    <Row>
                                        <Col md={6}>
                                            <Row>
                                                <Col lg={4}>
                                                    <div>
                                                        <img src={avtar3} alt="" className="rounded avatar-sm" />
                                                        <p className="mt-2 mb-lg-0"><code>.avatar-sm</code></p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <img src={avtar4} alt="" className="rounded avatar-md" />
                                                        <p className="mt-2  mb-lg-0"><code>.avatar-md</code></p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <img src={avtar5} alt="" className="rounded avatar-lg" />
                                                        <p className="mt-2 mb-lg-0"><code>.avatar-lg</code></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col md={6}>
                                            <Row>
                                                <Col lg={4}>
                                                    <div>
                                                        <img src={avtar3} alt="" className="rounded-circle avatar-sm" />
                                                        <p className="mt-2 mb-lg-0"><code>.avatar-sm</code></p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <img src={avtar4} alt="" className="rounded-circle avatar-md" />
                                                        <p className="mt-2  mb-lg-0"><code>.avatar-md</code></p>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <img src={avtar5} alt="" className="rounded-circle avatar-lg" />
                                                        <p className="mt-2 mb-lg-0"><code>.avatar-lg</code></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Media Object</h4>
                                    <p className="card-title-desc">The images or other media can be
                                        aligned top, middle, or bottom. The default is top aligned.
                                    </p>
                                </CardHeader>

                                <CardBody>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 me-3">
                                            <img className="rounded avatar-md" src={avtar3} alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5>Top-aligned media</h5>
                                            <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-3">
                                            <img className="rounded avatar-md" src={avtar5} alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5>Center-aligned media</h5>
                                            <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="d-flex align-items-end">
                                        <div className="flex-shrink-0 me-3">
                                            <img className="rounded avatar-md" src={avtar1} alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5>Bottom-aligned media</h5>
                                            <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default UiImages;