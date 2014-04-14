var notification = webkitNotifications.createNotification(
  'icon.png',  // icon url - can be relative
  'Clase en Vivo',  // notification title
  'Está por empezar la clase de Laravel'  // notification body text
);
setInterval(function(){relojsh()},200);
  function relojsh() {
                var now = new Date();
                var hours = now.getHours();
                var minutes = now.getMinutes();
                var seconds = now.getSeconds();
                var month = now.getUTCMonth();
                var day = now.getUTCDate();
               
                if (hours < 10) {
                    hours = "0" + hours;
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                if(month==4 & day==7|| 9|| 14|| 15|| 21||23){
                  if(hours==18 & minutes==50){
                    notification.show();
                  }
                
            }
	