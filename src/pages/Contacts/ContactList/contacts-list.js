import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import { withRouter, Link } from "react-router-dom"
import LineApexChart from "../../AllCharts/apex/chartapex"
import DashedLine from "../../AllCharts/apex/dashedLine"
import { WidgetsData } from "../../../common/data/dashboard";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  CardHeader,
  CardTitle
} from "reactstrap"

import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator"
import CountUp from "react-countup";
import ReactApexChart from "react-apexcharts"

import { AvForm, AvField } from "availity-reactstrap-validation"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"

import * as images from "../../../assets/images"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import {
  getUsers as onGetUsers,
  addNewUser as onAddNewUser,
  updateUser as onUpdateUser,
  deleteUser as onDeleteUser,
} from "../../../store/actions"
import { isEmpty, size, map } from "lodash"

//redux
import { useSelector, useDispatch } from "react-redux"

const ContactsList = props => {
  const dispatch = useDispatch()

  const { users } = useSelector(state => ({
    users: state.contacts.users
  }));

  const [userList, setUserList] = useState([])
  const [modal, setModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const { SearchBar } = Search

  const pageOptions = {
    sizePerPage: 10,
    totalSize: users.length, // replace later with size(users),
    custom: true,
  }

  const defaultSorted = [
    {
      dataField: "id", // if dataField is not match to any column you defined, it will be ignored.
      order: "desc", // desc or asc
    },
  ]

  // const selectRow = {
  //   mode: "checkbox",
  // }

  const contactListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      formatter: (cellContent, user) => <>{user.id}</>,
    },
    {
      dataField: "img",
      text: "#",
      formatter: (cellContent, user) => (
        <>
          {!user.img ? (
            <div className="avatar-sm d-inline-block align-middle me-2">
              <div className="avatar-title bg-soft-light text-light font-size-24 m-0 rounded-circle">
                <i className="bx bxs-user-circle"></i>
              </div>
            </div>
          ) : (
            <div>
              <img
                className="rounded-circle avatar-sm"
                src={images[user.img]}
                alt=""
              />
            </div>
          )}
        </>
      ),
    },
    {
      text: "Нэр",
      dataField: "name",
      sort: true,
      formatter: (cellContent, user) => (
        <>
          <h5 className="font-size-14 mb-1">
            <Link to="#" className="text-dark">
              {user.name}
            </Link>
          </h5>
          <p className="text-muted mb-0">{user.designation}</p>
        </>
      ),
    },
    {
      dataField: "email",
      text: "Мэйл хаяг",
      sort: true,
    },
    {
      dataField: "projects",
      text: "Огноо",
      sort: true,
    },
    {
      dataField: "menu",
      isDummyField: true,
      editable: false,
      text: "Устгах",
      formatter: (cellContent, user) => (
        <div className="d-flex gap-3">
          {/* <Link className="text-success" to="#">
            <i
              className="mdi mdi-pencil font-size-18"
              id="edittooltip"
              onClick={() => handleUserClick(user)}
            ></i>
          </Link> */}
          <Link className="text-danger" to="#">
            <i
              className="mdi mdi-delete font-size-18"
              id="deletetooltip"
              onClick={() => handleDeleteUser(user)}
            ></i>
          </Link>
        </div>
      ),
    },
  ]

  useEffect(() => {
    if (users && !users.length) {
      dispatch(onGetUsers())
      setIsEdit(false)
    }
  }, [dispatch, users])

  useEffect(() => {
    setUserList(users)
    setIsEdit(false)
  }, [users])

  const toggle = () => {
    setModal(!modal)
    if (!modal && !isEmpty(users) && !!isEdit) {
      setTimeout(() => {
        setUserList(users)
        setIsEdit(false)
      }, 500)
    }
  }

  const handleUserClick = arg => {
    const user = arg

    setUserList({
      id: user.id,
      name: user.name,
      designation: user.designation,
      email: user.email,
      tags: user.tags,
      projects: user.projects,
    })
    setIsEdit(true)

    toggle()
  }

  const handleDeleteUser = user => {
    dispatch(onDeleteUser(user))
  }

  /**
   * Handling submit user on user form
   */
  const handleValidUserSubmit = (e, values) => {
    if (isEdit) {
      const updateUser = {
        id: userList.id,
        name: values.name,
        designation: values.designation,
        tags: values.tags,
        email: values.email,
        projects: values.projects,
      }

      // update user
      dispatch(onUpdateUser(updateUser))
      setIsEdit(false)
    } else {
      const newUser = {
        id: Math.floor(Math.random() * (30 - 20)) + 20,
        name: values["name"],
        designation: values["designation"],
        email: values["email"],
        tags: values["tags"],
        projects: values["projects"],
      }
      // save new user
      dispatch(onAddNewUser(newUser))
    }
    toggle()
  }
  const handleUserClicks = () => {
    setUserList("")
    setIsEdit(false)
    toggle()
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>User List | Minia - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          {/* <Breadcrumbs title="Contacts" breadcrumbItem="Хэрэглэгчдийн хүснэгт" /> */}
          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Таалагдсан болон таалагдаагүй</CardTitle>
                </CardHeader>
                <CardBody>
                  <div dir="ltr">
                    <LineApexChart />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Төслийн танилцуулга орсон цагаас хойших иргэдийн хандалт</CardTitle>
                </CardHeader>
                <CardBody>
                  <div dir="ltr">
                    <DashedLine />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    keyField="id"
                    columns={contactListColumns}
                    data={users}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        data={users}
                        columns={contactListColumns}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="mb-2">

                              <div className="row align-ite  ms-center">

                              </div>
                              <Col sm="4">

                              </Col>
                            </Row>
                            <Row>
                              <Col xl="12">
                                <div className="table-responsive">
                                  <BootstrapTable
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                    // selectRow={selectRow}
                                    defaultSorted={defaultSorted}
                                    classes={
                                      "table align-middle table-nowrap table-hover"
                                    }
                                    bordered={false}
                                    striped={false}
                                    responsive
                                  />

                                  <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle} tag="h4">
                                      {!!isEdit ? "Edit User" : "Add User"}
                                    </ModalHeader>
                                    <ModalBody>
                                      <AvForm
                                        onValidSubmit={handleValidUserSubmit}
                                      >
                                        <Row form>
                                          <Col xs={12}>
                                            <div className="mb-3">
                                              <AvField
                                                name="name"
                                                label="Name"
                                                type="text"
                                                errorMessage="Invalid name"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={userList.name || ""}
                                              />
                                            </div>
                                            <div className="mb-3">
                                              <AvField
                                                name="designation"
                                                label="Designation"
                                                type="text"
                                                errorMessage="Invalid Designation"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={
                                                  userList.designation || ""
                                                }
                                              />
                                            </div>
                                            <div className="mb-3">
                                              <AvField
                                                name="email"
                                                label="Email"
                                                type="email"
                                                errorMessage="Invalid Email"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={userList.email || ""}
                                              />
                                            </div>
                                            <div className="mb-3">
                                              <AvField
                                                type="select"
                                                name="tags"
                                                className="form-select"
                                                label="Option"
                                                helpMessage="MULTIPLE!"
                                                multiple={true}
                                                required
                                                value={userList.tags || ""}
                                              >
                                                <option>Photoshop</option>
                                                <option>illustrator</option>
                                                <option>Html</option>
                                                <option>Php</option>
                                                <option>Java</option>
                                                <option>Python</option>
                                                <option>UI/UX Designer</option>
                                                <option>Ruby</option>
                                                <option>Css</option>
                                              </AvField>
                                            </div>
                                            <div className="mb-3">
                                              <AvField
                                                name="projects"
                                                label="Projects"
                                                type="text"
                                                errorMessage="Invalid Projects"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={userList.projects || ""}
                                              />
                                            </div>
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col>
                                            <div className="text-end">
                                              <button
                                                type="submit"
                                                className="btn btn-success save-user"
                                              >
                                                Save
                                              </button>
                                            </div>
                                          </Col>
                                        </Row>
                                      </AvForm>
                                    </ModalBody>
                                  </Modal>
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
  )
}

export default withRouter(ContactsList)
