import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
} from "reactstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";

//import images
import calendar from "../../assets/images/undraw-calendar.svg";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import {
    addNewEvent as onAddNewEvent,
    deleteEvent as onDeleteEvent,
    getCategories as onGetCategories,
    getEvents as onGetEvents,
    updateEvent as onUpdateEvent,
} from "../../store/actions";

import DeleteModal from "./DeleteModal";

//css
import "@fullcalendar/bootstrap/main.css";

//redux
import { useSelector, useDispatch } from "react-redux";

const Calender = props => {
    const dispatch = useDispatch();

    const {
        events,
        categories,
    } = useSelector((state) => ({
        events: state.calendar.events,
        categories: state.calendar.categories,
    }));
    const [modal, setModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [modalcategory, setModalcategory] = useState(false);
    const [event, setEvent] = useState({});
    const [selectedDay, setSelectedDay] = useState(0);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        dispatch(onGetCategories());
        dispatch(onGetEvents());
        new Draggable(document.getElementById("external-events"), {
            itemSelector: ".external-event",
        });
    }, [dispatch]);

    /**
     * Handling the modal state
     */
    const toggle = () => {
        setModal(!modal);
        if (!modal && !isEmpty(event) && !!isEdit) {
            setTimeout(() => {
                setEvent({});
                setIsEdit(false);
            }, 500);
        }
    };

    const toggleCategory = () => {
        setModalcategory(!modalcategory);
    };

    /**
     * Handling date click on calendar
     */
    const handleDateClick = arg => {
        const date = arg["date"];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(
            year,
            month,
            day,
            currentHour,
            currentMin,
            currentSec
        );
        const modifiedData = { ...arg, date: modifiedDate };

        setSelectedDay(modifiedData);
        toggle();
    };

    /**
     * Handling click on event on calendar
     */
    const handleEventClick = arg => {
        const event = arg.event;
        setEvent({
            id: event.id,
            title: event.title,
            title_category: event.title_category,
            start: event.start,
            className: event.classNames,
            category: event.classNames[0],
            event_category: event.classNames[0],
        });
        setIsEdit(true);
        toggle();
    };

    /**
     * Handling submit event on event form
     */
    const handleValidEventSubmit = (e, values) => {
        if (isEdit) {
            const updateEvent = {
                id: event.id,
                title: values.title,
                classNames: values.category + " text-white",
                start: event.start,
            };
            // update event
            dispatch(onUpdateEvent(updateEvent));
        } else {
            const newEvent = {
                id: Math.floor(Math.random() * 100),
                title: values["title"],
                start: selectedDay ? selectedDay.date : new Date(),
                className: values.category + " text-white",
            };
            // save new event
            dispatch(onAddNewEvent(newEvent));
        }
        setSelectedDay(null);
        toggle();
    };

    const handleValidEventSubmitcategory = (event, values) => {
        const newEvent = {
            id: Math.floor(Math.random() * 100),
            title: values["title_category"],
            start: selectedDay ? selectedDay.date : new Date(),
            className: values.event_category
                ? values.event_category + " text-white"
                : "bg-danger text-white",
        };
        // save new event

        dispatch(onAddNewEvent(newEvent));
        toggleCategory();
    };

    /**
     * On delete event
     */
    const handleDeleteEvent = () => {
        dispatch(onDeleteEvent(event));
        setDeleteModal(false);
        toggle();
    };

    /**
     * On category darg event
     */
    const onDrag = event => {
        event.preventDefault();
    };

    /**
     * On calendar drop event
     */
    const onDrop = event => {
        const date = event['date'];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(year, month, day, currentHour, currentMin, currentSec);

        const draggedEl = event.draggedEl;
        const modifiedData = {
            id: Math.floor(Math.random() * 100),
            title: draggedEl.innerText,
            start: modifiedDate,
            className: draggedEl.className,
        };
        dispatch(onAddNewEvent(modifiedData));
    };

    return (
        <React.Fragment>
            <DeleteModal
                show={deleteModal}
                onDeleteClick={handleDeleteEvent}
                onCloseClick={() => setDeleteModal(false)}
            />
            <div className="page-content">
                <MetaTags>
                    <title></title>
                </MetaTags>
                <Container fluid={true}>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs title="Minia" breadcrumbItem="Calendar" />
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col xl={3} lg={4}>
                                    <Card>
                                        <CardBody>
                                            <div className="d-grid">
                                                <Button
                                                    color="primary"
                                                    className="font-16 btn-primary"
                                                    onClick={toggleCategory}
                                                >
                                                    <i className="mdi mdi-plus-circle-outline me-1" />
                                                    Create New Event
                                                </Button>
                                            </div>
                                            <div id="external-events" className="mt-2">
                                                <br />
                                                <p className="text-muted">
                                                    Drag and drop your event or click in the calendar
                                                </p>
                                                {categories &&
                                                    categories.map((category, i) => (
                                                        <div
                                                            className={`${category.type + " " + category.text} fc-event external-event`}
                                                            key={"cat-" + category.id}
                                                            draggable
                                                            onDrag={event => onDrag(event, category)}
                                                        >
                                                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle" />
                                                            {category.title}
                                                        </div>
                                                    ))}
                                            </div>
                                            <div className="row justify-content-center mt-5">
                                                <div className="col-lg-12 col-sm-6">
                                                    <img src={calendar} alt="" className="img-fluid d-block" />
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col xl={9} lg={8}>
                                    <Card>
                                        <CardBody>
                                            {/* fullcalendar control */}
                                            <FullCalendar
                                                plugins={[
                                                    BootstrapTheme,
                                                    dayGridPlugin,
                                                    interactionPlugin,
                                                ]}
                                                slotDuration={"00:15:00"}
                                                handleWindowResize={true}
                                                themeSystem="bootstrap"
                                                headerToolbar={{
                                                    left: "prev,next today",
                                                    center: "title",
                                                    right: "dayGridMonth,dayGridWeek,dayGridDay",
                                                }}
                                                events={events}
                                                editable={true}
                                                droppable={true}
                                                selectable={true}
                                                dateClick={handleDateClick}
                                                eventClick={handleEventClick}
                                                drop={onDrop}
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <div style={{ clear: 'both' }}></div>
                            {/* New/Edit event modal */}
                            <Modal isOpen={modal} className={props.className}>
                                <ModalHeader toggle={toggle} tag="h4">
                                    {!!isEdit ? "Edit Event" : "Add Event"}
                                </ModalHeader>
                                <ModalBody>
                                    <AvForm onValidSubmit={handleValidEventSubmit}>
                                        <Row form>
                                            <Col className="col-12 mb-3">
                                                <AvField
                                                    name="title"
                                                    label="Event Name"
                                                    type="text"
                                                    errorMessage="Invalid name"
                                                    validate={{
                                                        required: { value: true },
                                                    }}
                                                    value={event ? event.title : ""}
                                                />
                                            </Col>
                                            <Col className="col-12 mb-3">
                                                <AvField
                                                    type="select"
                                                    name="category"
                                                    label="Select Category"
                                                    validate={{
                                                        required: { value: true },
                                                    }}
                                                    value={event ? event.category : "bg-primary"}
                                                >
                                                    <option value="bg-danger">Danger</option>
                                                    <option value="bg-success">Success</option>
                                                    <option value="bg-primary">Primary</option>
                                                    <option value="bg-info">Info</option>
                                                    <option value="bg-dark">Dark</option>
                                                    <option value="bg-warning">Warning</option>
                                                </AvField>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div className="text-end">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light me-2"
                                                        onClick={toggle}
                                                    >
                                                        Close
                                                    </button>
                                                    {!!isEdit && (
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger me-2"
                                                            onClick={() => setDeleteModal(true)}
                                                        >
                                                            Delete
                                                        </button>
                                                    )}
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success save-event"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </AvForm>
                                </ModalBody>
                            </Modal>

                            <Modal
                                isOpen={modalcategory}
                                toggle={toggleCategory}
                                className={props.className}
                            >
                                <ModalHeader toggle={toggleCategory} tag="h4">
                                    Add a category
                                </ModalHeader>
                                <ModalBody>
                                    <AvForm
                                        onValidSubmit={handleValidEventSubmitcategory}
                                    >
                                        <Row form>
                                            <Col className="col-12 mb-3">
                                                <AvField
                                                    name="title_category"
                                                    label="Category Name"
                                                    type="text"
                                                    errorMessage="Invalid name"
                                                    validate={{
                                                        required: { value: true },
                                                    }}
                                                    value={
                                                        event.title_category
                                                            ? event.title_category
                                                            : ""
                                                    }
                                                />
                                            </Col>
                                            <Col className="col-12 mb-3">
                                                <AvField
                                                    type="select"
                                                    name="event_category"
                                                    label="Choose Category Color"
                                                    value={
                                                        event ? event.event_category : "bg-primary"
                                                    }
                                                >
                                                    <option value="bg-danger">Danger</option>
                                                    <option value="bg-success">Success</option>
                                                    <option value="bg-primary">Primary</option>
                                                    <option value="bg-info">Info</option>
                                                    <option value="bg-dark">Dark</option>
                                                    <option value="bg-warning">Warning</option>
                                                </AvField>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div className="text-end">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light me-2"
                                                        onClick={toggleCategory}
                                                    >
                                                        Close
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success save-event"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </AvForm>
                                </ModalBody>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

Calender.propTypes = {
    events: PropTypes.array,
    categories: PropTypes.array,
    className: PropTypes.string,
    onGetEvents: PropTypes.func,
    onAddNewEvent: PropTypes.func,
    onUpdateEvent: PropTypes.func,
    onDeleteEvent: PropTypes.func,
    onGetCategories: PropTypes.func,
};

export default Calender;
