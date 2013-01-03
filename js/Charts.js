var chartObj1 = {
            chart: {
                renderTo: 'container-1',
                type: 'column',
				events: {
                load: function(event) {
                   // alert ('Chart loaded');
				   //console.log(this);
                }
			 }
            },
            title: {
                text: 'Monthly Average Rainfall'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            legend: {
                layout: 'vertical',
                backgroundColor: '#FFFFFF',
                align: 'left',
                verticalAlign: 'top',
               
                y: 70,
                floating: true,
                shadow: true
            },
            tooltip: {
                formatter: function() {
                    return ''+
                        this.x +': '+ this.y +' mm';
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [
			{
                name: 'Tokyo',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    
            }, {
                name: 'New York',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
    
            }, {
                name: 'London',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    
            }, {
                name: 'Berlin',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    
            }]
        };

var chartObj2 = {
            chart: {
                renderTo: 'container-2',
                type: 'column'
            },
            title: {
                text: 'Monthly wefw Rainfall'
            },
            subtitle: {
                text: 'Source: wdwdwd.com'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            legend: {
                layout: 'vertical',
                backgroundColor: '#FFFFFF',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                shadow: true
            },
            tooltip: {
                formatter: function() {
                    return ''+
                        this.x +': '+ this.y +' mm';
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
                series: [{
                
                name: 'London',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    
            }, {
                name: 'Berlin',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    
            }]
        }
		
var chartObj3 = {
            chart: {
                renderTo: 'dialog',
                type: 'column'
            },
            title: {
                text: 'Monthly wefw Rainfall'
            },
            subtitle: {
                text: 'Source: wdwdwd.com'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            legend: {
                layout: 'vertical',
                backgroundColor: '#FFFFFF',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                shadow: true
            },
            tooltip: {
                formatter: function() {
                    return ''+
                        this.x +': '+ this.y +' mm';
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
                series: [{
                
                name: 'London',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    
            }, {
                name: 'Berlin',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    
            }]
        }

 var chartTest = {
        chart: {
            renderTo: 'container-3',
            events: {
                load: function(event) {
                    //alert ('Chart loaded chart');
                }
            }        
        },
        xAxis: {
        },
        
        series: [{
            animation: false,
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]     
        }]
    }
	
/*	













// load charts
	if ($('#charts').length == 1) {
		$.ajax({
			url: APP.base_url + '/ajax/charts',
			data: 'ids=' + $('#charts').data('charts'),
			dataType: 'xml',
			success: function(xml){
				parseChartData(xml);
			}
		});
	}

	var chartArray = [];
	// parsing the chart xml data
	function parseChartData(xml) {
		
		var highchart;
		
		// loop through all charts
		$(xml).find('chart').each(function(i, chart){
			
			// cache element
			var chart = $(chart);
			
			// add container for chart
			$('#chart-' + chart.attr('id') + '-wrapper')
				// .append('<h4>' + chart.attr('title') + '</h4><h5>' + (chart.attr('subtitle').length > 0 ? chart.attr('subtitle') : '&nbsp;') + '</h5><div id="chart-' + chart.attr('id') + '" class="graph-wrapper"></div><p class="zoom-graph"><a href="#zoomChart-' + chart.attr('id') + '" rel="zoom-graph" class="lightview">' + lang[APP.language_code].charts.zoom + '</a></p>');
				.append('<h4>' + chart.attr('title') + '</h4><h5>' + (chart.attr('subtitle').length > 0 ? chart.attr('subtitle') : '&nbsp;') + '</h5><div id="chart-' + chart.attr('id') + '" class="graph-wrapper"></div>');
			
			// legend options
			var legendOptions = {
				y: 0,
				x: -14,
				floating: true,
				verticalAlign: 'bottom',
				align: 'left',
				borderRadius: 0,
				borderWidth: 0,
				margin: 0,
				symbolWidth: 5,
				symbolPadding: 3,
				style: {
					padding: 10
				},
				itemStyle: {
					color: '#4E453D',
					fontSize: 10,
					fontFace: 'sans-serif',
					textDecoration: 'none'
				},
				itemHoverStyle: {
					textDecoration: 'none'
				},
				itemHiddenStyle: {
					textDecoration: 'line-through'
				}
			};
			
			// column width
			var columnWidth = 15;
			
			// set series variable
			var series  = [];
			var pieData = [];
			chart.find('set').each(function(i, data){
				
				// check chart type
				if (chart.attr('type') == 'pie') {
					
					var set = [
						$(data).find('name').text(),
						parseFloat($(data).find('values').text())
					];
					
					pieData.push(set);
					
					set = null;
					
					legendOptions.align = 'right';
					legendOptions.verticalAlign = 'top';
					legendOptions.layout = 'vertical';
					legendOptions.x = -10;
					legendOptions.width = 105;
					
				} else if (chart.attr('type') == 'spline') {
					
					// parse values as float
					var values = $(data).find('values').text().split(',');
					$(values).each(function(i, value){
						if (parseFloat(value) == 'NaN') {
							values[i] = null;
						} else {
							values[i] = parseFloat(value);
						}
					});
					
					var set = {
						name: $(data).find('name').text(),
						type: $(data).attr('type'),
						data: values
					};
					
					series.push(set);
					
					set = null;
					
				} else if (chart.attr('type') == 'column' || chart.attr('type') == 'stacked') {
					
					// parse values as float
					var values = $(data).find('values').text().split(',');
					$(values).each(function(i, value){
						if (parseFloat(value) == 'NaN') {
							values[i] = null;
						} else {
							values[i] = parseFloat(value);
						}
					});
					
					// set data object
					var set = {
						name: $(data).find('name').text(),
						type: ($(data).attr('type').length == 0 ? 'column' : $(data).attr('type')),
						data: values
					};
					
					// set stack index if stacking is enabled
					if (chart.attr('type') == 'stacked') set.stack = 0;
					
					// push to data array and nullify
					series.push(set);
					set = null;
					
					// set column width to null if there are too many values
					if (values.length > 8 || chart.find('data > set[type="column"]').length > 1) columnWidth = null;
					
					// disable legend if only one data set
					if (chart.find('data > set').length == 1) legendOptions.enabled = false;
					
				}
				
			});
			
			if (chart.attr('type') == 'pie') {
				var set = {
					type: 'pie',
					data: pieData
				};
				series.push(set);
			}
			
			// marker options
			var marker_enabled = chart.find('data').attr('show_points') == 'off' ? false : true;
			
			// yaxis options
			var yaxisOption = {
				title: null,
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}],
				endOnTick: true,
				showLastLabel: true,
				showFirstLabel: true,
				labels: {
					style: {
						fontSize: '9px'
					}
				},
				max: chart.find('yaxis').attr('max') == 'null' ? null : chart.find('yaxis').attr('max'),
				min: chart.find('yaxis').attr('min') == 'null' ? null : chart.find('yaxis').attr('min'),
				maxPadding: 0,
				minPadding: .1
			};
			
			// render chart
			highchart = new Highcharts.Chart({
				chart: {
					renderTo: 'chart-' + chart.attr('id'),
					height: 170,
					width: 230,
					spacingTop: 5,
					spacingRight: 0,
					spacingBottom: 10,
					spacingLeft: 0,
					marginBottom: 50,
					backgroundColor: null
				},
				credits: { enabled: false },
				title: null,
				colors: ['#005a8a', '#52c5e1', '#34b133', '#a19689', '#80725c', '#d1ccc3', '#141a42'],
				xAxis: {
					categories: chart.find('categories').text().split(','),
					tickmarkPlacement: 'on',
					tickInterval: (chart.find('xaxis').attr('tick_interval').length == 0 ? null : parseInt(chart.find('xaxis').attr('tick_interval'))),
					labels: {
						style: {
							fontSize: '9px'
						}
					}
				},
				yAxis: yaxisOption,
				legend: legendOptions,
				tooltip: {
					backgroundColor: '#000',
					borderWidth: 0,
					font: '10px sans-serif',
					style: {
						color: '#fff',
						font: 'bold 10px sans-serif'
					},
					shadow: false,
					formatter: function(){
						if (this.series.type == 'pie') {
							return this.point.name + ': ' + this.y;
						} else {
							return this.x + ': ' + this.y;
						}
					}
				},
				plotOptions: {
					series: {
						stacking: (chart.attr('type') == 'stacked' ? 'normal' : null),
						marker: {
							enabled: marker_enabled,
							radius: 3,
							states: {
								hover: {
									enabled: true
								}
							}
						}
					},
					line: {
						animation: false,
						shadow: false
					},
					column: {
						animation: false,
						shadow: false,
						borderWidth: 0,
						pointWidth: columnWidth
					},
					pie: {
						animation: false,
						shadow: false,
						allowPointSelect: true,
						cursor: 'pointer',
						borderWidth: 1,
						dataLabels: {
							enabled: false
						},
						showInLegend: true,
						innerSize: '60%',
						size: '101%',
						center: ['26%', '56%']
					},
					spline: {
						animation: false,
						shadow: false
					}
				},
				series: series
			});
			
			// add chart to array
			if (chart.attr('id') !== undefined) chartArray[chart.attr('id')] = highchart;
			
			// remove loading class to chart wrapper
			$('#chart-' + chart.attr('id') + '-wrapper').removeClass('loading');
			
			// reuse variable
			highchart = null;
			
		});
		
	}






 */