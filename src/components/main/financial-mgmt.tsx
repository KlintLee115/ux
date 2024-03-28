"use client"

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartData, ChartOptions, Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement)

interface PieChartProps {
    data: ChartData<'pie'>;
    options?: ChartOptions<'pie'>
}
const options: ChartOptions<'pie'> = {
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                font: {
                    size: 15 // Adjust font size as needed
                }
            }
        },
    },
};
const PieChart: React.FC<PieChartProps> = ({ data, options }) => {
    return (
        <div>
            <Pie data={data} options={options} />
        </div>
    );
};

const data: ChartData<'pie'> = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'Amount (CAD $)',
            data: [12, 19, 3],
            backgroundColor: ['red', 'blue', 'yellow'],
            borderColor: ['red', 'blue', 'yellow'],
            borderWidth: 1,
        },
    ],
};


export default function FinancialMgmt() {
    return (
        <>
            <div className="flex">
                <p className="text-center text-7xl text-yellow-500">!</p>
                <p className="text-base mt-4 text-wrap max-w-48">Your PAYMENT DUE DATE IS <span className="text-blue-700 font-bold">MARCH, 15</span></p>
            </div>
            <div className='flex flex-wrap justify-between my-8'>
                <div className='flex items-center gap-2'>
                    <div className='bg-yellow-400 w-3 h-3'></div>
                    <p>TOTAL PAID</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='bg-red-600 w-3 h-3'></div>
                    <p>DUE</p>
                </div>
                <div className='flex flex-wrap items-center gap-2'>
                    <div className='bg-blue-600 w-3 h-3'></div>
                    <p>BALANCE</p>
                </div>
            </div>
            <div className='w-72'>
                <PieChart data={data} options={options} />
            </div>
        </>
    );
}
