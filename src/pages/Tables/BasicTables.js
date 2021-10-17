import React from "react"
import MetaTags from 'react-meta-tags';

import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const BasicTable = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Bootstrap Basic | Minia - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Bootstrap Basic" />

          <Row>
            <Col md={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Basic example</CardTitle>
                  <CardSubtitle>
                    For basic styling—light padding and only horizontal
                    dividers—add the base className <code>.table</code> to any
                    <code>&lt;table&gt;</code>.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Dark table</CardTitle>
                  <CardSubtitle>
                    You can also invert the colors—with light text on dark
                    backgrounds—with <code>.table-dark</code>.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table table-dark mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Table head</CardTitle>
                  <CardSubtitle>
                    Use one of two modifier className to make{" "}
                    <code>&lt;thead&gt;</code>s appear light or dark gray.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Striped rows</CardTitle>
                  <CardSubtitle>
                    Use <code>.table-striped</code> to add zebra-striping to any
                    table row within the <code>&lt;tbody&gt;</code>.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table table-striped mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Bordered table</CardTitle>
                  <CardSubtitle>
                    Add <code>.table-bordered</code> for borders on all sides of
                    the table and cells.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table table-bordered mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Borderless table</CardTitle>
                  <CardSubtitle>
                    Add <code>.table-borderless</code> for a table without
                    borders.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table table-borderless mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <div className="table-responsive">
                  <CardHeader>
                    <h4 className="card-title">Vertical alignment</h4>
                    <p className="card-title-desc">Table cells in <code>&lt;tbody&gt;</code> inherit their alignment from <code>&lt;table&gt;</code> and are aligned to the the top by default. Use the vertical align classes to re-align where needed.</p>
                  </CardHeader>
                  <CardBody>
                    <div className="table-responsive">
                      <Table className="align-middle mb-0">

                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                              <button type="button" className="btn btn-light btn-sm">View</button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                              <button type="button" className="btn btn-light btn-sm">View</button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>
                              <button type="button" className="btn btn-light btn-sm">View</button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                              <button type="button" className="btn btn-light btn-sm">View</button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                  </CardBody>
                </div>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Nesting</h4>
                  <p className="card-title-desc"> Border styles, active styles, and table variants are not inherited by nested tables.</p>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table-striped table-bordered mb-0">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td colSpan="4">
                            <table className="table mb-0">
                              <thead>
                                <tr>
                                  <th scope="col">Header</th>
                                  <th scope="col">Header</th>
                                  <th scope="col">Header</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">A</th>
                                  <td>First</td>
                                  <td>Last</td>
                                </tr>
                                <tr>
                                  <th scope="row">B</th>
                                  <td>First</td>
                                  <td>Last</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Hoverable </CardTitle>
                  <CardSubtitle>
                    Add <code>.table-hover</code> to enable a hover state on
                    table rows within a <code>&lt;tbody&gt;</code>.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Small table </CardTitle>
                  <CardSubtitle>
                    {" "}
                    Add <code>.table-sm</code> to make tables more compact by
                    cutting cell padding in half.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table table-sm m-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Contextual className</CardTitle>
                  <CardSubtitle>
                    Use contextual className to color table rows or individual
                    cells.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Column heading</th>
                          <th>Column heading</th>
                          <th>Column heading</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-light">
                          <th scope="row">1</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>

                        <tr className="table-success">
                          <th scope="row">2</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>

                        <tr className="table-info">
                          <th scope="row">3</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>

                        <tr className="table-warning">
                          <th scope="row">4</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>

                        <tr className="table-danger">
                          <th scope="row">5</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Captions </CardTitle>
                  <CardSubtitle>
                    A <code>&lt;caption&gt;</code> functions like a heading for
                    a table. It helps users with screen readers to find a table
                    and understand what it’s about and decide if they want to
                    read it.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <caption>List of users</caption>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <CardTitle>Responsive table </CardTitle>
                  <CardSubtitle>
                    Create responsive tables by wrapping any <code>.table</code>{" "}
                    in <code>.table-responsive</code>
                    to make them scroll horizontally on small devices (under
                    768px).
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BasicTable
