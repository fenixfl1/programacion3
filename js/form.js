$(document).ready(function () {
    $('#dataForm').submit(function(event) {
        var dataForm = []
        event.preventDefault()
        $(this).find(':input').each(function() {
            dataForm.push($(this).val())
        })
        console.log(dataForm)
    })
});