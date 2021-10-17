import PropTypes from 'prop-types'
import React from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap"
import * as images from "../../assets/images"

const CardContact = props => {
  const { user } = props

  return (
    <React.Fragment>
      <Col xl="3" sm="6">
        <Card className="text-center">
          <CardBody>
            <UncontrolledDropdown className="dropdown text-end">
              <DropdownToggle className="text-muted font-size-16" tag="a">
                <i className="bx bx-dots-horizontal-rounded"></i>
              </DropdownToggle>

              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem to="#">Edit</DropdownItem>
                <DropdownItem to="#">Action</DropdownItem>
                <DropdownItem to="#">Remove</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {!user.img ? (
              <div className="avatar-xl mx-auto mb-4">
                <span
                  className={
                    "avatar-title bg-soft-light text-light display-4 m-0 rounded-circle"
                  }
                >
                  <i className="bx bxs-user-circle"></i>
                </span>
              </div>
            ) : (
              <div className="mx-auto mb-4">
                <img
                  className="avatar-xl rounded-circle img-thumbnail"
                  src={images[user.img]}
                  alt=""
                />
              </div>
            )}

            <h5 className="font-size-15 mb-1">
              <Link to="#" className="text-dark">
                {user.name}
              </Link>
            </h5>
            <p className="text-muted mb-2">{user.designation}</p>


          </CardBody>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-outline-light text-truncate"><i className="uil uil-user me-1"></i> Profile</button>
            <button type="button" className="btn btn-outline-light text-truncate"><i className="uil uil-envelope-alt me-1"></i> Message</button>

          </div>
        </Card>
      </Col>
    </React.Fragment>
  )
}

CardContact.propTypes = {
  user: PropTypes.object
}

export default CardContact
