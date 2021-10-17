import PropTypes from "prop-types"
import React, { useEffect, useRef, useCallback } from "react"

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import images
import giftBox from "../../assets/images/giftbox.png"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }, []);

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname, activateParentDropdown])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            {/* <li className="menu-title">{props.t("Menu")} </li> */}
            <li>
              <Link to="/dashboard" className="">
                <FeatherIcon
                  icon="home"
                />
                <span>{props.t("Нүүр хуудас")}</span>
              </Link>
            </li>
            <li>
              <Link to="/contacts-list" className="">
                <FeatherIcon
                  icon="grid"
                />
                <span>{props.t("Хэрэглэгчийн хүснэгт")}</span>
              </Link>
            </li>
            <li>
              <ul className="sub-menu">
                <li>
                  <Link to="/apps-calendar">{props.t("Calendar")}</Link>
                </li>
                <li>
                  <Link to="/apps-chat">
                    {props.t("Chat")}
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    <span>{props.t("Email")}</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/email-inbox">{props.t("Inbox")}</Link>
                    </li>
                    <li>
                      <Link to="/email-read">{props.t("Read Email")} </Link>
                    </li>

                  </ul>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    <span>{props.t("Invoices")}</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/invoices-list">{props.t("Invoice List")}</Link>
                    </li>
                    <li>
                      <Link to="/invoices-detail">{props.t("Invoice Detail")}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/#" className="has-arrow ">
                    <span>{props.t("Contacts")}</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/contacts-grid">{props.t("User Grid")}</Link>
                    </li>
                    <li>
                      <Link to="/contacts-list">{props.t("User List")}</Link>
                    </li>
                    <li>
                      <Link to="/contacts-profile">{props.t("Profile")}</Link>
                    </li>
                  </ul>
                </li>

              </ul>
            </li>

            <li>
            <Link to="/#" className="has-arrow">
                  <FeatherIcon
                icon="mail"
              />
                    <span>{props.t("Хэрэглэгчтэй харилцах")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                <Link to="/apps-chat">
                    {props.t("Мессенжер")}
                  </Link>
                </li>
                <li>
                <Link to="/#" >
                    <span>{props.t("Мэйл бичих")}</span>
                  </Link>
                </li>
                <li>
                      <Link to="/email-inbox">{props.t("Мэйл унших")}</Link>
                    </li>
                {/* <li>
                  <Link to="/page-lock-screen">{props.t("Lock Screen")}</Link>
                </li>
                <li>
                  <Link to="/page-confirm-mail">{props.t("Confirm Mail")}</Link>
                </li>
                <li>
                  <Link to="/page-email-verification">
                    {props.t("Email Verification")}
                  </Link>
                </li>
                <li>
                  <Link to="/page-two-step-verification">
                    {props.t("Two Step Verification")}
                  </Link>
                </li> */}
              </ul>
            </li>
            {/* <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon
                  icon="file-text"
                />
                <span>{props.t("Pages")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/pages-starter">{props.t("Starter Page")}</Link>
                </li>
                <li>
                  <Link to="/pages-maintenance">{props.t("Maintenance")}</Link>
                </li>
                <li>
                  <Link to="/pages-comingsoon">{props.t("Coming Soon")}</Link>
                </li>
                <li>
                  <Link to="/pages-timeline">{props.t("Timeline")}</Link>
                </li>
                <li>
                  <Link to="/pages-faqs">{props.t("FAQs")}</Link>
                </li>
                <li>
                  <Link to="/pages-pricing">{props.t("Pricing")}</Link>
                </li>
                <li>
                  <Link to="/pages-404">{props.t("Error 404")}</Link>
                </li>
                <li>
                  <Link to="/pages-500">{props.t("Error 500")}</Link>
                </li>
              </ul>
            </li> */}
{/* 
            <li className="menu-title">{props.t("Elements")}</li> */}

            {/* <li>
              <Link to="/#" className="has-arrow ">
                <i className="bx bx-tone"></i>
                <span>{props.t("Components")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/ui-alerts">{props.t("Alerts")}</Link>
                </li>
                <li>
                  <Link to="/ui-buttons">{props.t("Buttons")}</Link>
                </li>
                <li>
                  <Link to="/ui-cards">{props.t("Cards")}</Link>
                </li>
                <li>
                  <Link to="/ui-carousel">{props.t("Carousel")}</Link>
                </li>
                <li>
                  <Link to="/ui-dropdowns">{props.t("Dropdowns")}</Link>
                </li>
                <li>
                  <Link to="/ui-grid">{props.t("Grid")}</Link>
                </li>
                <li>
                  <Link to="/ui-images">{props.t("Images")}</Link>
                </li>
                <li>
                  <Link to="/ui-modals">{props.t("Modals")}</Link>
                </li>
                <li>
                  <Link to="/ui-drawer">{props.t("Drawer")}</Link>
                </li>
                <li>
                  <Link to="/ui-progressbars">{props.t("Progress Bars")}</Link>
                </li>
                <li>
                  <Link to="/ui-tabs-accordions">
                    {props.t("Tabs & Accordions")}
                  </Link>
                </li>
                <li>
                  <Link to="/ui-typography">{props.t("Typography")}</Link>
                </li>
                <li>
                  <Link to="/ui-video">{props.t("Video")}</Link>
                </li>
                <li>
                  <Link to="/ui-general">{props.t("General")}</Link>
                </li>
                <li>
                  <Link to="/ui-colors">{props.t("Colors")}</Link>
                </li>
              </ul>
            </li> */}

            {/* <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon
                  icon="gift"
                />
                <span>{props.t("Extended")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/extended-lightbox">{props.t("Lightbox")}</Link>
                </li>
                <li>
                  <Link to="/extended-rangeslider">{props.t("Range Slider")}</Link>
                </li>
                <li>
                  <Link to="/extended-sweet-alert">{props.t("Sweet Alert")}</Link>
                </li>
                <li>
                  <Link to="/extended-session-timeout">{props.t("Session Timeout")}</Link>
                </li>
                <li>
                  <Link to="/extended-rating">{props.t("Rating")}</Link>
                </li>
                <li>
                  <Link to="/extended-notifications">{props.t("Notifications")}</Link>
                </li>
              </ul>
            </li> */}

            <li>
              <Link to="/#" className="">
                <FeatherIcon
                  icon="box"
                />
                {/* <span className="badge rounded-pill bg-danger float-end">
                  10
                </span> */}
                <span>{props.t("Төслийн тайлан")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/form-elements">{props.t("Төслийн гүйцэтгэгч байгууллага")}</Link>
                </li>
                {/* <li>
                  <Link to="/form-validation">
                    {props.t("Validation")}
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="/form-advanced">{props.t("Advanced Plugins")}</Link>
                </li> */}
                <li>
                  <Link to="/form-editors">{props.t("Төслийн талаарх дэлгэрэнгүй мэдээлэл")}</Link>
                </li>
                <li>
                  <Link to="/form-uploads">{props.t("Төслийн талаарх зураг")} </Link>
                </li>
                <li>
                  <Link to="/form-wizard">{props.t("Төслийн хэрэгжилтийн үе шат")}</Link>
                </li>
                {/* <li>
                  <Link to="/form-mask">{props.t("Form Mask")}</Link>
                </li> */}
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon
                  icon="sliders"
                />
                <span>{props.t("Хүснэгтэнд хөрвүүлсэн мэдээлэл")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/tables-basic">{props.t("Мэдээллийг төсөл бүрээр харах")}</Link>
                </li>
                <li>
                  <Link to="/tables-datatable">{props.t("Нийт мэдээлэл өгсөн хүмүүсийн өгөгдлийн сан")}</Link>
                </li>
                <li>
                  <Link to="/tables-responsive">
                    {props.t("Хамгийн сүүлд хандсан хандалтууд")}
                  </Link>
                </li>
                {/* <li>
                  <Link to="/tables-editable">{props.t("Editable")}</Link>
                </li> */}
              </ul>
            </li>

             <li>
               <Link to="/#" className="has-arrow ">
                 <FeatherIcon
                  icon="pie-chart"
                />
                <span>{props.t("Диаграмд хөрвүүлсэн мэдээлэл")}</span>
              </Link>

              <ul className="sub-menu">
                <li>
                  <Link to="/charts-apex">{props.t("Шугаман диаграм")}</Link>
                </li>
                <li>
                  <Link to="/charts-echart">{props.t("Баганан диаграм")}</Link>
                </li>
                <li>
                  <Link to="/charts-chartjs">{props.t("Хүснэгтэн")}</Link>
                </li>
                <li>
                  <Link to="/charts-knob">{props.t("Цагираган диаграм")}</Link>
                </li>
                {/* <li>
                  <Link to="/charts-sparkline">{props.t("Sparkline")}</Link>
                </li> */}
              </ul>
            </li>

            {/* <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon
                  icon="cpu"
                />
                <span>{props.t("Icons")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/icons-boxicons">{props.t("Boxicons")}</Link>
                </li>
                <li>
                  <Link to="/icons-materialdesign">
                    {props.t("Material Design")}
                  </Link>
                </li>
                <li>
                  <Link to="/icons-dripicons">{props.t("Dripicons")}</Link>
                </li>
                <li>
                  <Link to="/icons-fontawesome">{props.t("Font awesome")}</Link>
                </li>
              </ul>
            </li> */}

            {/* <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon
                  icon="map"
                />
                <span>{props.t("Maps")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/maps-google">{props.t("Google")}</Link>
                </li>
                <li>
                  <Link to="/maps-vector">{props.t("Vector")}</Link>
                </li>
                <li>
                  <Link to="/maps-leaflet">{props.t("Leaflet")}</Link>
                </li>
              </ul>
            </li> */}

            {/* <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon
                  icon="share-2"
                />
                <span>{props.t("Multi Level")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t("Level 1.1")}</Link>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    {props.t("Level 1.2")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/#">{props.t("Level 2.1")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Level 2.2")}</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
          </ul>
          {/* <div className="card sidebar-alert border-0 text-center mx-4 mb-0 mt-5">
            <div className="card-body">
              <img src={giftBox} alt="" />
              <div className="mt-4">
                <h5 className="alertcard-title font-size-16">Unlimited Access</h5>
                <p className="font-size-13">Upgrade your plan from a Free trial, to select ‘Business Plan’.</p>
                <a href="#!" className="btn btn-primary mt-2">Upgrade Now</a>
              </div>
            </div>
          </div> */}
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

// SidebarContent.propTypes = {
//   location: PropTypes.object,
//   t: PropTypes.any,
// }

export default withRouter(withTranslation()(SidebarContent))
