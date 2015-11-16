$(function () {

    generateData = function(csv) {
	data = [];
	var lines = csv.split('\n');
        $.each(lines, function(lineNo, line) {
            var items = line.split(',');
            var boxData = [];
            $.each(items, function(itemNo, item) {
		boxData.push(parseInt(item));
	    });
	    data.push(boxData);
	});
	/*for (var i = 0; i < 100; i++) {
		var boxData = [];
		for (var j = 0; j < 100; j++) {
			boxData.push(Math.floor((Math.random() * 800) + 600));
		}
		data.push(boxData);
	}*/
	console.log(data);
	return data;
    };

$.get('./../highchartsData/boxplotData.csv', function(csv) {
    $('#highchartsBoxplotContainer').highcharts({

        chart: {
            type: 'boxplot'
        },

        title: {
            text: 'Highcharts Box Plot Example'
        },

        legend: {
            enabled: false
        },

        /*xAxis: {
            categories: ['1', '2', '3', '4', '5'],
            title: {
                text: 'Experiment No.'
            }
        },*/

        yAxis: {
            title: {
                text: 'Observations'
            },
            plotLines: [{
                value: 932,
                color: 'red',
                width: 1,
                label: {
                    text: 'Theoretical mean: 932',
                    align: 'center',
                    style: {
                        color: 'gray'
                    }
                }
            }]
        },

        series: [{
            name: 'Observations',
            data: generateData(csv),
            tooltip: {
                headerFormat: '<em>Experiment No {point.key}</em><br/>'
            }
        }, {
            name: 'Outlier',
            color: Highcharts.getOptions().colors[0],
            type: 'scatter',
            data: [ // x, y positions where 0 is the first category
                [0, 644],
                [4, 718],
                [4, 951],
                [4, 969]
            ],
            marker: {
                fillColor: 'white',
                lineWidth: 1,
                lineColor: Highcharts.getOptions().colors[0]
            },
            tooltip: {
                pointFormat: 'Observation: {point.y}'
            }
        }]

    });
});
});
