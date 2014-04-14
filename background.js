var notification = webkitNotifications.createNotification(
  'icon.png',  // icon url - can be relative
  'FUNCIONOOOO!',  // notification title
  'AHUEEEEEVOOOOOOO'  // notification body text
);
  function updateClock() {
                // Gets the current time
                var now = new Date();
 
                // Get the hours, minutes and seconds from the current time
                var hours = now.getHours();
                var minutes = now.getMinutes();
                var seconds = now.getSeconds();
 
                // Format hours, minutes and seconds
                if (hours < 10) {
                    hours = "0" + hours;
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
 
                // Sets the elements inner HTML value to our clock data
                  if(hours==3 & minutes==29){
                  		notification.show();
                }
            }
	