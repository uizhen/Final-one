import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Link, withRouter } from "react-router-dom";
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { map } from "lodash";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Card
import CardContact from "./card-contact";

//redux
import { useSelector, useDispatch } from "react-redux";

import { getUsers as onGetUsers } from "../../store/contacts/actions";

const ContactsGrid = (props) => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => ({
    users: state.contacts.users,
  }));

  useEffect(() => {
    if (users && !users.length) {
      dispatch(onGetUsers());
    }
  }, [dispatch, users]);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>User Grid | Minia - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="User Grid" />
          <Row className="align-items-center">
            <Col md={6}>
              <div className="mb-3">
                <h5 className="card-title">
                  Contact List{" "}
                  <span className="text-muted fw-normal ms-2">(834)</span>
                </h5>
              </div>
            </Col>

            <Col md={6}>
              <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                <div>
                  <Nav pills>
                    <NavItem>
                      <NavLink
                        href="/contacts-list"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="List"
                      >
                        <i className="bx bx-list-ul"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="/contacts-grid"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Grid"
                        className="active"
                      >
                        <i className="bx bx-grid-alt"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <div>
                  <Link to="#" className="btn btn-light">
                    <i className="bx bx-plus me-1"></i> Add New
                  </Link>
                </div>

                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn btn-link text-muted py-1 font-size-16 shadow-none"
                    tag="a"
                  >
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </DropdownToggle>

                  <DropdownMenu className="dropdown-menu-end">
                    <li>
                      <DropdownItem to="#">Action</DropdownItem>
                    </li>
                    <li>
                      <DropdownItem to="#">Another action</DropdownItem>
                    </li>
                    <li>
                      <DropdownItem to="#">Something else here</DropdownItem>
                    </li>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </Col>
          </Row>
          <Row>
            {map(users, (user, key) => (
              <CardContact user={user} key={"_user_" + key} />
            ))}
          </Row>

          <Row>
            <Col xs="12">
              <div className="text-center my-3">
                <Link to="#" className="text-success">
                  <i className="bx bx-hourglass bx-spin me-2" />
                  Load more
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ContactsGrid);
