$('#save').on('click', function() {
    var seleccion = $('#horario').val();
    var status = $('#status').html('Datos guardados');
    localStorage['horario']=seleccion;
});
