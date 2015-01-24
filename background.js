$(function (){
	Storage.prototype.getObj = function(key) {
    	return JSON.parse(this.getItem(key))
	};
	var storedDays = localStorage.getObj('days');
	var storedmonth = localStorage.getObj('month_day');
	var className = localStorage['courseNameStorage'] ;
	var message = 'Está por comenzar la clase del '
	var months = [];
	function getMonth(){
		for (var i = 0; i<storedmonth.length; i++){
			if((i%2) != 1){
   				months.push(storedmonth[i])
			}

		}
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
                hell(day,month);
    }
    function hell (day,month) {
        for (var i=0; i<storedDays.length; i++){
        	if(storedDays[i] == day){
        	  console.log('runs when is the course day!')   
            }
        }
    }

    getMonth();
  	setInterval(function(){clock()},200);










	// var opt={
	//   	type: 'basic',
	//   	title: 'Clase en Vivo',
	//   	message: '',
	//   	priority: 1,
	//   	iconUrl: 'icon.png'
	// };
	// opt['message'] = message + className;

	// chrome.notifications.create('id', opt, function(id){})
	// chrome.notifications.onClicked.addListener(function(){
	// 	window.open("http://cursos.mejorando.la/")
	// });


});


