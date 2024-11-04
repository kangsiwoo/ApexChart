import React from 'react'
import './App.css';
import LineChart from "./component/ChartComponent";
import AreaChartComponent from "./component/AreaChartComponent";
import ColumnChartComponent from "./component/ColumnChartComponent";
import RangeAreaChartComponent from "./component/RangeAreaChartComponent";

const App = () => {

    // const data = [30, 40, 35, 50, 49, 60, 70, 91, 125];
    const areaData = [
        [31, 40, 28, 51, 42, 109, 100],
        [11, 32, 45, 32, 34, 52, 41]
    ];
    const columnData = [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160];
    const lineData = [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16];
    const categories = ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan'];
    const rangeAreaData: any[] = [
        { x: 'Jan', y: [-2, 4] },
        { x: 'Feb', y: [-1, 6] },
        { x: 'Mar', y: [3, 10] },
        { x: 'Apr', y: [8, 16] },
        { x: 'May', y: [13, 22] },
        { x: 'Jun', y: [18, 26] },
        { x: 'Jul', y: [21, 29] },
        { x: 'Aug', y: [21, 28] },
        { x: 'Sep', y: [17, 24] },
        { x: 'Oct', y: [11, 18] },
        { x: 'Nov', y: [6, 12] },
        { x: 'Dec', y: [1, 7] }
    ];

  return (
    <>
        <h1>Charts</h1>
        <section className={"charts"}>
            <LineChart data={lineData} categories={categories}/>
            <AreaChartComponent data={areaData} categories={categories} />
            <ColumnChartComponent data={columnData} categories={categories} />
            <RangeAreaChartComponent data={rangeAreaData} />
        </section>
    </>
  );
}

export default App;
