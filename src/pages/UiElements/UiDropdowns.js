import React, { useState } from 'react';
import MetaTags from 'react-meta-tags';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    UncontrolledDropdown,
    Dropdown,
    ButtonDropdown,
    Button,
    Form,
    Label,
    Input
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiDropdowns = () => {

    const [btnprimary1, setBtnprimary1] = useState(false);
    const [btnsecondary1, setBtnsecondary1] = useState(false);
    const [btnsuccess1, setBtnsuccess1] = useState(false);
    const [btnInfo1, setBtnInfo1] = useState(false);
    const [btnWarning1, setBtnWarning1] = useState(false);
    const [btnDanger1, setBtnDanger1] = useState(false);
    const [drp_primary1, setDrp_primary1] = useState(false);
    const [drp_secondary1, setDrp_secondary1] = useState(false);
    const [drp_success1, setDrp_success1] = useState(false);
    const [drp_info1, setDrp_info1] = useState(false);
    const [drp_warning1, setDrp_warning1] = useState(false);
    const [drp_danger1, setDrp_danger1] = useState(false);
    const [drp_secondary, setDrp_secondary] = useState(false);
    const [drp_secondary_lg, setDrp_secondary_lg] = useState(false);
    const [drp_secondary_sm, setDrp_secondary_sm] = useState(false);
    const [drp_secondary_sm1, setDrp_secondary_sm1] = useState(false);
    const [dropup1, setDropup1] = useState(false);
    const [drp_up11, setDrp_up11] = useState(false);
    const [info_dropup1, setInfo_dropup1] = useState(false);
    const [infodrp_up11, setInfodrp_up11] = useState(false);

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Dropdowns | Minia - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Components" breadcrumbItem="Dropdowns" />
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Single button dropdowns</h4>
                                    <p className="card-title-desc">Any single <code
                                        className="highlighter-rouge">.btn</code> can be turned into a dropdown
                                        toggle with some markup changes. Here’s how you can put them to work
                                        with either <code className="highlighter-rouge">&lt;button&gt;</code>
                                        elements:
                                    </p>
                                </CardHeader>

                                <CardBody>
                                    <Row>
                                        <Col sm={6}>
                                            <UncontrolledDropdown>
                                                <DropdownToggle className="btn btn-secondary" type="button" tag="a">
                                                    Dropdown button <i className="mdi mdi-chevron-down"></i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem to="#">Action</DropdownItem>
                                                    <DropdownItem to="#">Another action</DropdownItem>
                                                    <DropdownItem to="#">Something else here</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </Col>

                                        <Col sm={6}>
                                            <UncontrolledDropdown className="mt-4 mt-sm-0">
                                                <DropdownToggle tag="a" className="btn btn-secondary">
                                                    Dropdown link <i className="mdi mdi-chevron-down"></i>
                                                </DropdownToggle>

                                                <DropdownMenu>
                                                    <DropdownItem to="#">Action</DropdownItem>
                                                    <DropdownItem to="#">Another action</DropdownItem>
                                                    <DropdownItem to="#">Something else here</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Variant</h4>
                                    <p className="card-title-desc">The best part is you can do this with any button variant, too:</p>
                                </CardHeader>

                                <CardBody>
                                    <div className="d-flex gap-2 flex-wrap">
                                        <Dropdown
                                            isOpen={btnprimary1}
                                            toggle={() => setBtnprimary1(!btnprimary1)}
                                        >
                                            <DropdownToggle tag="button" className="btn btn-primary">
                                                Primary <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>{" "}
                                        &nbsp;
                                        <Dropdown
                                            isOpen={btnsecondary1}
                                            toggle={() => setBtnsecondary1(!btnsecondary1)}
                                        >
                                            <DropdownToggle tag="button" className="btn btn-secondary">
                                                Secondary <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>{" "}
                                        &nbsp;
                                        <Dropdown
                                            isOpen={btnsuccess1}
                                            toggle={() => setBtnsuccess1(!btnsuccess1)}
                                        >
                                            <DropdownToggle tag="button" className="btn btn-success">
                                                Success <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        &nbsp;
                                        <Dropdown
                                            isOpen={btnInfo1}
                                            toggle={() => setBtnInfo1(!btnInfo1)}
                                        >
                                            <DropdownToggle tag="button" className="btn btn-info">
                                                Info <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        &nbsp;
                                        <Dropdown
                                            isOpen={btnWarning1}
                                            toggle={() => setBtnWarning1(!btnWarning1)}
                                        >
                                            <DropdownToggle tag="button" className="btn btn-warning">
                                                Warning <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        &nbsp;
                                        <Dropdown
                                            isOpen={btnDanger1}
                                            toggle={() => setBtnDanger1(!btnDanger1)}
                                        >
                                            <DropdownToggle tag="button" className="btn btn-danger">
                                                Danger <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Dropdown Menu Item Color</h4>
                                    <p className="card-title-desc">Example of dropdown menu item color</p>
                                </CardHeader>

                                <CardBody>
                                    <Row>
                                        <Col lg={3}>

                                            <div className="">
                                                <h5 className="font-size-13 mb-3">Dropdown Menu Success link example</h5>
                                                <div className="clearfix">
                                                    <DropdownMenu className="d-inline-block position-relative dropdownmenu-success" style={{ zIndex: '1' }}>
                                                        <DropdownItem to="#">Action</DropdownItem>
                                                        <DropdownItem to="#">Another action</DropdownItem>
                                                        <DropdownItem className="active" to="#">Something else here</DropdownItem>
                                                        <div className="dropdown-divider"></div>
                                                        <DropdownItem to="#">Separated link</DropdownItem>
                                                    </DropdownMenu>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={9}>
                                            <div className="mt-lg-0 mt-3">
                                                <h5 className="font-size-13 mb-0">Dropdown Menu link Color example</h5>
                                                <div>
                                                    <Row>
                                                        <Col lg={4} sm={6}>
                                                            <div className="mt-3">
                                                                <p className="font-size-13 mb-2">Dropdown menu Primary link</p>
                                                                <UncontrolledDropdown>
                                                                    <DropdownToggle color="primary" type="button">Primary <i className="mdi mdi-chevron-down"></i></DropdownToggle>
                                                                    <DropdownMenu className="dropdownmenu-primary">
                                                                        <DropdownItem to="#">Action</DropdownItem>
                                                                        <DropdownItem to="#">Another action</DropdownItem>
                                                                        <DropdownItem to="#">Something else here</DropdownItem>
                                                                        <div className="dropdown-divider"></div>
                                                                        <DropdownItem to="#">Separated link</DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} sm={6}>
                                                            <div className="mt-3">
                                                                <p className="font-size-13 mb-2">Dropdown menu Secondary link</p>
                                                                <UncontrolledDropdown>
                                                                    <DropdownToggle type="button" className="btn btn-secondary">Secondary <i className="mdi mdi-chevron-down"></i></DropdownToggle>
                                                                    <DropdownMenu className="dropdownmenu-secondary">
                                                                        <DropdownItem to="#">Action</DropdownItem>
                                                                        <DropdownItem to="#">Another action</DropdownItem>
                                                                        <DropdownItem to="#">Something else here</DropdownItem>
                                                                        <div className="dropdown-divider"></div>
                                                                        <DropdownItem to="#">Separated link</DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} sm={6}>
                                                            <div className="mt-3">
                                                                <p className="font-size-13 mb-2">Dropdown menu Success link</p>
                                                                <UncontrolledDropdown>
                                                                    <DropdownToggle type="button" className="btn btn-success">Success <i className="mdi mdi-chevron-down"></i></DropdownToggle>
                                                                    <DropdownMenu className="dropdownmenu-success">
                                                                        <DropdownItem to="#">Action</DropdownItem>
                                                                        <DropdownItem to="#">Another action</DropdownItem>
                                                                        <DropdownItem to="#">Something else here</DropdownItem>
                                                                        <div className="dropdown-divider"></div>
                                                                        <DropdownItem to="#">Separated link</DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} sm={6}>
                                                            <div className="mt-3">
                                                                <p className="font-size-13 mb-2">Dropdown menu Warning link</p>
                                                                <UncontrolledDropdown>
                                                                    <DropdownToggle type="button" className="btn btn-warning">Warning <i className="mdi mdi-chevron-down"></i></DropdownToggle>
                                                                    <DropdownMenu className="dropdownmenu-warning">
                                                                        <DropdownItem to="#">Action</DropdownItem>
                                                                        <DropdownItem to="#">Another action</DropdownItem>
                                                                        <DropdownItem to="#">Something else here</DropdownItem>
                                                                        <div className="dropdown-divider"></div>
                                                                        <DropdownItem to="#">Separated link</DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} sm={6}>
                                                            <div className="mt-3">
                                                                <p className="font-size-13 mb-2">Dropdown menu Info link</p>
                                                                <UncontrolledDropdown>
                                                                    <DropdownToggle type="button" className="btn btn-info">Info <i className="mdi mdi-chevron-down"></i></DropdownToggle>
                                                                    <DropdownMenu className="dropdownmenu-info">
                                                                        <DropdownItem to="#">Action</DropdownItem>
                                                                        <DropdownItem to="#">Another action</DropdownItem>
                                                                        <DropdownItem to="#">Something else here</DropdownItem>
                                                                        <div className="dropdown-divider"></div>
                                                                        <DropdownItem to="#">Separated link</DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} sm={6}>
                                                            <div className="mt-3">
                                                                <p className="font-size-13 mb-2">Dropdown menu Danger link</p>
                                                                <UncontrolledDropdown>
                                                                    <DropdownToggle type="button" className="btn btn-danger">Danger <i className="mdi mdi-chevron-down"></i></DropdownToggle>
                                                                    <DropdownMenu className="dropdownmenu-danger">
                                                                        <DropdownItem to="#">Action</DropdownItem>
                                                                        <DropdownItem to="#">Another action</DropdownItem>
                                                                        <DropdownItem to="#">Something else here</DropdownItem>
                                                                        <div className="dropdown-divider"></div>
                                                                        <DropdownItem to="#">Separated link</DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <div className="card-header">
                                    <h4 className="card-title">Split Button Dropdowns</h4>
                                    <p className="card-title-desc">The best part is you can do this with any button variant, too:</p>
                                </div>

                                <CardBody>
                                    <div className="d-flex gap-2 flex-wrap">
                                        <div className="btn-group">
                                            <ButtonDropdown
                                                isOpen={drp_primary1}
                                                toggle={() => setDrp_primary1(!drp_primary1)}
                                            >
                                                <Button id="caret" color="primary">
                                                    Primary
                                                </Button>
                                                <DropdownToggle caret color="primary">
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>Header</DropdownItem>
                                                    <DropdownItem disabled>Action</DropdownItem>
                                                    <DropdownItem>Another Action</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Another Action</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>

                                        <div className="btn-group">
                                            <ButtonDropdown
                                                isOpen={drp_secondary1}
                                                toggle={() => setDrp_secondary1(!drp_secondary1)}
                                            >
                                                <Button id="caret" color="secondary">
                                                    Secondary
                                                </Button>
                                                <DropdownToggle caret color="secondary">
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>Header</DropdownItem>
                                                    <DropdownItem disabled>Action</DropdownItem>
                                                    <DropdownItem>Another Action</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Another Action</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>

                                        <div className="btn-group">
                                            <ButtonDropdown
                                                isOpen={drp_success1}
                                                toggle={() => setDrp_success1(!drp_success1)}
                                            >
                                                <Button id="caret" color="success">
                                                    Success
                                                </Button>
                                                <DropdownToggle caret color="success">
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>Header</DropdownItem>
                                                    <DropdownItem disabled>Action</DropdownItem>
                                                    <DropdownItem>Another Action</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Another Action</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>

                                        <div className="btn-group">
                                            <ButtonDropdown
                                                isOpen={drp_info1}
                                                toggle={() => setDrp_info1(!drp_info1)}
                                            >
                                                <Button id="caret" color="info">
                                                    Info
                                                </Button>
                                                <DropdownToggle caret color="info">
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>Header</DropdownItem>
                                                    <DropdownItem disabled>Action</DropdownItem>
                                                    <DropdownItem>Another Action</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Another Action</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>


                                        <div className="btn-group">
                                            <ButtonDropdown
                                                isOpen={drp_warning1}
                                                toggle={() => setDrp_warning1(!drp_warning1)}
                                            >
                                                <Button id="caret" color="warning">
                                                    Warning
                                                </Button>
                                                <DropdownToggle caret color="warning">
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>Header</DropdownItem>
                                                    <DropdownItem disabled>Action</DropdownItem>
                                                    <DropdownItem>Another Action</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Another Action</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>

                                        <div className="btn-group">
                                            <ButtonDropdown
                                                isOpen={drp_danger1}
                                                toggle={() => setDrp_danger1(!drp_danger1)}
                                            >
                                                <Button id="caret" color="danger">
                                                    Danger
                                                </Button>
                                                <DropdownToggle caret color="danger">
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>Header</DropdownItem>
                                                    <DropdownItem disabled>Action</DropdownItem>
                                                    <DropdownItem>Another Action</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Another Action</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <div className="card-header">
                                    <h4 className="card-title">Sizing</h4>
                                    <p className="card-title-desc">Button dropdowns work with buttons of
                                        all sizes, including default and split dropdown buttons.</p>
                                </div>

                                <CardBody>

                                    <div className="btn-group me-1 mt-2">
                                        <ButtonDropdown
                                            isOpen={drp_secondary}
                                            toggle={() => setDrp_secondary(!drp_secondary)}
                                        >
                                            <DropdownToggle
                                                caret
                                                color="primary"
                                                className="btn btn-primary btn-lg"
                                            >
                                                Large button &nbsp;{" "}
                                                <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem disabled>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                    <div className="btn-group me-1 mt-2">
                                        <ButtonDropdown
                                            isOpen={drp_secondary_lg}
                                            toggle={() => setDrp_secondary_lg(!drp_secondary_lg)}
                                        >
                                            <Button className="btn btn-secondary">
                                                {" "}
                                                Large button &nbsp;
                                            </Button>
                                            <DropdownToggle
                                                caret
                                                color="secondary"
                                                className="btn btn-secondary btn-lg"
                                            >
                                                <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem disabled>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>

                                    <div className="btn-group me-1 mt-2">
                                        <ButtonDropdown
                                            isOpen={drp_secondary_sm}
                                            toggle={() => setDrp_secondary_sm(!drp_secondary_sm)}
                                        >
                                            <DropdownToggle
                                                caret
                                                color="info"
                                                className="btn btn-info btn-sm"
                                            >
                                                Small button &nbsp;{" "}
                                                <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem disabled>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                    <div className="btn-group me-1 mt-2">
                                        <ButtonDropdown
                                            isOpen={drp_secondary_sm1}
                                            toggle={() => setDrp_secondary_sm1(!drp_secondary_sm1)}
                                        >
                                            <Button className="btn btn-secondary btn-sm">
                                                {" "}
                                                Small button &nbsp;
                                            </Button>
                                            <DropdownToggle
                                                caret
                                                color="secondary"
                                                className="btn btn-secondary btn-sm"
                                            >
                                                <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem disabled>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <div className="card-header">
                                    <h4 className="card-title">Menu Content</h4>
                                    <p className="card-title-desc">Example of dropdown menu Headers, Text, Forms content</p>
                                </div>

                                <CardBody>
                                    <div className="d-flex flex-wrap gap-2">

                                        <UncontrolledDropdown>
                                            <DropdownToggle type="button" className="btn btn-primary" tag="a">
                                                Header <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <div className="dropdown-header noti-title">
                                                    <h5 className="font-size-13 text-muted text-truncate mn-0">Welcome Jessie!</h5>
                                                </div>

                                                <DropdownItem to="#">Action</DropdownItem>
                                                <DropdownItem to="#">Another action</DropdownItem>
                                                <DropdownItem to="#">Something else here</DropdownItem>
                                                <div className="dropdown-divider"></div>
                                                <DropdownItem to="#">Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>


                                        <UncontrolledDropdown>
                                            <DropdownToggle type="button" className="btn btn-success" tag="a">
                                                Text <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-md p-3">
                                                <p>
                                                    Some example text that's free-flowing within the dropdown menu.
                                                </p>
                                                <p className="mb-0">
                                                    And this is more example text.
                                                </p>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>


                                        <UncontrolledDropdown>
                                            <DropdownToggle type="button" className="btn btn-light" tag="a">
                                                Forms <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-md p-4">
                                                <Form>
                                                    <div className="mb-2">
                                                        <Label className="form-label" htmlFor="exampleDropdownFormEmail">Email address</Label>
                                                        <Input type="email" className="form-control" id="exampleDropdownFormEmail"
                                                            placeholder="email@example.com" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <Label className="form-label" htmlFor="exampleDropdownFormPassword">Password</Label>
                                                        <Input type="password" className="form-control" id="exampleDropdownFormPassword" placeholder="Password" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <div className="form-check custom-checkbox">
                                                            <Input type="checkbox" className="form-check-input" id="rememberdropdownCheck" />
                                                            <Label className="form-check-label" htmlFor="rememberdropdownCheck">Remember me</Label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                                </Form>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <div className="card-header">
                                    <h4 className="card-title">Menu Alignment</h4>
                                    <p className="card-title-desc">Add <code className="highlighter-rouge">.dropdown-menu-end</code>
                                        to a <code className="highlighter-rouge">.dropdown-menu</code> to right
                                        align the dropdown menu.</p>
                                </div>

                                <CardBody>
                                    <UncontrolledDropdown className="d-inline-block">
                                        <DropdownToggle type="button" className="btn btn-secondary" tag="a">
                                            Menu is right-aligned <i className="mdi mdi-chevron-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-end">
                                            <DropdownItem to="#">Action</DropdownItem>
                                            <DropdownItem to="#">Another action</DropdownItem>
                                            <DropdownItem to="#">Something else here</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <div className="card-header">
                                    <h4 className="card-title">Dropup Variation</h4>
                                    <p className="card-title-desc">Trigger dropdown menus above elements
                                        by adding <code className="highlighter-rouge">.dropup</code> to the parent
                                        element.</p>
                                </div>

                                <CardBody>
                                    <div className="d-flex gap-2 flex-wrap">

                                        <Dropdown direction="up" isOpen={dropup1}
                                            toggle={() => setDropup1(!dropup1)}
                                        >
                                            <DropdownToggle type="button" className="btn btn-info">Dropup <i className="mdi mdi-chevron-up"></i></DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem to="#">Action</DropdownItem>
                                                <DropdownItem to="#">Another action</DropdownItem>
                                                <DropdownItem to="#">Something else here</DropdownItem>
                                                <div className="dropdown-divider"></div>
                                                <DropdownItem to="#">Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>


                                        <ButtonDropdown
                                            direction="up"
                                            isOpen={drp_up11}
                                            toggle={() => setDrp_up11(!drp_up11)}
                                        >
                                            <Button id="caret" color="info" tag="a">
                                                Split dropup
                                            </Button>
                                            <DropdownToggle caret color="info">
                                                <i className="mdi mdi-chevron-up" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem header>Header</DropdownItem>
                                                <DropdownItem disabled>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <div className="card-header">
                                    <h4 className="card-title">Dropright Variation</h4>
                                    <p className="card-title-desc">Trigger dropdown menus at the right of the elements by adding <code>.dropend</code> to the parent element.
                                    </p>
                                </div>

                                <CardBody>
                                    <div className="d-flex gap-2 flex-wrap">

                                        <Dropdown
                                            isOpen={info_dropup1}
                                            direction="right"
                                            className="btn-group dropend"
                                            toggle={() => setInfo_dropup1(!info_dropup1)}
                                        >
                                            <DropdownToggle className="btn btn-info" caret>
                                                Dropright <i className="mdi mdi-chevron-right" />
                                            </DropdownToggle>
                                            <DropdownMenu data-popper-placement="right-start">
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>


                                        <ButtonDropdown
                                            direction="right"
                                            isOpen={infodrp_up11}
                                            className="btn-group dropend"
                                            toggle={() => setInfodrp_up11(!infodrp_up11)}
                                        >
                                            <Button id="caret" color="info">
                                                Split dropright
                                            </Button>
                                            <DropdownToggle caret color="info" className="dropdown-toggle-split">
                                                <i className="mdi mdi-chevron-right" />
                                            </DropdownToggle>
                                            <DropdownMenu data-popper-placement="right-start">
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default UiDropdowns;