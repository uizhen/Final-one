import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//import images
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img7 from "../../assets/images/small/img-7.jpg";
import img6 from "../../assets/images/small/img-6.jpg";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiCard = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Cards | Minia - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Components" breadcrumbItem="Cards" />
                    <Row>
                        <Col md={6} xl={3}>

                            <Card>
                                <img className="card-img-top img-fluid" src={img1} alt="" />
                                <CardBody>
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                    <Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
                                </CardBody>
                            </Card>

                        </Col>

                        <Col md={6} xl={3}>

                            <Card>
                                <img className="card-img-top img-fluid" src={img2} alt="" />
                                <CardBody>
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                </CardBody>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                </ul>
                                <CardBody>
                                    <Link to="#" className="card-link">Card link</Link>
                                    <Link to="#" className="card-link">Another link</Link>
                                </CardBody>
                            </Card>

                        </Col>

                        <Col md={6} xl={3}>

                            <Card>
                                <img className="card-img-top img-fluid" src={img3} alt="" />
                                <CardBody>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>

                        </Col>


                        <Col md={6} xl={3}>

                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Card title</h4>
                                    <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                                </CardBody>
                                <img className="img-fluid" src={img4} alt="" />
                                <CardBody>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                    <Link to="#" className="card-link">Card link</Link>
                                    <Link to="#" className="card-link">Another link</Link>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Card>
                                <CardBody>
                                    <h3 className="card-title">Special title treatment</h3>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <Link to="#" className="btn btn-primary w-100">Go somewhere</Link>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card>
                                <CardBody>
                                    <h3 className="card-title">Special title treatment</h3>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <Link to="#" className="btn btn-primary w-100">Go somewhere</Link>
                                </CardBody>
                            </Card>
                        </Col>
                        <Row>
                            <Col lg={4}>
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional
                                            content.</p>
                                        <Link to="#" className="btn btn-primary waves-effect waves-light w-100">Go somewhere</Link>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={4}>
                                <Card>
                                    <CardBody className="text-center">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional
                                            content.</p>
                                        <Link to="#" className="btn btn-primary waves-effect waves-light w-100">Go somewhere</Link>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={4}>
                                <Card>
                                    <CardBody className="text-end">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional
                                            content.</p>
                                        <Link to="#" className="btn btn-primary waves-effect waves-light w-100">Go somewhere</Link>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Card>
                                <h5 className="card-header bg-transparent border-bottom text-uppercase">Featured</h5>
                                <CardBody>
                                    <h4 className="card-title">Special title treatment</h4>
                                    <p className="card-text">With supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card>
                                <div className="card-header bg-transparent border-bottom">
                                    Quote
                                </div>
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                            erat a ante.</p>
                                        <footer className="blockquote-footer mt-0 font-size-12">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card>
                                <div className="card-header bg-transparent border-bottom text-uppercase">
                                    Featured
                                </div>
                                <CardBody>
                                    <h4 className="card-title">Special title treatment</h4>
                                    <p className="card-text">With supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                                </CardBody>
                                <div className="card-footer bg-transparent border-top text-muted">
                                    2 days ago
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Card>
                                <img className="card-img-top img-fluid" src={img5} alt="" />
                                <CardBody>
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </CardBody>
                                <img className="card-img-bottom img-fluid" src={img7} alt="" />
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card>
                                <img className="card-img img-fluid" src={img6} alt="" />
                                <div className="card-img-overlay">
                                    <h4 className="card-title text-white">Card title</h4>
                                    <p className="card-text text-white">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                    <p className="card-text">
                                        <small className="text-white">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Row className="g-0 align-items-center">
                                    <Col md={4}>
                                        <img className="card-img img-fluid" src={img2} alt="" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Row className="g-0 align-items-center">
                                    <Col md={8}>
                                        <CardBody>
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </CardBody>
                                    </Col>
                                    <Col md={4}>
                                        <img className="card-img img-fluid" src={img3} alt="" />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Card className="bg-primary border-primary text-white-50">
                                <CardBody>
                                    <h5 className="mb-3 text-white">Primary Card</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className="bg-success border-success text-white-50">
                                <CardBody>
                                    <h5 className="mb-3 text-white">Success Card</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className="bg-info border-info text-white-50">
                                <CardBody>
                                    <h5 className="mb-3 text-white">Info Card</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Card className="bg-warning border-warning text-white-50">
                                <CardBody>
                                    <h5 className="mb-4 text-white"><i className="mdi mdi-alert-outline me-3"></i>Warning Card</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className="bg-danger border-danger text-white-50">
                                <CardBody>
                                    <h5 className="mb-4 text-white"><i className="mdi mdi-block-helper me-3"></i>Danger Card</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className="bg-dark border-dark text-light">
                                <CardBody>
                                    <h5 className="mb-4 text-light"><i className="mdi mdi-alert-circle-outline me-3"></i>Dark Card</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <Card className="border border-primary">
                                <div className="card-header bg-transparent border-primary">
                                    <h5 className="my-0 text-primary"><i className="mdi mdi-bullseye-arrow me-3"></i>Primary outline Card</h5>
                                </div>
                                <CardBody>
                                    <h5 className="card-title">card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className="border border-danger">
                                <div className="card-header bg-transparent border-danger">
                                    <h5 className="my-0 text-danger"><i className="mdi mdi-block-helper me-3"></i>Danger outline Card</h5>
                                </div>
                                <CardBody>
                                    <h5 className="card-title">card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className="border border-success">
                                <div className="card-header bg-transparent border-success">
                                    <h5 className="my-0 text-success"><i className="mdi mdi-check-all me-3"></i>Success Card</h5>
                                </div>
                                <CardBody>
                                    <h5 className="card-title">card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col xs={12}>
                            <h4 className="mt-2 mb-4">Card Groups</h4>
                            <div className="card-deck-wrapper">
                                <div className="card-group">
                                    <Card className="mb-4">
                                        <img className="card-img-top img-fluid" src={img4} alt="" />
                                        <CardBody>
                                            <h4 className="card-title">Card title</h4>
                                            <p className="card-text">This is a longer card with supporting text below as
                                                a natural lead-in to additional content. This content is a little
                                                bit longer.</p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </CardBody>
                                    </Card>
                                    <Card className="mb-4">
                                        <img className="card-img-top img-fluid" src={img5} alt="" />
                                        <CardBody>
                                            <h4 className="card-title">Card title</h4>
                                            <p className="card-text">This card has supporting text below as a natural
                                                lead-in to additional content.</p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </CardBody>
                                    </Card>
                                    <Card className="mb-4">
                                        <img className="card-img-top img-fluid" src={img6} alt="" />
                                        <CardBody>
                                            <h4 className="card-title">Card title</h4>
                                            <p className="card-text">This is a wider card with supporting text below as
                                                a natural lead-in to additional content. This card has even longer
                                                content than the first to show that equal height action.</p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <h4 className="mt-2 mb-4">Cards Masonry</h4>

                            <Row data-masonry='{"percentPosition": true }'>
                                <Col sm={6} lg={4}>
                                    <Card>
                                        <img src={img3} className="card-img-top" alt="" />
                                        <CardBody>
                                            <h5 className="card-title">Card title that wraps to a new line</h5>
                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col sm={6} lg={4}>
                                    <Card>
                                        <img src={img5} className="card-img-top" alt="" />
                                        <CardBody>
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col sm={6} lg={4}>
                                    <Card>
                                        <img src={img7} className="card-img-top" alt="" />
                                    </Card>
                                </Col>

                                <Col sm={6} lg={4}>
                                    <Card className="p-3 text-end">
                                        <blockquote className="blockquote blockquote-reverse  mb-0">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer mt-0">
                                                <small className="text-muted">
                                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                                </small>
                                            </footer>
                                        </blockquote>
                                    </Card>
                                </Col>

                                <Col sm={6} lg={4}>
                                    <Card>
                                        <CardBody>
                                            <blockquote className="blockquote font-size-14 mb-0">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                <footer className="blockquote-footer mt-0 font-size-12">
                                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                                </footer>
                                            </blockquote>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col sm={6} lg={4}>
                                    <Card className="bg-primary text-white text-center p-3">
                                        <blockquote className="card-blockquote font-size-14 mb-0">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                            <footer className="blockquote-footer mt-0 text-white font-size-12 mb-0">
                                                Someone famous in <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </Card>
                                </Col>

                                <Col sm={6} lg={4}>
                                    <Card>
                                        <CardBody>
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col sm={6} lg={4}>
                                    <Card>
                                        <CardBody>
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </CardBody>
                                    </Card>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default UiCard;