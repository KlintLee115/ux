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
                plugins: {
                    legend: {
                        position: "right",
                        labels: {
                            font: {
                                size: 15,
                                weight: "bold"
                            }
                        },
                    }
                },
                responsive: true,
                color: "black",
                font: {
                    size: 20,
                    weight: "bolder"
                }
            }
        } data={
            {
                labels: ['Courses'],
                xLabels: ["CPRG250", "KOK"],
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
            }
        } />
    </div>;
}
