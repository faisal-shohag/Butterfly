'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactApexChart to avoid SSR issues
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const Chart = ({total, number, name, amount}) => {
  // Define the state using useState inside the functional component
  const [chartData] = useState({
    series: [
      {
        name: `${name}`,
        data: [total], // Total Hive Posts data
      },
      {
        name: `${amount}`,
        data: [number], // Total Hive Post Users data
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [`${name}`],
      },
      yaxis: {
        title: {
          text: 'Count',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  });

  return (
    <div> 
      <div className="mt-10">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default Chart;
