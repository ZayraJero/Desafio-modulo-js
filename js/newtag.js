// Create New Tag (Post)
$(document).ready(function(){
    $('.tagNameSend').click(function(){
        let tagInput = $('.askTagInput').val()
        let tagName = {
            "title": tagInput
        }
        $.ajax({
            url: "https://retofrontend-213c9-default-rtdb.firebaseio.com/tags/.json",
            method: 'POST',
            data: JSON.stringify(tagName)
        }).done(function (response) {
            console.log(response)
        }).fail(function (err) {
            console.log(err)
        })
    })
})

// Get New Tag (Get)
if ($('.tag').length > 0) {
    $.ajax({
        url: "https://retofrontend-213c9-default-rtdb.firebaseio.com/tags/.json",
        method: 'GET'
    }).done(function (response) {
        paintPost(response)

    }).fail(function (err) {
        console.log(err)
        console.log(err.status)
        console.log(err.statusText)
        console.log('error')
    })
}