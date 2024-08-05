import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Chart.css'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
    const data = {
        labels: ['5', '', '9', '', '11', '', '', '13', '', '15', '', '', '17', '', '', '19', '', '21', '', '', '23', '', '25', '', '27'],
        datasets: [{
            label: 'Activity',
            data: [4000, 10000, 4500, 4000, 6000, 6000, 6500, 5500, 5800, 4900, 3000, 7000, 8000, 6500, 11000, 8100, 13000, 20001, 11700, 8600, 7100, 6000, 8100, 7000, 8900, 9800, 8700, 6600, 7500, 1400],
            backgroundColor: 'rgba(53, 162, 235, 0.8)',
            borderColor: 'rgba(53, 162, 235, 1)',
            borderWidth: 1,
            borderRadius: {
                topLeft: 20,
                topRight: 20,
                bottomLeft: 20,
                bottomRight: 20,
            },
            borderSkipped: false,
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: 'rgb(60 60 60)'
                },
                ticks: {
                    color: 'gainsboro',
                    callback: function (value) {
                        if (value === 0 || value === 5000 || value === 10000 || value === 15000) {
                            return value === 0 ? '0' : value / 1000 + 'k'; // Format labels as 5k, 10k, etc.
                        }
                        return null; // Hide other labels
                    }
                }
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: 'gainsboro',
                }
            }
        }
    };

    return <Bar style={{ position: 'relative' }} data={data} options={options} />;
};

export default Chart;
