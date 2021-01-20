$(function (post) {

    let url = new URLSearchParams(location.search)
    let id = url.get('id')

    $.ajax({
        url: `https://retofrontend-213c9-default-rtdb.firebaseio.com/posts/${id}.json`,
        method: 'GET'
    }).done(function (response) {
        let profileHtml = ` 
        <div class="div  user-profile">
        <p><img src="${response.urlAuthor}" width="50" alt="user-1" class="rounded-circle border border">
              <strong>${response.author}</strong></p>
        </div>
        `

        $('.user-profile').html(profileHtml)

    }).fail(function (err) {
        console.log(err)
        console.log(err.status)
        console.log(err.statusText)
        console.log('error')
    })
})