$(function() {
    $('#sendButton').click(sendData)
});

function sendData() {
    const data = {
        name: $('input[name=name').val(),
        email: $('input[name=email').val(),
    }

    const jsonData = JSON.stringify(data)

    $.ajax({
        type: 'POST',
        url: 'api/user',
        data: jsonData,
        dataType: 'json',
        contentType: 'application/json',
    })
    .done(doneHandler)
    .fail(failHandler)
}

function doneHandler(data) {
    const serverData = JSON.stringify(data)
    $('#output').text('Server response: ${serverData}')
}

function errorHandler(jsqXhr, extStatus, error) {
    $('#output').text('Server error: ${serverData}')
}