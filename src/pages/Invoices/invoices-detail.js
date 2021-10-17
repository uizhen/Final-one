import React, { useEffect } from "react"
import MetaTags from "react-meta-tags"
import { Link, withRouter } from "react-router-dom"
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap"
import { isEmpty, map } from "lodash"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Image
import logo from "../../assets/images/logo-sm.svg"
import { getInvoiceDetail as onGetInvoiceDetail } from "../../store/invoices/actions"
//redux
import { useSelector, useDispatch } from "react-redux"

const InvoiceDetail = props => {
  const dispatch = useDispatch()

  const { invoiceDetail } = useSelector(state => ({
    invoiceDetail: state.invoices.invoiceDetail,
  }))

  const {
    match: { params },
  } = props

  useEffect(() => {
    if (params && params.id) {
      dispatch(onGetInvoiceDetail(params.id))
    } else {
      dispatch(onGetInvoiceDetail(1)) //remove this after full integration
    }
  }, [params, dispatch])

  //Print the Invoice
  const printInvoice = () => {
    window.print()
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Invoice Detail | Minia - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Invoices" breadcrumbItem="Invoice Detail" />
          {!isEmpty(invoiceDetail) && (
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <div className="invoice-title">
                      <div className="d-flex align-items-start">
                        <div className="flex-grow-1">
                          <div className="mb-4">
                            <img src={logo} alt="" height="24" /><span className="logo-txt">Minia</span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="mb-4">
                            <h4 className="float-end font-size-16">Invoice #  {invoiceDetail.orderId}</h4>
                          </div>
                        </div>
                      </div>
                      <address>
                        <br />
                        {map(
                          invoiceDetail.shippingAddress.split(","),
                          (item, key) => (
                            <React.Fragment key={key}>
                              <span>{item}</span>
                              <br />
                            </React.Fragment>
                          )
                        )}
                      </address>
                    </div>
                    <hr className="my-4" />
                    <Row>
                      <Col sm="6">
                        <div>
                          <h5 className="font-size-15 mb-3">Billed To:</h5>
                          {map(
                            invoiceDetail.billingAddress.split(","),
                            (item, key) => (
                              <React.Fragment key={key}>
                                <span>{item}</span>
                                <br />
                              </React.Fragment>
                            )
                          )}
                        </div>
                      </Col>
                      <Col sm="6">
                        <div>
                          <div>
                            <h5 className="font-size-15">Order Date:</h5>
                            <p>{invoiceDetail.orderDate}</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-size-15">Payment Method:</h5>
                          <p className="mb-1">{invoiceDetail.card}</p>
                          <p>{invoiceDetail.email}</p>
                        </div>
                      </Col>

                    </Row>
                    <div className="py-2 mt-3">
                      <h3 className="font-size-15 fw-bold">Order summary</h3>
                    </div>
                    <div className="p-4 border rounded">
                      <div className="table-responsive">
                        <Table className="table-nowrap align-middle mb-0">
                          <thead>
                            <tr>
                              <th style={{ width: "70px" }}>No.</th>
                              <th>Item</th>
                              <th className="text-end" style={{ width: "120px" }}>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {map(
                              invoiceDetail.orderSummary.items,
                              (item, key) => (
                                <tr key={key}>
                                  <td>{item.id}</td>
                                  <td>
                                    <h5 className="font-size-15 mb-1">{item.item}</h5>
                                    <p className="font-size-13 text-muted mb-0">{item.adminName} </p>
                                  </td>
                                  <td className="text-end">{item.price}</td>
                                </tr>
                              )
                            )}
                            <tr>
                              <td colSpan="2" className="text-end">
                                Sub Total
                              </td>
                              <td className="text-end">
                                {invoiceDetail.orderSummary.subTotal}
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="2" className="border-0 text-end">
                                <strong>Shipping</strong>
                              </td>
                              <td className="border-0 text-end">
                                {invoiceDetail.orderSummary.shipping}
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="2" className="border-0 text-end">
                                <strong>Total</strong>
                              </td>
                              <td className="border-0 text-end">
                                <h4 className="m-0">
                                  {invoiceDetail.orderSummary.total}
                                </h4>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                    <div className="d-print-none mt-4">
                      <div className="float-end">
                        <Link
                          to="#"
                          onClick={printInvoice}
                          className="btn btn-success me-2"
                        >
                          <i className="fa fa-print" />
                        </Link>
                        <Link to="#" className="btn btn-primary w-md ">
                          Send
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(InvoiceDetail)
