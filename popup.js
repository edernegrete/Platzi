$(function (){
	var schedule = "https://query.yahooapis.com/v1/public/yql?q=select%20content%20from%20html%20where%20url%3D%22http%3A%2F%2Fmejorando.la%2Fhorarios%2F%22%20and%20xpath%20%3D%20'%2F%2Fdiv%5B%40class%3D%22ScheduleDateList-date%20icon-calendar%22%5D%2Fspan'&format=json&diagnostics=true&callback=";
		$.getJSON(schedule,{
			tags: "span",
			format: "json"
		})
		.done(function(data){
			var dates = data.query.results.span;
			var resOut = $('#firstClass');
			var html = '';
			for (var i=0; i<dates.length; i++){
				var date = dates[i]
				html+='<span>'+ date +'</span>'
			}
			resOut.html(html)
		});
	});