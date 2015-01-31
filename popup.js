$(function (){
	 /* extiende la funcionalidad de localstorage para poder pasar arrays, local
  	storage solo acepta strings por defecto */
	Storage.prototype.setObj = function(key, obj) {
    	return this.setItem(key, JSON.stringify(obj))
	}
	/*Hace un cross-domain para agarrar el nombre del curso, el horario,
	la locación (del usuario) y a qué hora comienza de día y de noche
 	 */
	var schedule = "https://query.yahooapis.com/v1/public/yql?q=select%20content%20from%20html%20where%20url%3D%22http%3A%2F%2Fplatzi.com%2Fhorarios%2F%22%20and%20xpath%20%3D%20'%2F%2Fdiv%5B%40class%3D%22ScheduleDateList-date%20icon-calendar%22%5D%2Fspan'&format=json&diagnostics=true&callback=";
	var course = "https://query.yahooapis.com/v1/public/yql?q=select%20content%20from%20html%20where%20url%3D%22http%3A%2F%2Fplatzi.com%2Fhorarios%2F%22%20and%20xpath%20%3D%20'%2F%2Fdiv%5B%40class%3D%22ScheduleCountdown-courseInfo%22%5D%2Fspan%5B%40class%3D%22ScheduleCountdown-courseName%22%5D%2Fstrong'&format=json&diagnostics=true&callback="
	var location = "https://query.yahooapis.com/v1/public/yql?q=select%20content%20from%20html%20where%20url%3D%22http%3A%2F%2Fplatzi.com%2Fhorarios%2F%22%20and%20xpath%20%3D%20'%2F%2Fdiv%5B%40class%3D%22ScheduleCountdown-courseInfo%22%5D%2Fspan%5B%40class%3D%22ScheduleCountdown-courseInfoLocation%20icon-marker%22%5D%2Fspan'&format=json&diagnostics=true&callback="
	var day_night = "https://query.yahooapis.com/v1/public/yql?q=select%20content%20from%20html%20where%20url%3D%22http%3A%2F%2Fplatzi.com%2Fhorarios%2F%22%20and%20xpath%20%3D%20'%2F%2Fdiv%5B%40class%3D%22ScheduleDateList-scheduleInfo%22%5D%2Fspan%5B%40class%3D%22ScheduleDateList-scheduleTime%22%5D'&format=json&diagnostics=true&callback="
	/*Peticiones ajax para tomar toda la informacion que nos dieron las variables
	  anteriores
	*/
		$.getJSON(schedule,{
			tags: "span",
			format: "json"
		})
		.done(function(data){
			var dates = data.query.results.span;
			var resOut = $('#class');
			var html = '';
			var days = [];
			var month_day = []
			for (var i=0; i<dates.length; i++){
				var date = dates[i]
				html+='<span>'+ date +'</span>';
				 if(isNaN(dates[i]) === false){
				 	days.push(dates[i])
				}else{
					month_day.push(dates[i])
				}
			}
			localStorage.setObj('month_day', month_day);
			localStorage.setObj('days', days);
			resOut.html(html);
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
			var resOut = $('#location');
			var html = ''
			html = timezone;
			resOut.html(html);
		});
		$.getJSON(day_night,{
			tags: "span",
			format: "json"
		})
		.done(function(data) {
			var day_night = data.query.results.span;
			var day = day_night[0];
			localStorage['day_schedule'] = day;
			var night = day_night[1];
			localStorage['night_schedule'] = night;
			var resOutDay = $('#scheduleDay');
			var resOutNigth = $('#scheduleNight');
			var htmlDay= ' ';
			var htmlNigth=' ';
			resOutDay.html(day);
			resOutNigth.html(night)
		})


});