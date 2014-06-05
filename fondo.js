var notification = webkitNotifications.createNotification(
  'icon.png',  
  'Clase en Vivo', 
  'En 10 min comienza la clase de Marketing Online'
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

                if(month==5 & day==3||day==4||day==5||day==10||day==11||day==12){
                  horariosftw();
                }
    function horariosftw(){
                if(val == 'centroamerica'){
                    if(hours==18 & minutes==50){
                      notification.show();
                    }
                }else if (val=='caribe'){
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
                  if(hours==11 & minutes==50){
                      notification.show();
                  }
                }else if (val=='england'){  
                  if(hours==10 & minutes==50){
                      notification.show();
                  }                 
                }else{
                  if(hours==20 & minutes==50){
                    notification.show();
                  }
                }
    }                
}
