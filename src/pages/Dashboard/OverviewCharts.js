import React from 'react';
import ReactApexChart from "react-apexcharts"

const OverviewCharts = () => {
    const barchartColors = ["#5156be", "#34c38f"];
    const series = [{
        name: 'Profit',
        data: [12.45, 16.2, 8.9, 11.42, 12.6, 18.1, 18.2, 14.16, 11.1, 8.09, 16.34, 12.88]
    }, {
        name: 'Loss',
        data: [-11.45, -15.42, -7.9, -12.42, -12.6, -18.1, -18.2, -14.16, -11.1, -7.09, -15.34, -11.88]
    }];
    const options = {
        chart: {
            type: 'bar',
            height: 400,
            stacked: true,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '20%',
            },
        },
        colors: barchartColors,
        fill: {
            opacity: 1
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        yaxis: {
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "%";
                }
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                rotate: -90
            }
        }
    };
    return (
        <ReactApexChart
            options={options}
            series={series}
            type="bar"
            className="apex-charts"
        />
    );
}

export default OverviewCharts;