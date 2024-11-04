import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface AreaChartProps {
    data: number[][];
    categories: string[];
}

const AreaChartComponent: React.FC<AreaChartProps> = ({ data, categories }) => {
    const options: ApexOptions = {
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: '에어리어 차트 예시',
            align: 'left'
        },
        xaxis: {
            type: 'category',
            categories: categories
        },
        yaxis: {
            opposite: true
        },
        legend: {
            horizontalAlign: 'left'
        }
    };

    const series = [
        {
            name: '시리즈 1',
            data: data[0]
        },
        {
            name: '시리즈 2',
            data: data[1]
        }
    ];

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
        />
    );
};

export default AreaChartComponent;