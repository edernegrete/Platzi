var notification = webkitNotifications.createNotification(
  'icon.png',  // icon url - can be relative
  'Clase en Vivo',  // notification title
  'En 10 min empieza la clase de Laravel'  // notification body text
);
var val = localStorage['horario'];

setInterval(function(){relojsh()},200);
  function relojsh() {
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

                if(month==4 & day==6||8||13||15||20||22||){
                  horariosftw();
                }
    function horariosftw(){
                if(val == 'centroamerica'){
                    if(hours==18 & minutes==5){
                      notification.show();
                    }
                }else if (val=='sud_america'){
                  if(hours==17 & minutes==50){
                    notification.show();
                  }
                }else if (val=='venezuela'){
                  if(hours==18 & minutes == 20){
                    notification.show();
                  }
                }else if (val=='east'){
                  if(hours==19 & minutes==50){
                    notification.show();
                  }
                }else if (val=='oeste'){
                  if(hours==16 & minutes==50){

                  }
                }else if (val=='europa'){
                  if(hours==18 & minutes==50){
                      notification.show();
                  }
                }else if (val=='england'){  
                  if(hours==17 & minutes==50){
                      notification.show();
                  }                 
                }else{
                  if(hours==21 & minutes==50){
                    notification.show();
                  }
                }
    }
                
}
