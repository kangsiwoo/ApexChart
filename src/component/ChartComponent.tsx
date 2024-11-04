import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ChartProps {
    data: number[];
    categories: string[];
}

const LineChart: React.FC<ChartProps> = ({ data, categories }) => {
    const options: ApexOptions = {
        chart: {
            type: 'line',
            height: 350
        },
        xaxis: {
            categories: categories
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: '데이터 시각화',
            align: 'left'
        }
    };

    const series = [
        {
            name: '데이터',
            data: data
        }
    ];

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={350}
            />
        </div>
    );
};

export default LineChart;