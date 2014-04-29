$('#save').on('click', function() {
    var values = []
    var seleccion = $('#horario').val();
    var status = $('#status');
    $('.check:checked').each(function () {
        var e = $(this);
        values.push(e.val());
       
    });
    localStorage['Cursos']=values;
    localStorage['horario']=seleccion;
    if(values==0){
      var estado = status.textContent = 'Error LeonidasVacaVerdeier: Selecciona un curso';
      alert('Selecciona al menos un curso');

    }else{
            status.textContent = 'Options saved.';
         }
   
   
});
