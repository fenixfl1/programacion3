$(document).ready(function () {
    var months = [
        'Enero', 'Febrero', 'Marzo',
        'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre',
        'Actubre', 'Noviembre', 'Diciembre'
    ]

    for (let i = 0; i <= 11; i++) {
        var items = $('<li/>').addClass('list-group-item').append(months[i])
        $('.list-group').append(items)
    }
})