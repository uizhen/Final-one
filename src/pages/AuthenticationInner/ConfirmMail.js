import React from 'react';
import MetaTags from "react-meta-tags";
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import logo from "../../assets/images/logo-sm.svg";
import CarouselPage from './CarouselPage';

const ConfirmMail = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Confirm Mail | Minia - React Admin & Dashboard Template</title>
            </MetaTags>
            <div className="auth-page">
                <Container fluid className="p-0">
                    <Row className="g-0">
                        <Col lg={4} md={5} className="col-xxl-3">
                            <div className="auth-full-page-content d-flex p-sm-5 p-4">
                                <div className="w-100">
                                    <div className="d-flex flex-column h-100">
                                        <div className="mb-4 mb-md-5 text-center">
                                            <Link to="/dashboard" className="d-block auth-logo">
                                                <img src={logo} alt="" height="28" /> <span className="logo-txt">Minia</span>
                                            </Link>
                                        </div>
                                        <div className="auth-content my-auto">
                                            <div className="text-center">
                                                <div className="avatar-lg mx-auto">
                                                    <div className="avatar-title rounded-circle bg-light">
                                                        <i className="bx bx-mail-send h2 mb-0 text-primary"></i>
                                                    </div>
                                                </div>
                                                <div className="p-2 mt-4">
                                                    <h4>Success !</h4>
                                                    <p className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                                                    <div className="mt-4">
                                                        <Link to="/dashboard" className="btn btn-primary w-100">Back to Home</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 mt-md-5 text-center">
                                            <p className="mb-0">© {new Date().getFullYear()} Minia   . Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <CarouselPage />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ConfirmMail;