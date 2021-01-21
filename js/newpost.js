$(document).ready(function () {
    $('#author').focus()
    $('.send__form').click(function (event) {

        console.log("loquesea")
        event.preventDefault()
        let author = $('#author').val()
        let content = $('#content').val()
        let dateCreated = $('#dateCreated').val()
        let minsToRead = $('#minsToRead').val()
        let organization = $('#organization').val()
        let tag = $('#tag').val()
        let title = $('#title').val()
        let urlAuthor = $('#urlAuthor').val()
        let urlPhoto = $('#urlPhoto').val()

        if (author === "") {
            alert('error, el campo no puede estar vacio')
            $('#author').focus()

        } else if (content === "") {
            alert('error, el campo no puede estar vacio')
            $('#content').focus()

        } else if (dateCreated === "") {
            alert('error, el campo no puede estar vacio')
            $('#dateCreated').focus()

        } else if (minsToRead === "") {
            alert('error, el campo no puede estar vacio')
            $('#minsToRead').focus()

        } else if (organization === "") {
            alert('error, el campo no puede estar vacio')
            $('#organization').focus()

        } else if (tag === "") {
            alert('error, el campo no puede estar vacio')
            $('#tag').focus()

        } else if (title === "") {
            alert('error, el campo no puede estar vacio')
            $('#title').focus()

        } else if (urlAuthor === "") {
            alert('error, el campo no puede estar vacio')
            $('#urlAuthor').focus()
        } else if (urlPhoto === "") {
            alert('error, el campo no puede estar vacio')
            $('#urlPhoto').focus()
        } else {
            let postObject = {
                "author": author,
                "content": content,
                "dateCreated": dateCreated,
                "minsToRead": minsToRead,
                "organization": organization,
                "tag": tag,
                "title": title,
                "urlAuthor": urlAuthor,
                "urlPhoto": urlPhoto
            }

            $.ajax({
                url: "https://retofrontend-213c9-default-rtdb.firebaseio.com/posts/.json",
                method: "POST",
                data: JSON.stringify(postObject)
            }).done(function (response) {
                console.log(response);
                location.pathname = "/"

            }).fail(function (error) {
                console.log(error);
            })

        }

        console.log("hola")

    })



})
