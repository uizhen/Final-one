import React, { useState } from 'react';
import Select from "react-select"
import makeAnimated from "react-select/animated"
import { Col, Row } from "reactstrap"
import "@vtaits/react-color-picker/dist/index.css"
import "react-datepicker/dist/react-datepicker.css"

const ChoicesInput = () => {
  const [selectedGroup, setselectedGroup] = useState(null)
  const [selectedOptions, setselectedOptions] = useState(null)
  const animatedComponents = makeAnimated()

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }

  function handleSelectOptions(selectedOptions) {
    setselectedOptions(selectedOptions)
  }

  const optionGroup = [
    {
      label: "Picnic",
      options: [
        { label: "Mustard", value: "Mustard" },
        { label: "Ketchup", value: "Ketchup" },
        { label: "Relish", value: "Relish" }
      ]
    },
    {
      label: "Camping",
      options: [
        { label: "Tent", value: "Tent" },
        { label: "Flashlight", value: "Flashlight" },
        { label: "Toilet Paper", value: "Toilet Paper" }
      ]
    }
  ]

  const optionMulti = [
    { label: "Choice 1", value: "choice-1" },
    { label: "Choice 2", value: "choice-2" },
    { label: "Choice 3", value: "choice-3" }
  ]

  const optionGroup1 = [
    {
      label: "UK",
      options: [
        { label: "London", value: "London" },
        { label: "Manchester", value: "Manchester" },
        { label: "Liverpool", value: "Liverpool" }
      ]
    },
    {
      label: "FR",
      options: [
        { label: "Paris", value: "Paris" },
        { label: "Lyon", value: "Lyon" },
        { label: "Marseille", value: "Marseille" }
      ]
    },
    {
      label: "DE",
      options: [
        { label: "Hamburg", value: "Hamburg" },
        { label: "Munich", value: "Lyon" },
        { label: "Berlin", value: "Berlin" }
      ]
    },
    {
      label: "US",
      options: [
        { label: "New York", value: "New York" },
        { label: "Washington", value: "Washington" },
        { label: "Michigan", value: "Michigan" }
      ]
    },
    {
      label: "SP",
      options: [
        { label: "Madrid", value: "Madrid" },
        { label: "Barcelona", value: "Barcelona" },
        { label: "Malaga", value: "Malaga" }
      ]
    },
    {
      label: "CA",
      options: [
        { label: "Montreal", value: "Montreal" },
        { label: "Toronto", value: "Toronto" },
        { label: "Vancouver", value: "Vancouver" }
      ]
    },
  ]
  return (
    <React.Fragment>
      <div>
        <h5 className="font-size-14 mb-3">Single select input Example</h5>

        <Row>
          <Col lg={4} md={6}>
            <div className="mb-3">
              <label htmlFor="choices-single-default" className="form-label font-size-13 text-muted">Default</label>
              <Select
                value={selectedGroup}
                onChange={() => {
                  handleSelectGroup()
                }}
                options={optionGroup}
                classNamePrefix="select2-selection"
              />
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="mb-3">
              <label htmlFor="choices-single-groups" className="form-label font-size-13 text-muted">Option
                groups</label>
              <Select
                value={selectedOptions}
                onChange={() => {
                  handleSelectOptions()
                }}
                options={optionGroup1}
                classNamePrefix="select2-selection"
              />
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="mb-3">
              <label htmlFor="choices-single-no-search" className="form-label font-size-13 text-muted">Options added
                via config with no search</label>
              <select className="form-control" name="choices-single-no-search"
                id="choices-single-no-search">
                <option value="0">Zero</option>
              </select>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="mb-3">
              <label htmlFor="choices-single-no-sorting" className="form-label font-size-13 text-muted">Options added
                via config with no search</label>
              <select className="form-control" name="choices-single-no-sorting"
                id="choices-single-no-sorting">
                <option value="Madrid">Madrid</option>
                <option value="Toronto">Toronto</option>
                <option value="Vancouver">Vancouver</option>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Paris">Paris</option>
                <option value="Malaga">Malaga</option>
                <option value="Washington" disabled>Washington</option>
                <option value="Lyon">Lyon</option>
                <option value="Marseille">Marseille</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Munich">Munich</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Berlin">Berlin</option>
                <option value="Montreal">Montreal</option>
                <option value="New York">New York</option>
                <option value="Michigan">Michigan</option>
              </select>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-4">
        <h5 className="font-size-14 mb-3">Multiple select input</h5>

        <Row>
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <label htmlFor="choices-multiple-default" className="form-label font-size-13 text-muted">Default</label>
              <Select
                defaultValue={[optionMulti[1]]}
                isMulti
                options={optionMulti}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <label htmlFor="choices-multiple-remove-button" className="form-label font-size-13 text-muted">Loading</label>
              <Select
                defaultValue={[optionMulti[1]]}
                isMulti={true}
                options={optionMulti}
                classNamePrefix="select2-selection"
                isLoading={true}
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <label className="control-label">Animated</label>
              <Select
                defaultValue={[optionMulti[1]]}
                isMulti={true}
                options={optionMulti}
                classNamePrefix="select2-selection"
                closeMenuOnSelect={false}
                components={animatedComponents}
              />
            </div>
          </div>

        </Row>
        <div>
          <label className="control-label">Disable</label>
          <Select
            defaultValue={[optionMulti[1], optionMulti[2]]}
            isMulti={true}
            options={optionGroup}
            classNamePrefix="select2-selection"
            isDisabled={true}
          />
        </div>
      </div>

    </React.Fragment>
  );
}

export default ChoicesInput;