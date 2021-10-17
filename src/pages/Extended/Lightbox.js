import React, { useState } from "react"
import MetaTags from 'react-meta-tags';

import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    CardHeader,
} from "reactstrap"

//Lightbox
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import ModalVideo from "react-modal-video"
import "react-modal-video/scss/modal-video.scss"

// import image
import img1 from "../../assets/images/small/img-1.jpg"
import img2 from "../../assets/images/small/img-2.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import img5 from "../../assets/images/small/img-5.jpg"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const images = [img4, img5, img1]

const UiLightbox = () => {
    const [photoIndex, setphotoIndex] = useState(0)
    const [isFits, setisFits] = useState(false)
    const [isEffects, setisEffects] = useState(false)
    const [isGallery, setisGallery] = useState(false)
    const [isOpen, setisOpen] = useState(false)
    const [isOpen1, setisOpen1] = useState(false)

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Lightbox | Minia - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid={true}>
                    <Breadcrumbs title="Extended" breadcrumbItem="Lightbox" />

                    {isFits ? (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            enableZoom={false}
                            imageCaption={
                                "Caption. Can be aligned it to any side and contain any HTML."
                            }
                            onCloseRequest={() => {
                                setisFits(!isFits)
                            }}
                        />
                    ) : null}

                    {isEffects ? (
                        <Lightbox
                            mainSrc={images[1]}
                            enableZoom={false}
                            onCloseRequest={() => {
                                setisEffects(!isEffects)
                            }}
                        />
                    ) : null}

                    {isGallery ? (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            enableZoom={true}
                            onCloseRequest={() => {
                                setisGallery(false)
                            }}
                            onMovePrevRequest={() => {
                                setphotoIndex((photoIndex + images.length - 1) % images.length)
                            }}
                            onMoveNextRequest={() => {
                                setphotoIndex((photoIndex + 1) % images.length)
                            }}
                            imageCaption={"Project " + parseFloat(photoIndex + 1)}
                        />
                    ) : null}

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Single image lightbox</CardTitle>
                                    <CardSubtitle>
                                        Glightbox Single Image Lightbox Example
                                    </CardSubtitle>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col lg={3} sm={6}>
                                            <div className="mt-4">
                                                <img
                                                    onClick={() => {
                                                        setisFits(true)
                                                    }}
                                                    className="img-fluid"
                                                    alt="Minia"
                                                    src={img1}
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div className="mt-4">
                                                <img
                                                    onClick={() => {
                                                        setisEffects(true)
                                                    }}
                                                    className="img-fluid"
                                                    alt=""
                                                    src={img2}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Lightbox gallery</CardTitle>
                                    <CardSubtitle>
                                        In this example lazy-loading of images is enabled for the
                                        next image based on move direction.{" "}
                                    </CardSubtitle>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col lg={3} sm={6}>
                                            <div className="mt-4">
                                                <img
                                                    src={img4}
                                                    onClick={() => {
                                                        setisGallery(true)
                                                        setphotoIndex(0)
                                                    }}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div className="mt-4">
                                                <img
                                                    src={img5}
                                                    onClick={() => {
                                                        setisGallery(true)
                                                        setphotoIndex(1)
                                                    }}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div className="mt-4">
                                                <img
                                                    src={img1}
                                                    onClick={() => {
                                                        setisGallery(true)
                                                        setphotoIndex(2)
                                                    }}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Popup with video or map</CardTitle>
                                    <CardSubtitle className="mb-3">
                                        In this example lazy-loading of images is enabled for the
                                        next image based on move direction.{" "}
                                    </CardSubtitle>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <div className="d-flex align-items-start gap-3 flex">
                                            <Button
                                                className="btn btn-light image-popup-video-map"
                                                onClick={() => {
                                                    setisOpen(!isOpen)
                                                }}
                                            >
                                                Open Youtube Video
                                            </Button>{" "}
                                            <Button
                                                className="btn btn-light image-popup-video-map"
                                                onClick={() => {
                                                    setisOpen1(!isOpen1)
                                                }}
                                            >
                                                Open Vimeo Video
                                            </Button>{" "}
                                            <ModalVideo
                                                videoId="L61p2uyiMSo"
                                                channel="youtube"
                                                isOpen={isOpen}
                                                onClose={() => {
                                                    setisOpen(!isOpen)
                                                }}
                                            />
                                            <ModalVideo
                                                videoId="L61p2uyiMSo"
                                                channel="youtube"
                                                isOpen={isOpen1}
                                                onClose={() => {
                                                    setisOpen1(false)
                                                }}
                                            />
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default UiLightbox
