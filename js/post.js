$(function () {
    const readPost = (post) => {
        let postHtml = ''



        if ($('.post').length > 0) {
            let url = new URLSearchParams(location.search)
            let id = url.get('id')
            $.ajax({
                url: `https://retofrontend-213c9-default-rtdb.firebaseio.com/posts/${id}.json`,
                method: 'GET'
            }).done(function (response) {
                readPost(response)

            }).fail(function (err) {
                console.log(err)
                console.log(err.status)
                console.log(err.statusText)
                console.log('error')
            })
        }
    }
})

