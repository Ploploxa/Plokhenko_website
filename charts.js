const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    }
};

// Графік ВВП
const gdpCtx = document.getElementById('gdpChart').getContext('2d');
new Chart(gdpCtx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025*'],
        datasets: [{
            label: 'Зростання ВВП (%)',
            data: [1.8, 2.0, 3.5, 2.8, 2.5, -8.3, 5.5, 6.8, 2.5, 1.9, 1.9],
            borderColor: '#5a9660',
            backgroundColor: 'rgba(90, 150, 96, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Зростання ВВП (%)'
                }
            }
        }
    }
});

// Графік інфляції
const inflationCtx = document.getElementById('inflationChart').getContext('2d');
new Chart(inflationCtx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025*'],
        datasets: [{
            label: 'Інфляція (%)',
            data: [0.5, 0.6, 1.6, 1.2, 0.3, -0.1, 1.3, 8.1, 4.3, 2.7, 2.1],
            borderColor: '#d87373',
            backgroundColor: 'rgba(216, 115, 115, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Інфляція (%)'
                }
            }
        }
    }
});

// Графік державного боргу
const debtCtx = document.getElementById('debtChart').getContext('2d');
new Chart(debtCtx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025*'],
        datasets: [{
            label: 'Державний борг (% від ВВП)',
            data: [131.2, 131.5, 126.1, 121.5, 116.6, 135.2, 127.4, 113.9, 99.1, 93.6, 90.0],
            borderColor: '#e74c3c',
            backgroundColor: 'rgba(231, 76, 60, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Державний борг (% від ВВП)'
                }
            }
        }
    }
});

// Графік безробіття
const unemploymentCtx = document.getElementById('unemploymentChart').getContext('2d');
new Chart(unemploymentCtx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025*'],
        datasets: [{
            label: 'Рівень безробіття (%)',
            data: [12.4, 11.1, 8.9, 7.0, 6.5, 6.8, 6.6, 6.0, 6.5, 6.5, 6.0],
            borderColor: '#27ae60',
            backgroundColor: 'rgba(39, 174, 96, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Рівень безробіття (%)'
                }
            }
        }
    }
});

// Графік поточного рахунку
const currentAccountCtx = document.getElementById('currentAccountChart').getContext('2d');
new Chart(currentAccountCtx, {
    type: 'bar',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025*'],
        datasets: [{
            label: 'Сальдо поточного рахунку (% від ВВП)',
            data: [0.1, 0.6, 0.5, -0.5, 0.4, -1.0, -0.8, -0.5, 0.6, 2.2, 2.3],
            backgroundColor: (context) => {
                return context.parsed.y >= 0 ? 'rgba(39, 174, 96, 0.7)' : 'rgba(231, 76, 60, 0.7)';
            },
            borderColor: (context) => {
                return context.parsed.y >= 0 ? '#27ae60' : '#e74c3c';
            },
            borderWidth: 2
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Сальдо поточного рахунку (% від ВВП)'
                },
                beginAtZero: true
            }
        }
    }
});