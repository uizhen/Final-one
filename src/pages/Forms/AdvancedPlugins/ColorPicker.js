import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap"
import { SketchPicker } from "react-color"
import ColorPicker from "@vtaits/react-color-picker"
import "@vtaits/react-color-picker/dist/index.css"
import "react-datepicker/dist/react-datepicker.css"
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"

const ColorPickers = () => {
  const [simple_color, setsimple_color] = useState(0)
  const [simple_color1, setsimple_color1] = useState(0)
  const [simple_color2, setsimple_color2] = useState(0)
  const [color, setcolor] = useState("red")
  const [colorRgb, setcolorRgb] = useState("red")
  const [colorCust, setcolorCust] = useState("red")
  const [colorHor, setcolorHor] = useState("#fffff")
  const [colorRGBA, setcolorRGBA] = useState("rgba(0, 194, 255, 0.78)")
  const [display_RGBA, setdisplay_RGBA] = useState(false)

  const onDrag = c1 => {
    setcolor(c1)
  }
  const onDragRgb = c1 => {
    setcolorRgb(c1)
  }
  const onDragCust = c1 => {
    setcolorCust(c1)
  }
  const handleHor = color => {
    setcolorHor(color.hex)
  }

  function handleRGBA() {
    setdisplay_RGBA(!display_RGBA)
  }

  const onSwatchHover_RGBA = color => {
    const format =
      "rgba(" +
      color.rgb.r +
      "," +
      color.rgb.g +
      "," +
      color.rgb.b +
      "," +
      color.rgb.a +
      ")"
    setcolorRGBA(format)
  }

  return (
    <React.Fragment>
      <Row>
        <Col lg="6">
          <Card>
            <CardHeader>
              <h4 className="card-title">React Colorpicker</h4>
              <p className="card-title-desc">
                Fancy and customizable colorpicker plugin
              </p>
            </CardHeader>
            <CardBody>
              <Form action="#">
                <div className="mb-3">
                  <Label>Simple input field</Label>
                  <Input
                    type="text"
                    className="colorpicker-default"
                    value={color}
                    onClick={() => {
                      setsimple_color(!simple_color)
                    }}
                    readOnly
                  />
                  {simple_color ? (
                    <ColorPicker
                      saturationHeight={100}
                      saturationWidth={100}
                      value={color}
                      onDrag={onDrag}
                    />
                  ) : null}
                </div>

                <div className="mb-3">
                  <Label>With custom options - RGBA</Label>
                  <Input
                    type="text"
                    className="colorpicker-rgba form-control"
                    value={colorRGBA}
                    onClick={handleRGBA}
                    readOnly
                  />
                  {display_RGBA ? (
                    <SketchPicker
                      color="#fff"
                      value={colorRGBA}
                      width="160px"
                      onChangeComplete={onSwatchHover_RGBA}
                    />
                  ) : null}
                </div>
                <FormGroup className="m-b-0">
                  <Label>As a component</Label>
                  <div
                    className="input-group colorpicker-default"
                    title="Using format option"
                  >
                    <input
                      readOnly
                      value={colorRgb}
                      type="text"
                      className="form-control input-lg"
                    />

                    <span
                      className="input-group-text colorpicker-input-addon"
                      onClick={() => {
                        setsimple_color1(!simple_color1)
                      }}
                    >
                      <i
                        style={{
                          height: "16px",
                          width: "16px",
                          background: colorRgb
                        }}
                      />
                    </span>
                  </div>

                  {simple_color1 ? (
                    <ColorPicker
                      saturationHeight={100}
                      saturationWidth={100}
                      value={colorRgb}
                      onDrag={onDragRgb}
                    />
                  ) : null}
                </FormGroup>
                <div className="mb-3">
                  <Label>Horizontal mode</Label>
                  <Input
                    type="text"
                    onClick={() => {
                      setsimple_color2(!simple_color2)
                    }}
                    value={colorHor}
                    readOnly
                  />
                  {simple_color2 ? (
                    <SketchPicker
                      color="#fff"
                      value={simple_color2}
                      width="160px"
                      onChangeComplete={handleHor}
                    />
                  ) : null}
                </div>

                <FormGroup className="mb-0">
                  <Label>Inline</Label>

                  <ColorPicker
                    saturationHeight={100}
                    saturationWidth={100}
                    value={colorCust}
                    onDrag={onDragCust}
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h4 className="card-title">Timepicker</h4>
              <p className="card-title-desc">
                Easily select a time for a text input using your mouse or
                keyboards arrow keys.
              </p>
            </CardHeader>
            <CardBody>
              <Form action="#">
                <FormGroup className="mb-3">
                  <Label>Default Time Picker</Label>

                  <InputGroup>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="Select time"
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: "H:i"
                      }}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="mdi mdi-clock-outline" />
                      </span>
                    </div>
                  </InputGroup>
                </FormGroup>
                <div className="form-group mb-3">
                  <Label>24 Hour Mode Time Picker</Label>

                  <InputGroup>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="Select time"
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: "H:i",
                        time_24hr: true
                      }}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="mdi mdi-clock-outline" />
                      </span>
                    </div>
                  </InputGroup>
                </div>

                <div className="form-group mb-0">
                  <label>Specify a step for the minute field</label>

                  <div className="input-group">
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="Select time"
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: "H:i"
                      }}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="mdi mdi-clock-outline" />
                      </span>
                    </div>
                  </div>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardHeader>
              <h4 className="card-title">Datepicker</h4>
              <p className="card-title-desc">
                flatpickr is a lightweight and powerful datetime picker.
              </p>
            </CardHeader>
            <CardBody>


              <Form>
                <FormGroup className="mb-4">
                  <Label>Default Functionality</Label>
                  <InputGroup>
                    {/* <DatePicker
                          selected={startDate}
                          onChange={date => setStartDate(date)}
                          dateFormat="MM/yyyy"
                          showMonthYearPicker
                        /> */}
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="dd M,yyyy"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d"
                      }}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="form-group mb-4">
                  <Label>Auto Close</Label>
                  <InputGroup>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="dd M,yyyy"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d"
                      }}
                    />
                  </InputGroup>
                </div>

                <div className="form-group mb-4">
                  <label>Multiple Date</label>
                  <div className="input-group">
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="dd M,yyyy"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        mode: "multiple",
                        dateFormat: "Y-m-d"
                      }}
                    />
                  </div>
                </div>

                <FormGroup className="mb-4">
                  <Label>Date Range</Label>
                  <InputGroup>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="dd M,yyyy"
                      options={{
                        mode: "range",
                        dateFormat: "Y-m-d"
                      }}
                    />
                  </InputGroup>
                </FormGroup>

                <div className="form-group mb-0">
                  <label>Inline Datepicker</label>
                  <Flatpickr
                    className="form-control d-block"
                    placeholder="dd M,yyyy"
                    options={{
                      inline: true,
                      altInput: true,
                      altFormat: "F j, Y",
                      dateFormat: "Y-m-d"
                    }}
                  />
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  );
}

export default ColorPickers;