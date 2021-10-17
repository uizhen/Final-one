import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Card
} from "reactstrap"

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const EmailSideBar = () => {
  const [modal, setmodal] = useState(false)

  return (
    <React.Fragment>
      <Card className="email-leftbar">
        <Button
          type="button"
          color="danger"
          className="btn btn-danger btn-block waves-effect waves-light fw-semibold"
          onClick={() => {
            setmodal(!modal)
          }}
          block
        >
          Compose
        </Button>
        <div className="mail-list mt-4">
          <Link to="email-inbox" className="active">
            <i className="bx bxs-inbox font-size-16 align-middle me-2"></i> Inbox{" "}
            <span className="ml-1 float-end">(18)</span>
          </Link>
          <Link to="#">
            <i className="bx bx-star font-size-16 align-middle me-2"></i>Starred
          </Link>
          <Link to="#">
            <i className="bx bxs-bookmark font-size-16 align-middle me-2"></i>Important
          </Link>
          <Link to="#">
            <i className="bx bx-file font-size-16 align-middle me-2"></i>Draft
          </Link>
          <Link to="#">
            <i className="bx bx-mail-send font-size-16 align-middle me-2"></i>Sent Mail
          </Link>
          <Link to="#">
            <i className="bx bx-trash font-size-16 align-middle me-2"></i>Trash
          </Link>
        </div>

        <h6 className="mt-4">Labels</h6>

        <div className="mail-list mt-1">
          <Link to="#">
            <span className="mdi mdi-circle-outline text-info me-2"></span>
            Theme Support
          </Link>
          <Link to="#">
            <span className="mdi mdi-circle-outline text-warning me-2"></span>
            Freelance
          </Link>
          <Link to="#">
            <span className="mdi mdi-circle-outline text-primary me-2"></span>
            Social
          </Link>
          <Link to="#">
            <span className="mdi mdi-circle-outline text-danger me-2"></span>
            Friends
          </Link>
          <Link to="#">
            <span className="mdi mdi-circle-outline text-success me-2"></span>
            Family
          </Link>
        </div>
      </Card>

      <Modal
        isOpen={modal}
        role="dialog"
        autoFocus={true}
        centered={true}
        className="exampleModal"
        tabIndex="-1"
        toggle={() => {
          setmodal(!modal)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal(!modal)
            }}
          >
            New Message
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input type="email" className="form-control" placeholder="To" />
              </div>

              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setmodal(!modal)
              }}
            >
              Close
            </Button>
            <Button type="button" color="primary">
              Send <i className="fab fa-telegram-plane ms-1"></i>
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </React.Fragment>
  )
}

export default EmailSideBar