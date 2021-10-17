import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardTitle, Col, Container, Row } from "reactstrap";
import MetaTags from "react-meta-tags";

//SweetAlert
import SweetAlert from "react-bootstrap-sweetalert";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiSweetAlert = () => {
  const [basic, setbasic] = useState(false);
  const [with_title, setwith_title] = useState(false);
  const [success_msg, setsuccess_msg] = useState(false);
  const [success_dlg, setsuccess_dlg] = useState(false);
  const [error_dlg, seterror_dlg] = useState(false);
  const [dynamic_title, setdynamic_title] = useState("");
  const [sweet_timer, setSweet_timer] = useState(false);
  const [dynamic_description, setdynamic_description] = useState("");
  const [confirm_both, setconfirm_both] = useState(false);
  const [confirm_alert, setconfirm_alert] = useState(false);
  const [img_header, setimg_header] = useState(false);
  const [img_html, setimg_html] = useState(false);
  const [custom_div, setcustom_div] = useState(false);
  const [custom_div1, setcustom_div1] = useState(false);
  const [emailtxt, setEmailtxt] = useState("");
  const [ajax_div, setajax_div] = useState(false);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Sweet-Alert | Minia - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Extended" breadcrumbItem="Sweet Alert" />
          {success_dlg ? (
            <SweetAlert
              success
              title={dynamic_title}
              onConfirm={() => {
                setsuccess_dlg(false)
              }}
            >
              {dynamic_description}
            </SweetAlert>
          ) : null}

          {error_dlg ? (
            <SweetAlert
              error
              title={dynamic_title}
              onConfirm={() => {
                seterror_dlg(false)
              }}
            >
              {dynamic_description}
            </SweetAlert>
          ) : null}
           <Row>
              <Col lg={12}>
                  <Card>
                    <CardHeader>
                        <CardTitle>Examples</CardTitle>
                        <CardSubtitle>
                          A beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero dependencies.
                        </CardSubtitle>
                    </CardHeader>
                    <CardBody>
                      <div className="table-responsive">
                        <table className="table table-nowrap align-middle justify-content-center mb-0">
                          <thead>
                            <tr>
                              <th scope="col" style={{ width: "50%" }}>
                                Sweet Alert Type
                              </th>
                              <th scope="col" className="text-center">
                                Sweet Alert Examples
                              </th>
                            </tr>
                          </thead>
                          <tbody>

                            <tr>
                              <th scope="row">
                                A Basic Message
                              </th>
                              <td className="text-center">
                                <Button
                                  color="primary"
                                  onClick={() => {
                                    setbasic(true)
                                  }}
                                  className="btn btn-primary btn-sm waves-effect waves-light"
                                  id="sa-basic"
                                >
                                  Click me
                                </Button>
                                {basic ? (
                                  <SweetAlert
                                    title="Any fool can use a computer"
                                    onConfirm={() => {
                                      setbasic(false)
                                    }}
                                  />
                                ) : null}
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">
                                A Title with a Text Under
                              </th>
                              <td className="text-center">
                                <Button
                                  color="primary"
                                  onClick={() => {
                                    setwith_title(true)
                                  }}
                                  id="sa-title"
                                  className="btn btn-primary btn-sm"
                                >
                                  Click me
                                </Button>
                                {with_title ? (
                                  <SweetAlert
                                    title="The Internet?"
                                    warning
                                    onConfirm={() => {
                                      setwith_title(false)
                                    }}
                                  >
                                    That thing is still around?
                                  </SweetAlert>
                                ) : null}
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">
                                A success message!
                              </th>
                              <td className="text-center">
                                <Button
                                  color="primary"
                                  onClick={() => {
                                    setsuccess_msg(true)
                                  }}
                                  id="sa-success"
                                  className="btn btn-primary btn-sm"
                                >
                                  Click me
                                </Button>
                                {success_msg ? (
                                  <SweetAlert
                                    title="Good job!"
                                    success
                                    showCancel
                                    confirmBtnBsStyle="success"
                                    cancelBtnBsStyle="danger"
                                    onConfirm={() => {
                                      setsuccess_msg(false)
                                    }}
                                    onCancel={() => {
                                      setsuccess_msg(false)
                                    }}
                                  >
                                    You clicked the button!
                                  </SweetAlert>
                                ) : null}
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">
                                A warning message, with a function attached to the "Confirm"-button...
                              </th>
                              <td className="text-center">
                                <Button
                                  color="primary"
                                  onClick={() => {
                                    setconfirm_alert(true)
                                  }}
                                  id="sa-success"
                                  className="btn btn-primary btn-sm"
                                >
                                  Click me
                                </Button>
                                {confirm_alert ? (
                                  <SweetAlert
                                    title="Are you sure?"
                                    warning
                                    showCancel
                                    confirmButtonText="Yes, delete it!"
                                    confirmBtnBsStyle="success"
                                    cancelBtnBsStyle="danger"
                                    onConfirm={() => {
                                      setconfirm_alert(false)
                                      setsuccess_dlg(true)
                                      setdynamic_title("Deleted")
                                      setdynamic_description("Your file has been deleted.")
                                    }}
                                    onCancel={() => setconfirm_alert(false)}
                                  >
                                    You won't be able to revert this!
                                  </SweetAlert>
                                ) : null}
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">
                                By passing a parameter, you can execute something else for "Cancel".
                              </th>
                              <td className="text-center">
                                <Button
                                  color="primary"
                                  onClick={() => {
                                    setconfirm_both(true)
                                  }}
                                  id="sa-params"
                                  className="btn btn-primary btn-sm"
                                >
                                  Click me
                                </Button>
                                {confirm_both ? (
                                  <SweetAlert
                                    title="Are you sure?"
                                    warning
                                    showCancel
                                    confirmBtnBsStyle="success"
                                    cancelBtnBsStyle="danger"
                                    onConfirm={() => {
                                      setconfirm_both(false)
                                      setsuccess_dlg(true)
                                      setdynamic_title("Deleted")
                                      setdynamic_description("Your file has been deleted.")
                                    }}
                                    onCancel={() => {
                                      setconfirm_both(false)
                                      setsuccess_dlg(true)
                                      setdynamic_title("Cancelled")
                                      setdynamic_description("Your imaginary file is safe :)")
                                    }}
                                  >
                                    You won't be able to revert this!
                                  </SweetAlert>
                                ) : null}
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">
                                A message with custom Image Header
                              </th>
                              <td className="text-center">
                                <Button
                                  color="primary"
                                  onClick={() => {
                                    setimg_header(true)
                                  }}
                                  id="sa-image"
                                  className="btn btn-primary btn-sm"
                                >
                                  Click me
                                </Button>
                                {img_header ? (
                                  <SweetAlert
                                    title="Sweet!"
                                    custom
                                    onConfirm={() => {
                                      setimg_header(false)
                                    }}
                                  >
                                    Modal with a custom image.
                                  </SweetAlert>
                                ) : null}
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">
                                A message with auto close timer
                              </th>
                              <td className="text-center">
                                <Button
                                  color="primary"
                                  onClick={() => {
                                    setSweet_timer(true)
                                  }}
                                  className="btn btn-primary btn-sm"
                                >
                                  Click me
                                </Button>
                                {sweet_timer ? (
                                  <SweetAlert
                                    title="Auto Close Alert!"
                                    timeout={2000}
                                    showConfirm={false}
                                    onConfirm={() => {
                                      setSweet_timer(false)
                                    }}
                                  >
                                    I Will close in 2 Seconds
                                  </SweetAlert>
                                ) : null}
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">
                                Custom HTML description and buttons
                              </th>
                              <td className="text-center">
                                <Button
                                  color="primary"
                                  onClick={() => {
                                    setimg_html(true)
                                  }}
                                  id="custom-html-alert"
                                  className="btn btn-primary btn-sm"
                                >
                                  Click me
                                </Button>
                                {img_html ? (
                                  <SweetAlert
                                    title={
                                      <span>
                                        HTML <u>example</u>!
                                      </span>
                                    }
                                    warning
                                    onConfirm={() => {
                                      setimg_html(false)
                                    }}
                                  >
                                    You can use <b>bold</b> text, links and other HTML tags
                                  </SweetAlert>
                                ) : null}
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">
                                A custom positioned dialog
                              </th>
                              <td className="text-center">
                                <Button
                                  type="button"
                                  color="primary"
                                  onClick={() => {
                                    setcustom_div1(true)
                                  }}
                                  id="sa-position"
                                  className="btn btn-primary btn-sm"
                                >
                                  Click me
                                </Button>
                                {custom_div1 ? (
                                  <SweetAlert
                                    title="Your Work Has been Saved."
                                    timeout={2000}
                                    style={{
                                      position: "absolute",
                                      top: "0px",
                                      right: "0px",
                                    }}
                                    showCloseButton={false}
                                    showConfirm={false}
                                    success
                                    onConfirm={() => {
                                      setcustom_div1(false)
                                    }}
                                  ></SweetAlert>
                                ) : null}
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">
                                A message with custom width, padding and background
                              </th>
                              <td className="text-center">
                                <Button
                                  color="primary"
                                  onClick={() => {
                                    setcustom_div(true)
                                  }}
                                  className="btn btn-primary btn-sm"
                                  id="custom-padding-width-alert"
                                >
                                  Click me
                                </Button>
                                {custom_div ? (
                                  <SweetAlert
                                    title="Custom width, padding, background."
                                    style={{
                                      backgroundColor: "#ebebeb",
                                      padding: "3em",
                                      borderRadius: "20px",
                                    }}
                                    onConfirm={() => {
                                      setcustom_div(false)
                                    }}
                                  />
                                ) : null}
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">
                                Ajax request example
                              </th>
                              <td className="text-center">
                                <Button
                                  color="primary"
                                  onClick={() => {
                                    setajax_div(true)
                                  }}
                                  id="ajax-alert"
                                  className="btn btn-primary btn-sm"
                                >
                                  Click me
                                </Button>
                                {ajax_div ? (
                                  <SweetAlert
                                    showCancel
                                    title="Submit email to run ajax request"
                                    cancelBtnBsStyle="danger"
                                    confirmBtnBsStyle="success"
                                    onConfirm={() => {
                                      setajax_div(false)
                                      setsuccess_dlg(true)
                                      setdynamic_title("Ajax request finished!")
                                      setdynamic_description("Submitted email : " + emailtxt)
                                    }}
                                    onCancel={() => {
                                      setajax_div(false)
                                    }}
                                  >
                                    <input
                                      type="email"
                                      className="form-control"
                                      placeholder="Enter Email"
                                      value={emailtxt}
                                      onChange={e => setEmailtxt(e.target.value)}
                                    />
                                  </SweetAlert>
                                ) : null}
                              </td>
                            </tr>

                          </tbody>
                        </table>

                      </div>
                    </CardBody>
                  </Card>
              </Col>
            </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiSweetAlert
