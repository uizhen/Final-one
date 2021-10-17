import React from "react";
import MetaTags from 'react-meta-tags';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Container,
    CardHeader,
} from "reactstrap";

// Carousel
import Slide from "./CarouselTypes/slide";
import Slidewithcontrol from "./CarouselTypes/slidewithcontrol";
import Slidewithindicator from "./CarouselTypes/slidewithindicator";
import Slidewithcaption from "./CarouselTypes/slidewithcaption";
import Slidewithfade from "./CarouselTypes/slidewithfade";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiCarousel = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Carousel | Minia - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid={true}>
                    <Breadcrumbs title="Components" breadcrumbItem="Carousel" />

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <CardTitle> Slides Only</CardTitle>
                                    <CardSubtitle>
                                        Here’s a carousel with slides only. Note the presence of the{" "}
                                        <code>.d-block</code> and <code>.img-fluid</code> on
                                        carousel images to prevent browser default image alignment.
                                    </CardSubtitle>
                                </CardHeader>
                                <CardBody>
                                    <Slide />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>With controls</CardTitle>
                                    <CardSubtitle>
                                        Adding in the previous and next controls:
                                    </CardSubtitle>
                                </CardHeader>
                                <CardBody>
                                    <Slidewithcontrol />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>With indicators</CardTitle>
                                    <CardSubtitle>
                                        You can also add the indicators to the carousel, alongside
                                        the controls, too.
                                    </CardSubtitle>
                                </CardHeader>
                                <CardBody>
                                    <Slidewithindicator />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>With captions</CardTitle>
                                    <CardSubtitle>
                                        Add captions to your slides easily with the{" "}
                                        <code>.carousel-caption</code> element within any{" "}
                                        <code>.carousel-item</code>.
                                    </CardSubtitle>
                                </CardHeader>
                                <CardBody>
                                    <Slidewithcaption />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Crossfade</CardTitle>
                                    <CardSubtitle>
                                        Add <code>.carousel-fade</code> to your carousel to animate
                                        slides with a fade transition instead of a slide.
                                    </CardSubtitle>
                                </CardHeader>
                                <CardBody>
                                    <Slidewithfade />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default UiCarousel;
