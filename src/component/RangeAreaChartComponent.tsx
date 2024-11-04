import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface DataPoint {
    x: string;
    y: [number, number];
}

interface RangeAreaChartProps {
    data: DataPoint[];
}

const RangeAreaChartComponent: React.FC<RangeAreaChartProps> = ({ data }) => {
    const options: ApexOptions = {
        chart: {
            type: 'rangeArea',
            height: 350
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: '월별 온도 범위 차트'
        },
        markers: {
            hover: {
                sizeOffset: 5
            }
        },
        dataLabels: {
            enabled: false
        },
        yaxis: {
            title: {
                text: '온도 (°C)'
            }
        },
        xaxis: {
            type: 'category'
        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val: number) {
                    return val + "°C"
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        }
    };

    const series = [
        {
            name: '온도 범위',
            data: data
        }
    ];

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="rangeArea"
                height={350}
            />
        </div>
    );
};

export default RangeAreaChartComponent;