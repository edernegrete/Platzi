$(function(){
	Storage.prototype.getObj = function(key) {
    	return JSON.parse(this.getItem(key))
	}
	var storedDays = localStorage.getObj('days');
	console.log(storedDays)
	var className = localStorage['courseNameStorage'] ;
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
});




