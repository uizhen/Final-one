import React from "react"
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom"
import { Container, Row, Col, Card, CardBody } from "reactstrap"

//Import Image
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Email Sidebar
import EmailSideBar from "./email-sidebar"

//Import Email Topbar
import EmailToolbar from "./email-toolbar"

const EmailRead = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Read Email | Samply - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Email" breadcrumbItem="Read Email" />

          <Row>
            <Col xs="12">
              {/* Render Email SideBar */}
              <EmailSideBar />

              <div className="email-rightbar mb-3">
                <Card>
                  {/* Render Email Top Tool Bar */}
                  <EmailToolbar />

                  <CardBody>
                    <div className="d-flex align-items-start mb-4">
                      <img
                        className="d-flex me-3 rounded-circle avatar-sm"
                        src={avatar2}
                        alt="Samply"
                      />
                      <div className="flex-1">
                        <h5 className="font-size-14 my-1">
                          Humberto D. Champion
                        </h5>
                        <small className="text-muted">support@domain.com</small>
                      </div>
                    </div>

                    <h4 className="mt-0 mb-4 font-size-16">
                      Your Storage is lonely. Add some files!
                    </h4>

                    <p className="text-muted">Dear User,</p>
                    <p className="text-muted">Once your files are in Storage, they’ll be waiting for you anywhere you install the app—like your computer, phone, or tablet. Your files will also be securely backed up and easy to share, no matter what type of files they are.</p>
                    <p className="text-muted">An unrecognized device or browser recently signed into your Storage account. Help us keep your account secure by letting us know if this was you:</p>
                    <p className="text-muted mb-0">Sincerly,</p>
                    <p className="text-muted">Pichforest</p>
                    <hr />

                    <Row>
                      <Col xl="2" xs="6">
                        <Card className="border shadow-none">
                          <img
                            className="card-img-top img-fluid"
                            src={img3}
                            alt="Samply"
                          />
                          <div className="py-2 text-center">
                            <Link to="" className="fw-semibold font-size-13 text-reset">
                              Download
                              <i className="bx bxs-download align-middle"></i>
                            </Link>
                          </div>
                        </Card>
                      </Col>
                      <Col xl="2" xs="6">
                        <Card className="border shadow-none">
                          <img
                            className="card-img-top img-fluid"
                            src={img4}
                            alt="Samply"
                          />
                          <div className="py-2 text-center">
                            <Link to="" className="fw-semibold font-size-13 text-reset">
                              Download
                              <i className="bx bxs-download align-middle"></i>
                            </Link>
                          </div>
                        </Card>
                      </Col>
                    </Row>

                    <Link
                      to="#"
                      className="btn btn-light waves-effect mt-4"
                    >
                      <i className="mdi mdi-reply"></i> Reply
                    </Link>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default EmailRead
