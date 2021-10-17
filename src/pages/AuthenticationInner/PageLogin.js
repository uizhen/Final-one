import React from 'react';
import MetaTags from "react-meta-tags";
import { Link } from 'react-router-dom';

import logo from "../../assets/images/logo-sm.svg";
import CarouselPage from './CarouselPage';

function PageLogin(props) {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Login | Minia - React Admin & Dashboard Template</title>
            </MetaTags>
            <div className="auth-page">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-xxl-3 col-lg-4 col-md-5">
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
                                                <h5 className="mb-0">Welcome Back !</h5>
                                                <p className="text-muted mt-2">Sign in to continue to Minia.</p>
                                            </div>
                                            <form className="custom-form mt-4 pt-2">
                                                <div className="mb-3">
                                                    <label className="form-label">Username</label>
                                                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                                </div>
                                                <div className="mb-3">
                                                    <div className="d-flex align-items-start">
                                                        <div className="flex-grow-1">
                                                            <label className="form-label">Password</label>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="">
                                                                <Link to="/page-recoverpw" className="text-muted">Forgot password?</Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="input-group auth-pass-inputgroup">
                                                        <input type="password" className="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon" />
                                                        <button className="btn btn-light ms-0" type="button" id="password-addon"><i className="mdi mdi-eye-outline"></i></button>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <div className="col">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="remember-check" />
                                                            <label className="form-check-label" htmlFor="remember-check">
                                                                Remember me
                                                            </label>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="mb-3">
                                                    <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Log In</button>
                                                </div>
                                            </form>

                                            <div className="mt-5 text-center">
                                                <p className="text-muted mb-0">Don't have an account ? <Link to="/page-register"
                                                    className="text-primary fw-semibold"> Signup now </Link> </p>
                                            </div>
                                        </div>
                                        <div className="mt-4 mt-md-5 text-center">
                                            <p className="mb-0">© {new Date().getFullYear()} Minia   . Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CarouselPage />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PageLogin;