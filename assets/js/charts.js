// // Wait for the DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
    // Data for the charts
    const labels = ['Low Susceptibility', 'Moderate Susceptibility', 'High Susceptibility', 'Very High Susceptibility'];
    const areaData = [6109496.73, 6829830.40, 27932939.18, 7510145.54];
    const populationData = [9909.74, 18750.19, 2475.40, 7638.20];

    // Bar Chart
    const ctxBar = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Area (m²)',
                data: areaData,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                order: 1 // Ensures bars are drawn above the grid lines
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'white' // Set y-axis label color to white
                    },
                    grid: {
                        color: 'white', // Set y-axis grid lines to white
                        z: 0 // Ensure grid lines are drawn first
                    }
                },
                x: {
                    ticks: {
                        color: 'white' // Set x-axis label color to white
                    },
                    grid: {
                        color: 'white', // Set x-axis grid lines to white
                        z: 0 // Ensure grid lines are drawn first
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white' // Set legend label color to white
                    }
                }
            }
        }
    });

    // Pie Chart
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Population',
                data: populationData,
                backgroundColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,206,86,1)',
                    'rgba(75,192,192,1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white' // Set legend label color to white
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw;
                        }
                    }
                }
            }
        }
    });
// });