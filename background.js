$(function (){
	Storage.prototype.getObj = function(key) {
    	return JSON.parse(this.getItem(key))
	};

  var months = [];
  var daySchedulehour =''
  var nightSchedulehour = ''
  
	function getMonth(){
    var storedmonth = localStorage.getObj('month_day');
		for (var i = 0; i<storedmonth.length; i++){
			if((i%2) != 1){
   				months.push(storedmonth[i])
			}
		}
	}
  function getHours(){
    var day_schedule = localStorage['day_schedule'];
    var night_schedule = localStorage['night_schedule'];
    var dayStartingHour = [];
    var nightStartingHour = [];
    var dayHour = '';
    var nightHour = '';
    var daystartHour;
    for (var i = 0; day_schedule[i]!= '>'; i++){
      dayStartingHour.push(day_schedule[i])
    }
    for (var k = 0; night_schedule[k]!= '>'; k++){
      nightStartingHour.push(night_schedule[k])
    }
    nightHourstring = nightStartingHour.toString();
    nightHour = nightHourstring.replace(/,/g, "");
    dayHourstring = dayStartingHour.toString();
    dayHour = dayHourstring.replace(/,/g, "");
    if(dayHour[1]==':'){
      var dayHourTwodigits = 0 + dayHour;
      daySchedulehour = dayHourTwodigits[0] + dayHourTwodigits [1]
    }else{
      daySchedulehour = dayHour[0] + dayHour[1]
    }
    if(nightHour[1]==':'){
      var nightHourTwodigits = 0 + nightHour;
      nightSchedulehour = nightHourTwodigits[0] + nightHourTwodigits [1]
    } else{
      nightSchedulehour = nightHour[0] + nightHour[1]
    }
    console.log(daySchedulehour)
  }
	function clock() {
                var now = new Date();
                var hours = now.getHours();
                var minutes = now.getMinutes();
                var month = now.getMonth();
                var day = now.getDate();

                if (hours < 10) {
                    hours = "0" + hours;
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                matching(day,month,hours,minutes);
  }
  function matching (day,month,hours,minutes) {

    var storedDays = localStorage.getObj('days');
    var months_list = ['Ene','Feb','Mar','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    var indexOfmonth = months_list.indexOf(months[0]);
		if(indexOfmonth==month){
		  for(var i=0; i<storedDays.length; i++){
        if(day == storedDays[i]){
          showNotification();
        }
      }
    }
  }
  function showNotification(){
    var className = localStorage['courseNameStorage'];
    var message = 'Está por comenzar la clase del '
    var opt={
      type: 'basic',
      title: 'Clase en Vivo',
      message: '',
      priority: 1,
      iconUrl: 'icon.png'
    };
    opt['message'] = message + className;
  	chrome.notifications.create('id', opt, function(id){})
    chrome.notifications.onClicked.addListener(function(){
  	 window.open("http://cursos.mejorando.la/")
    });
  }

   	getMonth();
    getHours();

  	setInterval(function(){clock()},200);
});


