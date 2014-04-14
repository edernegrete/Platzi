$('#save').on('click', function() {
    var values = []
    var status = document.getElementById('status');
    

    $('.check:checked').each(function () {
        var e = $(this);
        values.push(e.val());

    });

    localStorage['Cursos']=values;
    if(values==0){
      var estado = status.textContent = 'Error LeonidasVacaVerde: Selecciona un curso';
      alert('Selecciona al menos un curso');

    }else{
            status.textContent = 'Options saved.';
         }
   
   
});
