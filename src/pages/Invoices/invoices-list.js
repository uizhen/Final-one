import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";

import { getInvoices as onGetInvoices } from "../../store/actions";
import Breadcrumbs from "../../components/Common/Breadcrumb";

import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

//redux
import { useSelector, useDispatch } from "react-redux";

const InvoiceList = () => {
  const dispatch = useDispatch();
  const { SearchBar } = Search;

  const { invoices } = useSelector((state) => ({
    invoices: state.invoices.invoices,
  }));

  useEffect(() => {
    dispatch(onGetInvoices());
  }, [dispatch]);

  const pageOptions = {
    sizePerPage: 7,
    totalSize: invoices.length, // replace later with size(users),
    custom: true,
  };

  const defaultSorted = [
    {
      dataField: "id", // if dataField is not match to any column you defined, it will be ignored.
      order: "desc", // desc or asc
    },
  ];

  const selectRow = {
    mode: "checkbox",
  };

  const invoicesListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      formatter: (cellContent, invoices) => <>{invoices.invoiceId}</>,
    },
    {
      text: "Invoice ID",
      dataField: "id",
      sort: true,
      formatter: (cellContent, invoices) => <>{invoices.invoiceId}</>,
    },
    {
      text: "Date",
      dataField: "date",
      sort: true,
      formatter: (cellContent, invoices) => <>{invoices.date}</>,
    },
    {
      text: "Billing Name",
      dataField: "billing_name",
      sort: true,
      formatter: (cellContent, invoices) => <>{invoices.founder}</>,
    },
    {
      text: "Billing Name",
      dataField: "founder_name",
      sort: true,
      formatter: (cellContent, invoices) => <>{invoices.founder}</>,
    },
    {
      text: "Amount",
      dataField: "amount",
      sort: true,
      formatter: (cellContent, invoices) => <>{invoices.Amount}</>,
    },
    {
      text: "Status",
      dataField: "status",
      sort: true,
      formatter: (cellContent, invoices) => (
        <>
          <div
            className={"badge badge-soft-" + invoices.color + " font-size-12"}
          >
            {invoices.status}
          </div>
        </>
      ),
    },
    {
      text: "Download Pdf",
      dataField: "pdf",
      sort: true,
      formatter: () => (
        <>
          <div>
            <button
              type="button"
              className="btn btn-soft-light btn-sm w-xs waves-effect btn-label waves-light"
            >
              <i className="bx bx-download label-icon"></i> Pdf
            </button>
          </div>
        </>
      ),
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Invoice List | Minia - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Invoices" breadcrumbItem="Invoice List" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        data={invoices}
                        columns={invoicesListColumns}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="mb-2">
                              <div className="row align-ite  ms-center">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <h5 className="card-title">
                                      Contact List{" "}
                                      <span className="text-muted fw-normal ms-2">
                                        (834)
                                      </span>
                                    </h5>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                                    <div>
                                      <Nav pills>
                                        <NavItem>
                                          <NavLink
                                            to="/contacts-list"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="List"
                                          >
                                            <i className="bx bx-list-ul"></i>
                                          </NavLink>
                                        </NavItem>
                                        <NavItem>
                                          <NavLink
                                            to="/contacts-grid"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Grid"
                                          >
                                            <i className="bx bx-grid-alt"></i>
                                          </NavLink>
                                        </NavItem>
                                      </Nav>
                                    </div>
                                    <div>
                                      <Link to="#" className="btn btn-light">
                                        <i className="bx bx-plus me-1"></i> Add
                                        New
                                      </Link>
                                    </div>

                                    <UncontrolledDropdown>
                                      <DropdownToggle
                                        className="btn btn-link text-muted py-1 font-size-16 shadow-none"
                                        tag="a"
                                      >
                                        <i className="bx bx-dots-horizontal-rounded"></i>
                                      </DropdownToggle>

                                      <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                          <DropdownItem to="#">
                                            Action
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem to="#">
                                            Another action
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem to="#">
                                            Something else here
                                          </DropdownItem>
                                        </li>
                                      </ul>
                                    </UncontrolledDropdown>
                                  </div>
                                </div>
                              </div>
                              <Col sm="4">
                                <div className="search-box ms-2 mb-2 d-inline-block">
                                  <div className="position-relative">
                                    <SearchBar {...toolkitProps.searchProps} />
                                    <i className="bx bx-search-alt search-icon-search" />
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col xl="12">
                                <div className="table-responsive">
                                  <BootstrapTable
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                    selectRow={selectRow}
                                    defaultSorted={defaultSorted}
                                    classes={
                                      "table align-middle table-nowrap table-hover"
                                    }
                                    responsive
                                    bordered={false}
                                    striped={false}
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row className="align-items-md-center mt-30">
                              <Col className="pagination pagination-rounded justify-content-end mb-2">
                                <PaginationListStandalone
                                  {...paginationProps}
                                />
                              </Col>
                            </Row>
                          </React.Fragment>
                        )}
                      </ToolkitProvider>
                    )}
                  </PaginationProvider>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default InvoiceList;
