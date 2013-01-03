(function($) {
	$.fn.chartpop = function(options) {
		var settings = $.extend(
			{
				"div": this, 
				"width": 800,
				"height": 400,
				"spinner": true
			},
			options
		);
		var dialog = $("#dialog-wrapper");
		var cont = '';
		dialog.css({'width': settings.width, 'height': settings.height});
		
		//apply mask
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').fadeIn(200);   
		$('#mask').fadeTo("slow",0.9);
		$('#mask').css({'width': maskWidth,'height': maskHeight});
		
		//open dialog box centered
		var winH = $(window).height();
		var winW = $(window).width();
		dialog.css('top',  winH/2-settings.height/2);
		dialog.css('left', winW/2-settings.width/2);
		
		//spinner
		if (settings.spinner) 
			$("#dialog").html("<div style=\"width: 220px; height: 19px; margin: 0 auto; margin-top: 200px;\"><img src=\"img/spinner_2.gif\" /></div>");
		
		var high_chart;
		dialog.fadeIn(500, function() {
			if (settings.clone == true) {
				//console.log("clone the graph "+settings.data.chart.renderTo);
				settings.data.chart.renderTo = 'dialog';
				high_chart = new Highcharts.Chart(settings.data);	
				//scale the graph 
				high_chart.setSize(settings.width, settings.height);
			} else {
				//swap content from active div to dialog-box
				$("#dialog").html('');
				var re = $("#dialog").contents();
				cont = settings.div.contents();
				$("#dialog").append(cont);
				//settings.data.chart.renderTo = settings.div;
				
				//apply some text or whatever to the container div (this);
				settings.div.append("åpnet i vindu");
				//scale the graph 
				settings.obj.setSize(settings.width, settings.height);
			}
		});
		
		//hide open-icon
		this.siblings().hide();
		
		//make mask clickable
		$("#mask").click(onClick);
		
		//make close btn clickable
		$("a.dialog-close").live("click", onClick);
		
		//make ESC-key close the graph
		$(document).keyup(function(e) {
			if (e.keyCode == 27) { 
				onClick(e);
			}
		});
		
		function onClick(e) {
			e.preventDefault();
			if (settings.clone == false) {
				//swap content with original content
				settings.div.html(cont);
				//scale down graph
				//set original graph back to original size....
				var org_w = (settings.data.chart.width == null) ? 300 : settings.data.chart.width;
				var org_h = (settings.data.chart.height == null) ? 300 : settings.data.chart.height;
				settings.obj.setSize(org_w, org_h);
			} else {
				//remove highcharts object	
			}
			high_chart = null;
			//hide dialog and mask
			dialog.fadeOut(100, function() {
				//show open-icon
				settings.div.siblings().show();
				$("#dialog").html('');
			});
			$("#mask").hide();
		}
		
		
		/* Highcharts remove - prototype */
		/*Highcharts.Chart.prototype.remove = function(test) {
			console.log("test > "+test);
			function purge(d) {
				var a = d.attributes, i, l, n;
				if (a) {
					l = a.length;
					for (i = l - 1; i >= 0; i -= 1) {
						n = a[i].name;
						if (n == 'coords') {
							d[n] = '0,0,0,0';	
						} else if (typeof d[n] != 'object') {
							d[n] = null;	
						}	
					}
				}
				
				a = d.childNodes;
				if (a) {
					l = a.length;
					for (i = 0; i < l; i += 1) {
						purge(d.childNodes[i]);	
					}
				}
			}
			purge(test);
			test.innerHTML = '';
			console.log(" - - empty - -");
			//var container
			
			//purge(---container)
			//remove the html
			//container.innerHTML = '';
		}
		
		
		return this;
		*/
		
		
	};
})(jQuery);