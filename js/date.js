$(document).ready(function () {
    var nextYear = new Date('01/01/2022')
    
    $('#calcDate').on('click', function(e) {
        $('#result').contents().remove()
        var date = new Date($('#userDate').val())

        var dateResult = nextYear.getTime() - date.getTime()

        $('#result').append(`Faltan ${Math.round(dateResult / (1000*60*60*24))} Dias para el 2022`)
    })
})