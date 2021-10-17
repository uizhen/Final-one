import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from "react-meta-tags";
import { Col, Container, Row } from 'reactstrap';

//Verification code package
import AuthCode from "react-auth-code-input";

//import images
import logo from "../../assets/images/logo-sm.svg";
import CarouselPage from './CarouselPage';

const TwoStepVerfication = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Two Step Verfication | Minia - React Admin & Dashboard Template</title>
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
                                                        <i className="bx bxs-envelope h2 mb-0 text-primary"></i>
                                                    </div>
                                                </div>
                                                <div className="p-2 mt-4">

                                                    <h4>Verify your email</h4>
                                                    <p className="mb-5">Please enter the 4 digit code sent to <span className="fw-bold">example@abc.com</span></p>

                                                    <form>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="mb-3 verification">
                                                                    <label htmlFor="digit1-input" className="visually-hidden">Dight 1</label>
                                                                    <AuthCode
                                                                        characters={4}
                                                                        className="form-control form-control-lg text-center"
                                                                        allowedCharacters="^[0-9]"
                                                                        inputStyle={{
                                                                            width: "50px",
                                                                            height: "42px",
                                                                            padding: "8px",
                                                                            borderRadius: "8px",
                                                                            fontSize: "16px",
                                                                            textAlign: "center",
                                                                            marginRight: "15px",
                                                                            border: "1px solid #ced4da",
                                                                            textTransform: "uppercase",
                                                                        }}
                                                                        onChange={() => null}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>

                                                    <div className="mt-4">
                                                        <Link to="/dashboard" className="btn btn-primary w-100">Confirm</Link>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="mt-5 text-center">
                                                <p className="text-muted mb-0">Didn't receive an email ? <Link to="#"
                                                    className="text-primary fw-semibold"> Resend </Link> </p>
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

export default TwoStepVerfication;