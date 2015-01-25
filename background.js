$(function (){
	Storage.prototype.getObj = function(key) {
    	return JSON.parse(this.getItem(key))
	};
	var storedDays = localStorage.getObj('days');
	var storedmonth = localStorage.getObj('month_day');
	var className = localStorage['courseNameStorage'] ;
	var message = 'Está por comenzar la clase del '
	var months_list = ['Ene','Feb','Mar','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
	var months = [];
	var opt={
	  	type: 'basic',
	  	title: 'Clase en Vivo',
	  	message: '',
	  	priority: 1,
	  	iconUrl: 'icon.png'
	};
	opt['message'] = message + className;
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
                matching(day,month);
    }
    function matching (day,month) {
        for (var i = 0; i<months_list.length; i++){
  			if(months[0] == months_list[i]){
     			if(months_list.indexOf(months_list[i])==month){
        			for(var k=0; k<storedDays.length; i++){
                         if(day == storedDays[i]){
                              showNotification();
                         }
                    }
				}
			}
		}
    }
    function showNotification(){
    	chrome.notifications.create('id', opt, function(id){})
		chrome.notifications.onClicked.addListener(function(){
			window.open("http://cursos.mejorando.la/")
		});

    }

   	getMonth();
  	setInterval(function(){clock()},200);
});


