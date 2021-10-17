import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardTitle, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';

//import images
import img1 from "../../../assets/images/small/img-3.jpg";
import img2 from "../../../assets/images/small/img-1.jpg";
import img3 from "../../../assets/images/small/img-5.jpg";

const ProfileTab1 = () => {
    return (
        <React.Fragment>
            <Card>
                {/* <CardHeader>
                    <CardTitle className="mb-0">Overview</CardTitle>
                </CardHeader> */}
                {/* <CardBody>
                    <div>
                        <div className="pb-3">
                            <Row>
                                <Col xl={2}>
                                    <div>
                                        <h5 className="font-size-15">Bio :</h5>
                                    </div>
                                </Col>
                                <div className="col-xl">
                                    <div className="text-muted">
                                        <p className="mb-2">Hi I'm Phyllis Gatlin, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                                        <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at it has a more-or-less normal distribution of letters</p>
                                    </div>
                                </div>
                            </Row>
                        </div>

                        <div className="py-3">
                            <Row>
                                <Col xl={2}>
                                    <div>
                                        <h5 className="font-size-15">Experience :</h5>
                                    </div>
                                </Col>
                                <div className="col-xl">
                                    <div className="text-muted">
                                        <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc</p>

                                        <ul className="list-unstyled mb-0">
                                            <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Donec vitae sapien ut libero venenatis faucibus</li>
                                            <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Quisque rutrum aenean imperdiet</li>
                                            <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Integer ante a consectetuer eget</li>
                                            <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Phasellus nec sem in justo pellentesque</li>
                                        </ul>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </div>
                </CardBody> */}
            </Card>

            <Card>
                <CardHeader>
                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <CardTitle className="mb-0"><b>Төслүүд</b></CardTitle>
                        </div>
                        {/* <div className="flex-shrink-0">
                            <Link to="#">View All</Link>
                        </div> */}
                    </div>
                </CardHeader>
                <CardBody>
                    <div>
                        <Row>
                            <Col xl={4}>
                                <Card className="p-1 mb-xl-0">
                                    <div className="p-3">
                                        <div className="d-flex align-items-start">
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="font-size-14 text-truncate"><Link to="/contacts-list" className="text-dark">960 хүүхдийн дунд сургууль</Link></h5>
                                                <p className="font-size-13 text-muted mb-0">2021.12.01</p>
                                            </div>
                                            {/* <div className="flex-shrink-0 ms-2">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle className="btn btn-link text-muted font-size-16 p-1 py-0 shadow-none" tag="a">
                                                        <i className="bx bx-dots-horizontal-rounded"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-end">
                                                        <li><DropdownItem to="#">Action</DropdownItem></li>
                                                        <li><DropdownItem to="#">Another action</DropdownItem></li>
                                                        <li><DropdownItem to="#">Something else here</DropdownItem></li>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className="position-relative">
                                        <img src={img1} alt="" className="img-thumbnail" />
                                    </div>

                                    <div className="p-3">
                                        <ul className="list-inline">
                                            {/* <li className="list-inline-item me-3">
                                                <Link to="#" className="text-muted">
                                                    <i className="bx align-middle text-muted me-1"></i> Гүйцэтгэгч байгууллага: TRAILERPARK
                                                </Link>
                                            </li> */}
                                            <li className="list-inline-item me-3">
                                                <Link to="#" className="text-muted">
                                                    <i className="bx bx-comment-dots align-middle text-muted me-1"></i> 12 Сэтгэгдэл
                                                </Link>
                                            </li>
                                        </ul>
                                        <p className="text-muted">Сэлэнгэ аймагт баригдах 960 хүүхдийн дунд сургуулийн барилгын ажлыг энэ оны 4-р улиралд эхлүүлэхээр боллоо. 
                                            Эрхэн хүндэт Сэлэнгэ аймгийн ард иргэд та бүхний санал хүсэлтээ үлдээн хамтран ажиллана уу. 
                                            Иргэн бүрийн оролцоо хөгжилд хөтлөнө.</p>
                                        <div>
                                            <Link to="/contacts-list" className="text-primary">Илүү ихийг үзэх<i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col xl={4}>
                                <Card className="p-1 mb-xl-0">
                                    <div className="p-3">
                                        <div className="d-flex align-items-start">
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="font-size-14 text-truncate"><Link to="/contacts-list2" className="text-dark">300 хүүхдийн дунд сургууль</Link></h5>
                                                <p className="font-size-13 text-muted mb-0">2022.12.01</p>
                                            </div>
                                            <div className="flex-shrink-0 ms-2">
                                                {/* <UncontrolledDropdown>
                                                    <DropdownToggle className="btn btn-link text-muted font-size-16 p-1 py-0 shadow-none" tag="a">
                                                        <i className="bx bx-dots-horizontal-rounded"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-end">
                                                        <li><DropdownItem to="#">Action</DropdownItem></li>
                                                        <li><DropdownItem to="#">Another action</DropdownItem></li>
                                                        <li><DropdownItem to="#">Something else here</DropdownItem></li>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="position-relative">
                                        <img src={img2} alt="" className="img-thumbnail" />
                                    </div>

                                    <div className="p-3">
                                        <ul className="list-inline">
                                            {/* <li className="list-inline-item me-3">
                                                <Link to="#" className="text-muted">
                                                    <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i> Development
                                                </Link>
                                            </li> */}
                                            <li className="list-inline-item me-3">
                                                <Link to="#" className="text-muted">
                                                    <i className="bx bx-comment-dots align-middle text-muted me-1"></i> 08 Comments
                                                </Link>
                                            </li>
                                        </ul>
                                        <p className="text-muted">Сэлэнгэ аймагт баригдах 300 хүүхдийн цэцэрлэгийн барилгын ажлыг 2022 оны 2-р улиралд эхлүүлэхээр боллоо. 
                                                Эрхэн хүндэт Сэлэнгэ аймгийн ард иргэд та бүхний санал хүсэлтээ үлдээн хамтран ажиллана уу. 
                                                Иргэн бүрийн оролцоо хөгжилд хөтлөнө.</p>
                                        <div>
                                            <Link to="/contacts-list" className="text-primary">Илүү ихийг үзэх<i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col xl={4}>
                                <Card className="p-1 mb-sm-0">
                                    <div className="p-3">
                                        <div className="d-flex align-items-start">
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="font-size-14 text-truncate"><Link to="#" className="text-dark">Соёл амралтын хүрээлэн</Link></h5>
                                                <p className="font-size-13 text-muted mb-0">2021.11.01</p>
                                            </div>
                                            <div className="flex-shrink-0 ms-2">
                                                {/* <UncontrolledDropdown>
                                                    <DropdownToggle className="btn btn-link text-muted font-size-16 p-1 py-0 shadow-none" tag="a">
                                                        <i className="bx bx-dots-horizontal-rounded"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-end">
                                                        <li><DropdownItem to="#">Action</DropdownItem></li>
                                                        <li><DropdownItem to="#">Another action</DropdownItem></li>
                                                        <li><DropdownItem to="#">Something else here</DropdownItem></li>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="position-relative">
                                        <img src={img3} alt="" className="img-thumbnail" />
                                    </div>

                                    <div className="p-3">
                                        <ul className="list-inline">
                                            {/* <li className="list-inline-item me-3">
                                                <Link to="#" className="text-muted">
                                                    <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i> Project
                                                </Link>
                                            </li> */}
                                            <li className="list-inline-item me-3">
                                                <Link to="#" className="text-muted">
                                                    <i className="bx bx-comment-dots align-middle text-muted me-1"></i> 08 Comments
                                                </Link>
                                            </li>
                                        </ul>
                                        <p className="text-muted">Сэлэнгэ аймагт баригдах соёл амралтын хүрээлэн.Энэхүү соёл амралтын хүрээлэнд маань сагсан бөмбөг, усан бассен, бие бялдаржуулах зэрэг спорт цогцолбор багтсан болно.</p>

                                        <div>
                                            <Link to="/contacts-list" className="text-primary">Илүү ихийг үзэх<i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

export default ProfileTab1;