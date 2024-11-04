import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ColumnChartProps {
    data: number[];
    categories: string[];
}

const ColumnChartComponent: React.FC<ColumnChartProps> = ({ data, categories }) => {
    const options: ApexOptions = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                // endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: categories,
        },
        yaxis: {
            title: {
                text: '값'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " 단위"
                }
            }
        },
        title: {
            text: '월별 데이터',
            align: 'left'
        }
    };

    const series = [{
        name: '월별 데이터',
        data: data
    }];

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={350}
            />
        </div>
    );
};

export default ColumnChartComponent;