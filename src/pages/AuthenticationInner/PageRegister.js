import React from 'react';
import MetaTags from "react-meta-tags";
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import logo from "../../assets/images/logo-sm.svg";
import CarouselPage from './CarouselPage';

const PageRegister = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Register | Minia - React Admin & Dashboard Template</title>
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
                                                <h5 className="mb-0">Register Account</h5>
                                                <p className="text-muted mt-2">Get your free Minia account now.</p>
                                            </div>
                                            <form className="needs-validation custom-form mt-4 pt-2" novalidate action="index.html">
                                                <div className="mb-3">
                                                    <label htmlFor="useremail" className="form-label">Email</label>
                                                    <input type="email" className="form-control" id="useremail" placeholder="Enter email" required />
                                                    <div className="invalid-feedback">
                                                        Please Enter Email
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="username" className="form-label">Username</label>
                                                    <input type="text" className="form-control" id="username" placeholder="Enter username" required />
                                                    <div className="invalid-feedback">
                                                        Please Enter Username
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="userpassword" className="form-label">Password</label>
                                                    <input type="password" className="form-control" id="userpassword" placeholder="Enter password" required />
                                                    <div className="invalid-feedback">
                                                        Please Enter Password
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="mb-0">By registering you agree to the Minia <Link to="#" className="text-primary">Terms of Use</Link></p>
                                                </div>
                                                <div className="mb-3">
                                                    <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Register</button>
                                                </div>
                                            </form>

                                            <div className="mt-5 text-center">
                                                <p className="text-muted mb-0">Already have an account ? <Link to="/page-login"
                                                    className="text-primary fw-semibold"> Login </Link> </p>
                                            </div>
                                        </div>
                                        <div className="mt-4 mt-md-5 text-center">
                                            <p className="mb-0">© <script>document.write(new Date().getFullYear())</script> Minia   . Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
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

export default PageRegister;