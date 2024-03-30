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

export default function CourseMgmt() {
    return <div className='w-[500px] mx-auto'>
        <h3 className='text-lg font-bold mb-3'>GPA: 3.6</h3>
        <Bar options={
            {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        grid: {
                            color: 'black',
                        },
                        ticks: {
                            font: {
                                weight: "normal"
                            },
                            color: "black"
                        }
                    },
                    x: {
                        axis: "x",
                        ticks: {
                            color: "black",
                            font: {
                                size: 16
                            },

                        }
                    },
                },
                responsive: true,
                color: "black",
                font: {
                    size: 20,
                    weight: "bolder"
                }
            }
        }
            data={
                {
                    labels: ['CPRG250', 'CPRG203', 'CPSY300', 'PHIL200', 'ABCD123'],
                    datasets: [
                        {
                            data: [3.6, 3.7, 3.0, 3.5, 3.2],
                            backgroundColor: ['green', 'orange', 'white', 'blue', 'yellow']
                        },
                    ],
                }
            } />
    </div>;
}
