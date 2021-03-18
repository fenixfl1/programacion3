$(document).ready(function () {
    var content = $('#img-content')
    var imgList = [
        '/img/img1.jpg', '/img/img2.jpg',
        '/img/img3.jpg', '/img/img4.jpg',
        '/img/img5.jpg', '/img/img6.jpg'
    ]

    for (let i = 0; i <= 5; i++) {
        var img = $('<img/>').attr('src', imgList[i]).addClass('img-thumbnail rounded float-end')
        content.append(img)
    }
});