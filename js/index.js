$(document).ready(function () {
    // loading html content from ajax
    $('#form').on('click', function(){
        $.ajax({
            type: "GET",
            url: "form.html",
            success: function(response) {
                $('#footer').contents().remove()
                $('.card-body').html(response)
                $('#footer').append('Formulario')
            }
        })
    })
 
    $('#calc').on('click', function(){
        $.ajax({
            type: "GET",
            url: "calc.html",
            success: function(response) {
                $('#footer').contents().remove()
                $('.card-body').html(response)
                $('#footer').append('Calculadora')
            }
        })
    })

    $('#date').on('click', function(){
        $.ajax({
            type: "GET",
            url: "date.html",
            success: function(response) {
                $('#footer').contents().remove()
                $('.card-body').html(response)
                $('#footer').append('Calcular dias restante')
            }
        })
    })

    $('#month').on('click', function(){
        $.ajax({
            type: "GET",
            url: "month.html",
            success: function(response) {
                $('#footer').contents().remove()
                $('.card-body').html(response)
                $('#footer').append('Lista de meses')
            }
        })
    })

    $('#galery').on('click', function(){
        $.ajax({
            type: "GET",
            url: "galery.html",
            success: function(response) {
                $('#footer').contents().remove()
                $('.card-body').html(response)
                $('#footer').append('Galeria')
            }
        })
    })
})