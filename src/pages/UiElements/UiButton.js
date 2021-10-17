import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiButton = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Button | Minia - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Components" breadcrumbItem="Button" />
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Default Buttons</h4>
                                    <p className="card-title-desc">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>
                                </CardHeader>

                                <CardBody>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button type="button" color="primary">Primary</Button>
                                        <Button type="button" color="secondary">Secondary</Button>
                                        <Button type="button" color="success">Success</Button>
                                        <Button type="button" color="info">Info</Button>
                                        <Button type="button" color="warning">Warning</Button>
                                        <Button type="button" color="danger">Danger</Button>
                                        <Button type="button" color="dark">Dark</Button>
                                        <Button type="button" color="link">Link</Button>
                                        <Button type="button" color="light">Light</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Outline Buttons</h4>
                                    <p className="card-title-desc">Replace the default modifier classes with the <code
                                        className="highlighter-rouge">.btn-outline-*</code> ones to remove all background images and colors on any
                                        button.
                                    </p>
                                </CardHeader>

                                <CardBody>
                                    <div className="d-flex flex-wrap gap-2">
                                        <button type="button" className="btn btn-outline-primary waves-effect waves-light">Primary</button>
                                        <button type="button" className="btn btn-outline-secondary waves-effect">Secondary</button>
                                        <button type="button" className="btn btn-outline-success waves-effect waves-light">Success</button>
                                        <button type="button" className="btn btn-outline-info waves-effect waves-light">Info</button>
                                        <button type="button" className="btn btn-outline-warning waves-effect waves-light">Warning</button>
                                        <button type="button" className="btn btn-outline-danger waves-effect waves-light">Danger</button>
                                        <button type="button" className="btn btn-outline-dark waves-effect waves-light">Dark</button>
                                        <button type="button" className="btn btn-outline-light waves-effect">Light</button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Rounded Buttons</h4>
                                    <p className="card-title-desc">Use class <code>.btn-rounded</code> for button round border.</p>
                                </CardHeader>

                                <CardBody>
                                    <div className="d-flex flex-wrap gap-2">
                                        <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light">Primary</button>
                                        <button type="button" className="btn btn-secondary btn-rounded waves-effect waves-light">Secondary</button>
                                        <button type="button" className="btn btn-success btn-rounded waves-effect waves-light">Success</button>
                                        <button type="button" className="btn btn-info btn-rounded waves-effect waves-light">Info</button>
                                        <button type="button" className="btn btn-warning btn-rounded waves-effect waves-light">Warning</button>
                                        <button type="button" className="btn btn-danger btn-rounded waves-effect waves-light">Danger</button>
                                        <button type="button" className="btn btn-dark btn-rounded waves-effect waves-light">Dark</button>
                                        <button type="button" className="btn btn-link btn-rounded waves-effect">Link</button>
                                        <button type="button" className="btn btn-light btn-rounded waves-effect">Light</button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Buttons With Icon</h4>
                                    <p className="card-title-desc">Add icon in button.</p>
                                </CardHeader>

                                <CardBody>
                                    <div className="d-flex flex-wrap gap-2">
                                        <button type="button" className="btn btn-primary waves-effect waves-light">
                                            <i className="bx bx-smile font-size-16 align-middle me-2"></i> Primary
                                        </button>
                                        <button type="button" className="btn btn-success waves-effect waves-light">
                                            <i className="bx bx-check-double font-size-16 align-middle me-2"></i> Success
                                        </button>
                                        <button type="button" className="btn btn-warning waves-effect waves-light">
                                            <i className="bx bx-error font-size-16 align-middle me-2"></i> Warning
                                        </button>
                                        <button type="button" className="btn btn-danger waves-effect waves-light">
                                            <i className="bx bx-block font-size-16 align-middle me-2"></i> Danger
                                        </button>
                                        <button type="button" className="btn btn-dark waves-effect waves-light">
                                            <i className="bx bx-loader bx-spin font-size-16 align-middle me-2"></i> Loading
                                        </button>
                                        <button type="button" className="btn btn-light waves-effect">
                                            <i className="bx bx-hourglass bx-spin font-size-16 align-middle me-2"></i> Loading
                                        </button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Soft Buttons</h4>
                                    <p className="card-title-desc">Soft buttons</p>
                                </CardHeader>

                                <CardBody>
                                    <div className="d-flex flex-wrap gap-2">
                                        <button type="button" className="btn btn-soft-primary waves-effect waves-light">Primary</button>
                                        <button type="button" className="btn btn-soft-secondary waves-effect waves-light">Secondary</button>
                                        <button type="button" className="btn btn-soft-success waves-effect waves-light">Success</button>
                                        <button type="button" className="btn btn-soft-info waves-effect waves-light">Info</button>
                                        <button type="button" className="btn btn-soft-warning waves-effect waves-light">Warning</button>
                                        <button type="button" className="btn btn-soft-danger waves-effect waves-light">Danger</button>
                                        <button type="button" className="btn btn-soft-dark waves-effect waves-light">Dark</button>
                                        <button type="button" className="btn btn-soft-link waves-effect">Link</button>
                                        <button type="button" className="btn btn-soft-light waves-effect">Light</button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Soft Icon Buttons</h4>
                                    <p className="card-title-desc">Use class <code>btn-soft-*</code> for button round border.</p>
                                </CardHeader>

                                <CardBody>
                                    <div className="d-flex flex-wrap gap-2">
                                        <button type="button" className="btn btn-soft-primary waves-effect waves-light"><i className="bx bx-smile font-size-16 align-middle"></i></button>
                                        <button type="button" className="btn btn-soft-success waves-effect waves-light"><i className="bx bx-check-double font-size-16 align-middle"></i></button>
                                        <button type="button" className="btn btn-soft-warning waves-effect waves-light"><i className="bx bx-error font-size-16 align-middle"></i></button>
                                        <button type="button" className="btn btn-soft-danger waves-effect waves-light"><i className="bx bx-block font-size-16 align-middle"></i></button>
                                        <button type="button" className="btn btn-soft-dark waves-effect waves-light"><i className="bx bx-loader font-size-16 align-middle"></i></button>
                                        <button type="button" className="btn btn-soft-light waves-effect waves-light"><i className="bx bx-hourglass font-size-16 align-middle"></i></button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Snip Buttons</h4>
                                    <p className="card-title-desc">Example of Snip Buttons</p>
                                </CardHeader>

                                <CardBody>
                                    <Row className="g-4">
                                        <div className="col-xl-4">
                                            <h5 className="font-size-15 mb-3">Example 1</h5>
                                            <div className="btn-group btn-group-example mb-3" role="group">
                                                <button type="button" className="btn btn-outline-primary w-sm">Left</button>
                                                <button type="button" className="btn btn-outline-primary w-sm">Middle</button>
                                                <button type="button" className="btn btn-outline-primary w-sm">Right</button>
                                            </div>

                                            <div>
                                                <div className="btn-group btn-group-example mb-3" role="group">
                                                    <button type="button" className="btn btn-primary w-xs"><i className="mdi mdi-thumb-up"></i></button>
                                                    <button type="button" className="btn btn-danger w-xs"><i className="mdi mdi-thumb-down"></i></button>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="btn-group btn-group-example" role="group">
                                                    <button type="button" className="btn btn-outline-secondary w-xs"><i className="bx bx-menu-alt-right"></i></button>
                                                    <button type="button" className="btn btn-outline-secondary w-xs"><i className="bx bx-menu"></i></button>
                                                    <button type="button" className="btn btn-outline-secondary w-xs"><i className="bx bx-menu-alt-left"></i></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <h5 className="font-size-15 mb-3">Example 2</h5>
                                            <div className="d-flex flex-wrap gap-2">
                                                <button type="button" className="btn btn-primary waves-effect btn-label waves-light"><i className="bx bx-smile label-icon"></i> Primary</button>
                                                <button type="button" className="btn btn-success waves-effect btn-label waves-light"><i className="bx bx-check-double label-icon"></i> Success</button>
                                                <button type="button" className="btn btn-warning waves-effect btn-label waves-light"><i className="bx bx-error label-icon"></i> Warning</button>
                                                <button type="button" className="btn btn-danger waves-effect btn-label waves-light"><i className="bx bx-block label-icon"></i> Danger</button>
                                                <button type="button" className="btn btn-dark waves-effect btn-label waves-light"><i className="bx bx-loader label-icon"></i> Dark</button>
                                                <button type="button" className="btn btn-light waves-effect btn-label waves-light"><i className="bx bx-hourglass label-icon"></i> Light</button>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <h5 className="font-size-15 mb-3">Example 3</h5>
                                            <div className="d-flex flex-wrap gap-2">
                                                <button type="button" className="btn btn-primary waves-effect waves-light w-sm">
                                                    <i className="mdi mdi-download d-block font-size-16"></i> Download
                                                </button>
                                                <button type="button" className="btn btn-light waves-effect waves-light w-sm">
                                                    <i className="mdi mdi-upload d-block font-size-16"></i> Upload
                                                </button>
                                                <button type="button" className="btn btn-success waves-effect waves-light w-sm">
                                                    <i className="mdi mdi-pencil d-block font-size-16"></i> Edit
                                                </button>
                                                <button type="button" className="btn btn-danger waves-effect waves-light w-sm">
                                                    <i className="mdi mdi-trash-can d-block font-size-16"></i> Delete
                                                </button>
                                            </div>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Buttons Sizes</h4>
                                    <p className="card-title-desc">Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.</p>
                                </CardHeader>

                                <CardBody>
                                    <div className="d-flex flex-wrap gap-3 align-items-center">
                                        <button type="button" className="btn btn-primary btn-lg waves-effect waves-light">Large button</button>
                                        <button type="button" className="btn btn-secondary btn-lg waves-effect waves-light">Large button</button>
                                        <button type="button" className="btn btn-primary btn-sm waves-effect waves-light">Small button</button>
                                        <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Small button</button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Buttons Width</h4>
                                    <p className="card-title-desc">Add <code>.w-xs</code>, <code>.w-sm</code>, <code>.w-md</code> and <code> .w-lg</code> class for additional buttons width.</p>
                                </CardHeader>

                                <CardBody>
                                    <div className="d-flex flex-wrap gap-2">
                                        <button type="button" className="btn btn-primary w-xs waves-effect waves-light">Xs</button>
                                        <button type="button" className="btn btn-danger w-sm waves-effect waves-light">Small</button>
                                        <button type="button" className="btn btn-warning w-md waves-effect waves-light">Medium</button>
                                        <button type="button" className="btn btn-success w-lg waves-effect waves-light">Large</button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Button Tags</h4>
                                    <p className="card-title-desc">
                                        The <code className="highlighter-rouge">.btn</code>
                                        classes are designed to be used with the <code
                                            className="highlighter-rouge">&lt;button&gt;</code> element.
                                        However, you can also use these classes on <code
                                            className="highlighter-rouge">&lt;a&gt;</code> or <code
                                                className="highlighter-rouge">&lt;input&gt;</code> elements (though
                                        some browsers may apply a slightly different rendering).
                                    </p>
                                </CardHeader>

                                <CardBody>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Link className="btn btn-primary" to="#">Link</Link>
                                        <button className="btn btn-success waves-effect waves-light" type="submit">Button</button>
                                        <input className="btn btn-info" type="button" value="Input" />
                                        <input className="btn btn-danger" type="submit" value="Submit" />
                                        <input className="btn btn-warning" type="reset" value="Reset" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Toggle States</h4>
                                    <p className="card-title-desc">
                                        Add <code className="highlighter-rouge">data-bs-toggle="button"</code>
                                        to toggle a button’s <code className="highlighter-rouge">active</code>
                                        state. If you’re pre-toggling a button, you must manually add the <code
                                            className="highlighter-rouge">.active</code> class
                                        <strong>and</strong> <code
                                            className="highlighter-rouge">aria-pressed="true"</code> to the
                                        <code className="highlighter-rouge">&lt;button&gt;</code>.
                                    </p>
                                </CardHeader>

                                <CardBody>
                                    <div className="d-flex flex-wrap gap-2">
                                        <button type="button" className="btn btn-primary" data-bs-toggle="button" autoComplete="off">Toggle button</button>
                                        <button type="button" className="btn btn-primary active" data-bs-toggle="button" autoComplete="off" aria-pressed="true">Active toggle button</button>
                                        <button type="button" className="btn btn-primary" disabled data-bs-toggle="button" autoComplete="off">Disabled toggle button</button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title"><span>*****</span> Block Buttons</h4>
                                    <p className="card-title-desc">Create block level buttons—those that span the full width of a parent—by adding
                                        <code className="highlighter-rouge">.d-grid</code>.</p>
                                </CardHeader>

                                <CardBody>
                                    <div className="d-grid gap-2">
                                        <button type="button" className="btn btn-primary btn-lg waves-effect waves-light">Block level button</button>
                                        <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Block level button</button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Checkbox & Radio Buttons</h4>
                                    <p className="card-title-desc">Create button-like checkboxes and radio buttons by using <code>.btn</code> styles rather than
                                        <code>.form-check-label</code> on the <code>&lt;label&gt;</code> elements.
                                    </p>
                                </CardHeader>

                                <CardBody>
                                    <Row className="g-2">
                                        <Col xl={6}>
                                            <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">

                                                <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" defaultChecked />
                                                <label className="btn btn-primary" htmlFor="btncheck1">Checkbox 1</label>

                                                <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                                                <label className="btn btn-primary" htmlFor="btncheck2">Checkbox 2</label>

                                                <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                                                <label className="btn btn-primary" htmlFor="btncheck3">Checkbox 3</label>
                                            </div>
                                        </Col>

                                        <Col xl={6}>
                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                                                <label className="btn btn-secondary" htmlFor="btnradio1">Radio 1</label>

                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                                <label className="btn btn-secondary" htmlFor="btnradio2">Radio 2</label>

                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                                                <label className="btn btn-secondary" htmlFor="btnradio3">Radio 3</label>
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
                                <CardHeader>
                                    <h4 className="card-title">Button Group</h4>
                                    <p className="card-title-desc">Wrap a series of buttons with <code
                                        className="highlighter-rouge">.btn</code> in <code
                                            className="highlighter-rouge">.btn-group</code>.
                                    </p>
                                </CardHeader>

                                <CardBody>
                                    <Row className="g-4">
                                        <div className="col-md-6">
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-primary">Left</button>
                                                <button type="button" className="btn btn-primary">Middle</button>
                                                <button type="button" className="btn btn-primary">Right</button>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-secondary"><i className="bx bx-menu-alt-right"></i></button>
                                                <button type="button" className="btn btn-secondary"><i className="bx bx-menu"></i></button>
                                                <button type="button" className="btn btn-secondary"><i className="bx bx-menu-alt-left"></i></button>
                                            </div>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Button Toolbar</h4>
                                    <p className="card-title-desc">Combine sets of button groups into
                                        button toolbars for more complex components. Use utility classes as
                                        needed to space out groups, buttons, and more.
                                    </p>
                                </CardHeader>

                                <CardBody>
                                    <div className="btn-toolbar gap-2" role="toolbar" aria-label="Toolbar with button groups">
                                        <div className="btn-group" role="group" aria-label="First group">
                                            <button type="button" className="btn btn-secondary">1</button>
                                            <button type="button" className="btn btn-secondary">2</button>
                                            <button type="button" className="btn btn-secondary">3</button>
                                            <button type="button" className="btn btn-secondary">4</button>
                                        </div>
                                        <div className="btn-group" role="group" aria-label="Second group">
                                            <button type="button" className="btn btn-secondary">5</button>
                                            <button type="button" className="btn btn-secondary">6</button>
                                            <button type="button" className="btn btn-secondary">7</button>
                                        </div>
                                        <div className="btn-group" role="group" aria-label="Third group">
                                            <button type="button" className="btn btn-secondary">8</button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Sizing</h4>
                                    <p className="card-title-desc">Instead of applying button sizing
                                        classes to every button in a group, just add <code
                                            className="highlighter-rouge">.btn-group-*</code> to each <code
                                                className="highlighter-rouge">.btn-group</code>, including each one
                                        when nesting multiple groups.
                                    </p>
                                </CardHeader>

                                <CardBody>
                                    <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-primary">Left</button>
                                        <button type="button" className="btn btn-primary">Middle</button>
                                        <button type="button" className="btn btn-primary">Right</button>
                                    </div>

                                    <br />

                                    <div className="btn-group mt-2" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-secondary">Left</button>
                                        <button type="button" className="btn btn-secondary">Middle</button>
                                        <button type="button" className="btn btn-secondary">Right</button>
                                    </div>

                                    <br />

                                    <div className="btn-group btn-group-sm mt-2" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-danger">Left</button>
                                        <button type="button" className="btn btn-danger">Middle</button>
                                        <button type="button" className="btn btn-danger">Right</button>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Vertical Variation</h4>
                                    <p className="card-title-desc">Make a set of buttons appear vertically
                                        stacked rather than horizontally. Split button dropdowns are not
                                        supported here.
                                    </p>
                                </CardHeader>

                                <CardBody>
                                    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                        <button type="button" className="btn btn-secondary">Button</button>
                                        <UncontrolledDropdown>
                                            <DropdownToggle type="button" className="btn btn-secondary">
                                                Dropdown <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem to="#">Dropdown link</DropdownItem>
                                                <DropdownItem to="#">Dropdown link</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <button type="button" className="btn btn-secondary">Button</button>
                                        <button type="button" className="btn btn-secondary">Button</button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default UiButton;