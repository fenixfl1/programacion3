$(document).ready(function () {
    $('#sum').on('click', function(e) {
        var textResult = $('#result')
        textResult.contents().remove()
        var num1 = $('#num1').val()
        var num2 = $('#num2').val()

        if (isNaN(num2) || isNaN(num1)) {
            textResult.append('Es necesario introducir solo numeros.')
        } else {
            var suma = parseFloat(num1) + parseFloat(num2)
            textResult.append(`Resultado: ${suma}`)
        }
    })

    $('#rest').on('click', function(e) {
        var textResult = $('#result')
        textResult.contents().remove()
        var num1 = $('#num1').val()
        var num2 = $('#num2').val()

        if (isNaN(num2) || isNaN(num1)) {
            textResult.append('Es necesario introducir solo numeros.')
        } else {
            var resta = parseFloat(num1) - parseFloat(num2)
            textResult.append(`Resultado: ${resta}`)
        }
    })

    $('#mult').on('click', function(e) {
        var textResult = $('#result')
        textResult.contents().remove()
        var num1 = $('#num1').val()
        var num2 = $('#num2').val()

        if (isNaN(num2) || isNaN(num1)) {
            textResult.append('Es necesario introducir solo numeros.')
        } else {
            var mult = parseFloat(num1) * parseFloat(num2)
            textResult.append(`Resultado: ${mult}`)
        }
    })

    $('#div').on('click', function(e) {
        var textResult = $('#result')
        textResult.contents().remove()
        var num1 = $('#num1').val()
        var num2 = $('#num2').val()

        if (isNaN(num2) || isNaN(num1)) {
            textResult.append('Es necesario introducir solo numeros.')
        } else {
            var div = parseFloat(num1) / parseFloat(num2)
            textResult.append(`Resultado: ${div}`)
        }
    })
});