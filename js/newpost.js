$(document).ready(function () {
    $('#author__input').focus()
    $('.send__form').click(function () {
        let obj = {}
        let author__input = $('#author__input').val()
        let content__input = $('#content__input').val()
        let datecreated__input = $('#datecreated__input').val()
        let minsToRead__input = $('#minsToRead__input').val()
        let organization__input = $('#organization__input').val()
        let tag__input = $('#tag__input').val()
        let title__input = $('#title__input').val()
        let url__author = $('#url__author').val()
        let url__photo = $('#url__photo').val()


        if (author__input === "") {
            alert('error, el campo no puede estar vacio')
            $('#author__input').focus()

        } else if (content__input === "") {
            alert('error, el campo no puede estar vacio')
            $('#content__input').focus()

        } else if (datecreated__input === "") {
            alert('error, el campo no puede estar vacio')
            $('#datecreated__input').focus()

        } else if (minsToRead__input === "") {
            alert('error, el campo no puede estar vacio')
            $('#minsToRead__input').focus()

        } else if (organization__input === "") {
            alert('error, el campo no puede estar vacio')
            $('#organization__input').focus()

        } else if (tag__input === "") {
            alert('error, el campo no puede estar vacio')
            $('#tag__input').focus()

        } else if (title__input === "") {
            alert('error, el campo no puede estar vacio')
            $('#title__input').focus()

        } else if (url__author === "") {
            alert('error, el campo no puede estar vacio')
            $('#url__author').focus()
        } else if (url__photo === "") {
            alert('error, el campo no puede estar vacio')
            $('#url__photo').focus()
        } else {
            obj = {
                "author__input": author__input,
                "content__input": content__input,
                "datecreated__input": datecreated__input,
                "minsToRead__input": minsToRead__input,
                "organization__input": organization__input,
                "tag__input": tag__input,
                "title__input": title__input,
                "url__author": url__author,
                "url__photo": url__photo
            }

            $.ajax({
                url: "https://retofrontend-213c9-default-rtdb.firebaseio.com/posts/.json",
                method: "POST",
                data: JSON.stringify(obj)
            }).done(function (response) {
                console.log(response);
            }).fail(function (error) {
                console.log(error);
            })

        }



    })



})
