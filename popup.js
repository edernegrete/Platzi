$(function (){
	var schedule = "https://query.yahooapis.com/v1/public/yql?q=select%20content%20from%20html%20where%20url%3D%22http%3A%2F%2Fmejorando.la%2Fhorarios%2F%22%20and%20xpath%20%3D%20'%2F%2Fdiv%5B%40class%3D%22ScheduleDateList-date%20icon-calendar%22%5D%2Fspan'&format=json&diagnostics=true&callback=";
	var course = "https://query.yahooapis.com/v1/public/yql?q=select%20content%20from%20html%20where%20url%3D%22http%3A%2F%2Fmejorando.la%2Fhorarios%2F%22%20and%20xpath%20%3D%20'%2F%2Fdiv%5B%40class%3D%22ScheduleCountdown-courseInfo%22%5D%2Fspan%5B%40class%3D%22ScheduleCountdown-courseName%22%5D%2Fstrong'&format=json&diagnostics=true&callback="
	var location = "https://query.yahooapis.com/v1/public/yql?q=select%20content%20from%20html%20where%20url%3D%22http%3A%2F%2Fmejorando.la%2Fhorarios%2F%22%20and%20xpath%20%3D%20'%2F%2Fdiv%5B%40class%3D%22ScheduleCountdown-courseInfo%22%5D%2Fspan%5B%40class%3D%22ScheduleCountdown-courseInfoLocation%20icon-marker%22%5D%2Fspan'&format=json&diagnostics=true&callback="
		$.getJSON(schedule,{
			tags: "span",
			format: "json"
		})
		.done(function(data){
			var dates = data.query.results.span;
			var resOut = $('#class');
			var html = '';
			for (var i=0; i<dates.length; i++){
				var date = dates[i]
				html+='<span>'+ date +'</span>'
			}
			resOut.html(html)
		});

		$.getJSON(course,{
			tags: 'strong',
			format: 'json'
		})
		.done(function(data){
			var courseName = data.query.results.strong;
			localStorage['courseNameStorage'] = courseName;
			var resOut = $('#course');
			var html = '';
			html = courseName;
			resOut.html(html);
		});
		$.getJSON(location,{
			tags: 'span',
			format: 'json'
		})
		.done(function(data){
			var timezone = data.query.results.span;
			localStorage['timezone'] = timezone;
			var resOut = $('#location');
			var html = ''
			html = timezone;
			resOut.html(html);
		});
});