import React from "react"
import { Row, Col, Card, CardBody, CardTitle, Container, CardHeader } from "reactstrap"
import MetaTags from 'react-meta-tags';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// Charts
import Gauge from "../AllCharts/echart/gaugechart"
import Line from "../AllCharts/echart/linechart"
import LineBar from "../AllCharts/echart/linebarchart"
import Doughnut from "../AllCharts/echart/doughnutchart"
import Pie from "../AllCharts/echart/piechart"
import Scatter from "../AllCharts/echart/scatterchart"
import Bubble from "../AllCharts/echart/bubblechart"
import Candlestick from "../AllCharts/echart/candlestickchart"

const EChart = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>E Charts | Minia - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Charts" breadcrumbItem="E Charts" />
          <Row>
            <Col xl="6">
              <Card>
                <CardHeader>
                  <CardTitle>Line Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="line-chart" className="e-chart">
                    <Line />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardHeader>
                  <CardTitle>Mix Line-Bar</CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="mix-line-bar" className="e-chart">
                    <LineBar />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl="6">
              <Card>
                <CardHeader>
                  <CardTitle>Doughnut Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="doughnut-chart" className="e-chart">
                    <Doughnut />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardHeader>
                  <CardTitle>Pie Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="pie-chart" className="e-chart">
                    <Pie />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl="6">
              <Card>
                <CardHeader>
                  <CardTitle>Scatter Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="scatter-chart" className="e-chart">
                    <Scatter />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardHeader>
                  <CardTitle>Bubble Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="bubble-chart" className="e-chart">
                    <Bubble />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl="6">
              <Card>
                <CardHeader>
                  <CardTitle>Candlestick Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="candlestick-chart" className="e-chart">
                    <Candlestick />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardHeader>
                  <CardTitle>Gauge Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="gauge-chart" className="e-chart">
                    <Gauge />
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

export default EChart
