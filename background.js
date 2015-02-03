$(function (){
  /* extiende la funcionalidad de localstorage para poder pasar arrays, local
  storage solo acepta strings por defecto */
	Storage.prototype.getObj = function(key) {
    	return JSON.parse(this.getItem(key))
	};
  //variables globales
  var months = [];
  var daySchedulehour =''
  var nightSchedulehour = ''
  /*Agarramos el mes en el que va a ser el curso que ya tenemos guardado
    en localstorage pero con un formato así [mes,dia,mes,dia].
  */
	function getMonth(){
    var storedmonth = localStorage.getObj('month_day');
		for (var i = 0; i<storedmonth.length; i++){
			if((i%2) != 1){
   				months.push(storedmonth[i])
			}
		}
	}
  /*Agarramos la hora en la que empezará el curso*/
  function getHours(){
    var day_schedule = localStorage['day_schedule'];
    var night_schedule = localStorage['night_schedule'];
    var dayStartingHour = [];
    var nightStartingHour = [];
    var dayHour = '';
    var nightHour = '';
    var daystartHour;
    var nightstartHour;
    var dayPM;
    var nightPM;
    for (var i = 0; day_schedule[i]!= '>'; i++){
      dayStartingHour.push(day_schedule[i])
    }
    for (var j = 0; night_schedule[j]!= '>'; j++){
      nightStartingHour.push(night_schedule[j])
    }
    nightHourstring = nightStartingHour.toString();
    nightHour = nightHourstring.replace(/,/g, "");
    dayHourstring = dayStartingHour.toString();
    dayHour = dayHourstring.replace(/,/g, "");
    if(dayHour[1]==':'){
      var dayHourTwodigits = 0 + dayHour;
      daystartHour = dayHourTwodigits[0] + dayHourTwodigits [1]
    }else{
      daystartHour = dayHour[0] + dayHour[1]
    }
    if(nightHour[1]==':'){
      var nightHourTwodigits = 0 + nightHour;
      nightstartHour = nightHourTwodigits[0] + nightHourTwodigits [1]
    } else{
      nightstartHour = nightHour[0] + nightHour[1]
    }
    dayPM = dayHour.search('p');
    nightPM = nightHour.search('p');
   
    if(dayPM != -1){
      if(daystartHour<12){
        daySchedulehour = Number (daystartHour) +12;
      }else{
        daySchedulehour = daystartHour
      }
    }else{
      daySchedulehour = daystartHour;
    }
    if(nightPM != -1){
      if(nightstartHour<12){
        nightSchedulehour = Number (nightstartHour) +12;
      }else{
        nightSchedulehour = nightstartHour
      }
    }else{
      nightSchedulehour = nightstartHour;
    }
  }
  //El reloj que estará comprobando la hora del computador
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
  //Hace el <<matching>> con el día, mes, horas y minutos para lanzar la notificacion
  function matching (day,month,hours,minutes) {
    var storedDays = localStorage.getObj('days');
    var months_list = ['Ene','Feb','Mar','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    var indexOfmonth = months_list.indexOf(months[0]);
    var dayHourNofitication = daySchedulehour - 1;
    var nightHourNotification = nightSchedulehour -1;
		if(indexOfmonth==month){
		  for(var i=0; i<storedDays.length; i++){
        if(day == storedDays[i]){
          if(hours == dayHourNofitication || nightHourNotification && minutes==50){
            showNotification();
          }
        }
      }
    }
  }
  //Declaramos la notificacion
  function showNotification(){
    var className = localStorage['courseNameStorage'];
    var message = 'En 10 minutos comienza la clase del curso de '
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
  	 window.open("https://platzi.com/clases/")
    });
  }
   //ejecutamos las funciones
   	getMonth();
    getHours();
  	setInterval(function(){clock()},200);

});


