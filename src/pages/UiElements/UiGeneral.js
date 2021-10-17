import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Tooltip,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Spinner,
  Badge,
  UncontrolledPopover,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardHeader,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiGeneral = () => {
  const [popovertop, setpopovertop] = useState(false);
  const [popoverleft, setpopoverleft] = useState(false);
  const [popoverright, setpopoverright] = useState(false);
  const [popoverbottom, setpopoverbottom] = useState(false);
  const [popoverdismiss, setpopoverdismiss] = useState(false);

  const [ttop, setttop] = useState(false);
  const [tbottom, settbottom] = useState(false);
  const [tleft, settleft] = useState(false);
  const [tright, settright] = useState(false);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>General | Minia - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Components" breadcrumbItem="General" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardSubtitle>
                    Add any of the below mentioned modifier classes to
                    change the appearance of a badge.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div>
                    <h5 className="font-size-14">Default</h5>
                    <div className="mt-1">
                      <Badge className="me-2 bg-primary">
                        Primary
                      </Badge>
                      <Badge className="me-2 bg-success">
                        Success
                      </Badge>
                      <Badge className="me-2 bg-info">
                        Info
                      </Badge>
                      <Badge className="me-2 bg-warning">
                        Warning
                      </Badge>
                      <Badge className="me-2 bg-danger">
                        Danger
                      </Badge>
                      <Badge className="me-2 bg-dark">
                        Dark
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="font-size-14">Soft Badge</h5>
                    <div className="mt-1">
                      <Badge pill className="badge-soft-primary ms-1">
                        Primary
                      </Badge>
                      <Badge pill className="badge-soft-success me-1">
                        Success
                      </Badge>
                      <Badge pill className="badge-soft-info me-1">
                        Info
                      </Badge>
                      <Badge pill className="badge-soft-warning me-1">
                        Warning
                      </Badge>
                      <Badge pill className="badge-soft-danger me-1">
                        Danger
                      </Badge>
                      <Badge pill className="badge-soft-dark me-1">
                        Dark
                      </Badge>
                    </div>
                  </div>
                </CardBody>

              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Pill badges</CardTitle>
                  <CardSubtitle>
                    Use the <code>.rounded-pill</code> modifier class to make
                    badges more rounded.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>

                  <div>
                    <h5 className="font-size-14">Default</h5>
                    <div className="mt-1">
                      <Badge className="me-1 rounded-pill bg-primary">
                        Primary
                      </Badge>
                      <Badge className="me-1 rounded-pill bg-success">
                        Success
                      </Badge>
                      <Badge className="me-1 rounded-pill bg-info">
                        Info
                      </Badge>
                      <Badge className="me-1 rounded-pill bg-warning">
                        Warning
                      </Badge>
                      <Badge className="me-1 rounded-pill bg-danger">
                        Danger
                      </Badge>
                      <Badge className="me-1 rounded-pill bg-dark">
                        Dark
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-size-14">Soft Badge</h5>
                    <div className="mt-1">
                      <Badge pill className="rounded-pill badge-soft-primary ms-1">
                        Primary
                      </Badge>
                      <Badge pill className="rounded-pill badge-soft-success ms-1">
                        Success
                      </Badge>
                      <Badge pill className="rounded-pill badge-soft-info ms-1">
                        Info
                      </Badge>
                      <Badge pill className="rounded-pill badge-soft-warning ms-1">
                        Warning
                      </Badge>
                      <Badge pill className="rounded-pill badge-soft-danger ms-1">
                        Danger
                      </Badge>
                      <Badge pill className="rounded-pill badge-soft-dark ms-1">
                        Dark
                      </Badge>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Row>
              <Col lg={6}>
                <Card>
                  <CardHeader>
                    <CardTitle>Badges in Buttons</CardTitle>
                    <p className="card-title-desc">Badges can be used as part of links or buttons to provide a counter.</p>
                  </CardHeader>

                  <CardBody>
                    <div className="d-flex flex-wrap gap-2">
                      <button type="button" className="btn btn-primary">
                        Notifications <span className="badge bg-success ms-1">4</span>
                      </button>
                      <button type="button" className="btn btn-success">
                        Messages <span className="badge bg-danger ms-1">2</span>
                      </button>
                      <button type="button" className="btn btn-outline-secondary">
                        Draft <span className="badge bg-success ms-1">2</span>
                      </button>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardHeader>
                    <CardTitle>Badges Position Examples</CardTitle>
                    <p className="card-title-desc">Example of Badges Position</p>
                  </CardHeader>

                  <CardBody>
                    <div className="d-flex flex-wrap gap-3">
                      <button type="button" className="btn btn-primary position-relative">
                        Mails <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">+99 <span className="visually-hidden">unread messages</span></span>
                      </button>


                      <button type="button" className="btn btn-light position-relative">
                        Alerts <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span>
                      </button>

                      <button type="button" className="btn btn-primary position-relative p-0 avatar-sm rounded">
                        <span className="avatar-title bg-transparent">
                          <i className="bx bxs-envelope"></i>
                        </span>
                        <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span>
                      </button>

                      <button type="button" className="btn btn-light position-relative p-0 avatar-sm rounded-circle">
                        <span className="avatar-title bg-transparent text-reset">
                          <i className="bx bxs-bell"></i>
                        </span>
                      </button>

                      <button type="button" className="btn btn-light position-relative p-0 avatar-sm rounded-circle">
                        <span className="avatar-title bg-transparent text-reset">
                          <i className="bx bx-menu"></i>
                        </span>
                        <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"><span className="visually-hidden">unread messages</span></span>
                      </button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Popovers</CardTitle>
                  <CardSubtitle>
                    Add small overlay content, like those found in iOS, to any
                    element for housing secondary information.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      id="Popovertop"
                      color="secondary"
                      onClick={() => {
                        setpopovertop(!popovertop)
                      }}
                    >
                      Popover on top
                    </Button>
                    <Popover
                      placement="top"
                      isOpen={popovertop}
                      target="Popovertop"
                      toggle={() => {
                        setpopovertop(!popovertop)
                      }}
                    >
                      <PopoverHeader>Popover Title</PopoverHeader>
                      <PopoverBody>
                        Sed posuere consectetur est at lobortis. Aenean eu leo
                        quam. Pellentesque ornare sem lacinia quam venenatis
                        vestibulum.
                      </PopoverBody>
                    </Popover>{" "}

                    <Button
                      id="Popoverright"
                      onClick={() => {
                        setpopoverright(!popoverright)
                      }}
                      color="secondary"
                    >
                      Popover on right
                    </Button>
                    <Popover
                      placement="right"
                      isOpen={popoverright}
                      target="Popoverright"
                      toggle={() => {
                        setpopoverright(!popoverright)
                      }}
                    >
                      <PopoverHeader>Popover Title</PopoverHeader>
                      <PopoverBody>
                        Sed posuere consectetur est at lobortis. Aenean eu leo
                        quam. Pellentesque ornare sem lacinia quam venenatis
                        vestibulum.
                      </PopoverBody>
                    </Popover>{" "}

                    <Button
                      id="Popoverbottom"
                      onClick={() => {
                        setpopoverbottom(!popoverbottom)
                      }}
                      color="secondary"
                    >
                      Popover on bottom
                    </Button>
                    <Popover
                      placement="bottom"
                      isOpen={popoverbottom}
                      target="Popoverbottom"
                      toggle={() => {
                        setpopoverbottom(!popoverbottom)
                      }}
                    >
                      <PopoverHeader>Popover Title</PopoverHeader>
                      <PopoverBody>
                        Sed posuere consectetur est at lobortis. Aenean eu leo
                        quam. Pellentesque ornare sem lacinia quam venenatis
                        vestibulum.
                      </PopoverBody>
                    </Popover>{" "}

                    <Button
                      id="Popoverleft"
                      onClick={() => {
                        setpopoverleft(!popoverleft)
                      }}
                      color="secondary"
                    >
                      Popover on left
                    </Button>
                    <Popover
                      placement="left"
                      isOpen={popoverleft}
                      target="Popoverleft"
                      toggle={() => {
                        setpopoverleft(!popoverleft)
                      }}
                    >
                      <PopoverHeader>Popover Title</PopoverHeader>
                      <PopoverBody>
                        Sed posuere consectetur est at lobortis. Aenean eu leo
                        quam. Pellentesque ornare sem lacinia quam venenatis
                        vestibulum.
                      </PopoverBody>
                    </Popover>{" "}

                    <Button
                      id="Popoverdismiss"
                      className="btn btn-success"
                      onClick={() => {
                        setpopoverdismiss(!popoverdismiss)
                      }}
                    >
                      Dismissible popover
                    </Button>
                    <UncontrolledPopover
                      trigger="focus"
                      target="Popoverdismiss"
                      placement="right"
                    >
                      <PopoverHeader>Dismissible popover</PopoverHeader>
                      <PopoverBody>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                      </PopoverBody>
                    </UncontrolledPopover>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Tooltips</CardTitle>
                  <CardSubtitle>
                    Hover over the links below to see tooltips:
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="d-flex flex-wrap gap-2">
                    <Tooltip
                      placement="top"
                      isOpen={ttop}
                      target="TooltipTop"
                      toggle={() => {
                        setttop(!ttop)
                      }}
                    >
                      Hello world!
                    </Tooltip>
                    <Tooltip
                      placement="right"
                      isOpen={tright}
                      target="TooltipRight"
                      toggle={() => {
                        settright(!tright)
                      }}
                    >
                      Hello world!
                    </Tooltip>
                    <Tooltip
                      placement="bottom"
                      isOpen={tbottom}
                      target="TooltipBottom"
                      toggle={() => {
                        settbottom(!tbottom)
                      }}
                    >
                      Hello world!
                    </Tooltip>
                    <Tooltip
                      placement="left"
                      isOpen={tleft}
                      target="TooltipLeft"
                      toggle={() => {
                        settleft(!tleft)
                      }}
                    >
                      Hello world!
                    </Tooltip>

                    <button
                      type="button"
                      className="btn btn-primary"
                      id="TooltipTop"
                    >
                      {" "}
                      Tooltip on top
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="TooltipBottom"
                    >
                      {" "}
                      Tooltip on Bottom
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="TooltipLeft"
                    >
                      {" "}
                      Tooltip on Left
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="TooltipRight"
                    >
                      {" "}
                      Tooltip on Right
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle className="mb-4">Pagination Default Example</CardTitle>
                  <p className="card-title-desc">Pagination links indicate a series of related content exists across multiple pages.</p>
                </CardHeader>
                <CardBody>

                  <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                      <PaginationLink href="#">Previous</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">Next</PaginationLink>
                    </PaginationItem>
                  </Pagination>

                  <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                      <PaginationLink href="#" previous>
                        <i className="mdi mdi-chevron-left" />
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next>
                        <i className="mdi mdi-chevron-right" />
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Pagination Disabled and Active</CardTitle>
                  <CardSubtitle>
                    Pagination links are customizable for different
                    circumstances. Use <code>.disabled</code> for links that
                    appear un-clickable and <code>.active</code> to indicate
                    the current page.
                  </CardSubtitle>
                </CardHeader>

                <CardBody>
                  <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled>
                      <PaginationLink href="#" tabIndex="-1">
                        Previous
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink href="#">
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">Next</PaginationLink>
                    </PaginationItem>
                  </Pagination>

                  <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled>
                      <PaginationLink>
                        <i className="mdi mdi-chevron-left" />
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink>
                        2<span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        <i className="mdi mdi-chevron-right" />
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </CardBody>
              </Card>
            </Col>

            <Row>
              <Col xl={6}>
                <Card>
                  <CardHeader>
                    <CardTitle>Pagination Sizing</CardTitle>
                    <CardSubtitle>
                      Fancy larger or smaller pagination? Add{" "}
                      <code>.pagination-lg</code> or{" "}
                      <code>.pagination-sm</code> for additional sizes.
                    </CardSubtitle>
                  </CardHeader>

                  <CardBody>
                    <Pagination
                      size="lg"
                      aria-label="Page navigation example"
                    >
                      <PaginationItem disabled>
                        <PaginationLink href="#" tabIndex="-1">
                          Previous
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">Next</PaginationLink>
                      </PaginationItem>
                    </Pagination>

                    <Pagination
                      size="sm"
                      aria-label="Page navigation example"
                    >
                      <PaginationItem disabled>
                        <PaginationLink href="#" tabIndex="-1">
                          Previous
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">Next</PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </CardBody>
                </Card>
              </Col>

              <Col xl={6}>
                <Card>
                  <CardHeader>
                    <CardTitle>Alignment</CardTitle>
                    <CardSubtitle>
                      Change the alignment of pagination components with
                      flexbox utilities.
                    </CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <Pagination
                      aria-label="Page navigation example"
                      listClassName="justify-content-center"
                    >
                      <PaginationItem disabled>
                        <PaginationLink href="#" tabIndex="-1">
                          Previous
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">Next</PaginationLink>
                      </PaginationItem>
                    </Pagination>

                    <Pagination
                      aria-label="Page navigation example"
                      listClassName="justify-content-end"
                    >
                      <PaginationItem disabled>
                        <PaginationLink href="#" tabIndex="-1">
                          Previous
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">Next</PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </CardBody>
                </Card>
              </Col>
            </Row>

          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Border spinner</CardTitle>
                  <CardSubtitle>
                    Use the border spinners for a lightweight loading indicator.
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div>
                    <Spinner className="ms-2" color="primary" />
                    <Spinner className="ms-2" color="secondary" />
                    <Spinner className="ms-2" color="success" />
                    <Spinner className="ms-2" color="danger" />
                    <Spinner className="ms-2" color="warning" />
                    <Spinner className="ms-2" color="info" />
                    <Spinner className="ms-2" color="light" />
                    <Spinner className="ms-2" color="dark" />
                  </div>
                </CardBody>{" "}
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Growing spinner</CardTitle>
                  <CardSubtitle>
                    If you don’t fancy a border spinner, switch to the grow
                    spinner. While it doesn’t technically spin, it does
                    repeatedly grow!
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div>
                    <Spinner type="grow" className="ms-2" color="primary" />
                    <Spinner type="grow" className="ms-2" color="secondary" />
                    <Spinner type="grow" className="ms-2" color="success" />
                    <Spinner type="grow" className="ms-2" color="danger" />
                    <Spinner type="grow" className="ms-2" color="warning" />
                    <Spinner type="grow" className="ms-2" color="info" />
                    <Spinner type="grow" className="ms-2" color="light" />
                    <Spinner type="grow" className="ms-2" color="dark" />
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

export default UiGeneral
