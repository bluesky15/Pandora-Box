import Chart from 'chart.js';

angular.module('charts',[])
    .controller('charts', function ($scope) {
        var ctx = document.getElementById('myChart');
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: [{
                x: 10,
                y: 20
            }, {
                x: 15,
                y: 10
            }],
            options: {
                scales: {
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
    });
