var className = localStorage['courseNameStorage'] ;
var message = 'Está por comenzar la clase del '
var opt={
  type: 'basic',
  title: 'Clase en Vivo',
  message: '',
  priority: 1,
  iconUrl: 'icon.png'
}
opt['message'] = message + className;
chrome.notifications.create('id', opt, function(id){})