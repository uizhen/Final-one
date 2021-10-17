import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from "react-meta-tags";
import { Col, Container, Row } from 'reactstrap';

//import images
import logo from "../../assets/images/logo-sm.svg";
import avatar from "../../assets/images/users/avatar-1.jpg";
import CarouselPage from './CarouselPage';

const LockScreen = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Lock Screen | Minia - React Admin & Dashboard Template</title>
            </MetaTags>
            <div className="auth-page">
                <Container fluid className="p-0">
                    <Row className="g-0">
                        <Col className="col-xxl-3 col-lg-4 col-md-5">
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
                                                <h5 className="mb-0">Lock screen</h5>
                                                <p className="text-muted mt-2">Enter your password to unlock the screen!</p>
                                            </div>
                                            <div className="user-thumb text-center mb-4 mt-4 pt-2">
                                                <img src={avatar} className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                                <h5 className="font-size-15 mt-3">Shawn</h5>
                                            </div>
                                            <form className="custom-form mt-4">
                                                <div className="mb-3">
                                                    <label className="form-label" for="userpassword">Password</label>
                                                    <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                                </div>
                                                <div className="mb-3 mt-4">
                                                    <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Unlock</button>
                                                </div>
                                            </form>

                                            <div className="mt-5 text-center">
                                                <p className="text-muted mb-0">Not you ? return <Link to="/login"
                                                    className="text-primary fw-semibold"> Sign In </Link> </p>
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

export default LockScreen;