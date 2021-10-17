import React from "react"
import MetaTags from 'react-meta-tags';

// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex"
import DashedLine from "../AllCharts/apex/dashedLine"
import SplineArea from "../AllCharts/apex/SplineArea"
import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn"
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels"
import BarChart from "../AllCharts/apex/barchart"
import LineColumnArea from "../AllCharts/apex/LineColumnArea"
import RadialChart from "../AllCharts/apex/RadialChart"
import PieChart from "../AllCharts/apex/PieChart"
import DonutChart from "../AllCharts/apex/dountchart"

import { Row, Col, Card, CardBody, CardTitle, CardHeader, Container } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Apexchart = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Apex Charts | Minia - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Charts" breadcrumbItem="Apex Charts" />

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Line with Data Labels</CardTitle>
                </CardHeader>
                <CardBody>
                  <div dir="ltr">
                    <LineApexChart />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Dashed Line</CardTitle>
                </CardHeader>
                <CardBody>
                  <div dir="ltr">
                    <DashedLine />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle> Spline Area </CardTitle>
                </CardHeader>
                <CardBody>
                  <div dir="ltr">
                    <SplineArea />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle> Column Chart </CardTitle>
                </CardHeader>
                <CardBody>
                  <div dir="ltr">
                    <Apaexlinecolumn />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    Column with Data Labels{" "}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div dir="ltr">
                    <ColumnWithDataLabels />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Bar Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <div dir="ltr">
                    <BarChart />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    Line, Column & Area Chart{" "}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div dir="ltr">
                    <LineColumnArea />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Radial Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <div dir="ltr">
                    <RadialChart />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Pie Chart </CardTitle>
                </CardHeader>
                <CardBody>
                  <div dir="ltr">
                    <PieChart />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Donut Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <div dir="ltr">
                    <DonutChart />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Apexchart
