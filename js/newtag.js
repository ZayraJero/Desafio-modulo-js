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

