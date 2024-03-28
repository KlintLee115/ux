"use client"

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['Courses'];

export const data = {
    labels,
    datasets: [
        {
            label: 'CPRG250',
            data: [3.6],
            borderColor: 'red',
            backgroundColor: 'red',
        },
        {
            label: 'CPSY250',
            data: [3.7],
            borderColor: 'green',
            backgroundColor: 'green',
        },
        {
            label: 'CPRG123',
            data: [3.6],
            borderColor: 'blue',
            backgroundColor: 'blue',
        },
        {
            label: 'CPRG167',
            data: [3.6],
            borderColor: 'yellow',
            backgroundColor: 'yellow',
        },
        {
            label: 'CPRG121',
            data: [4.0],
            borderColor: 'purple',
            backgroundColor: 'purple',
        },
    ],
};

export default function CourseMgmt() {
    return <div className='w-[500px] mx-auto'>
        <h3 className='text-lg font-bold mb-3'>GPA: 3.6</h3>
        <Bar options={
            {
                indexAxis: "x",
                responsive: true,
                color: "fff",
                font: {
                    weight: "bolder"
                }
            }
        } data={data} />
    </div>;
}
