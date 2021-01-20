$(function (post) {

    let url = new URLSearchParams(location.search)
    let id = url.get('id')

    $.ajax({
        url: `https://retofrontend-213c9-default-rtdb.firebaseio.com/posts/${id}.json`,
        method: 'GET'
    }).done(function (response) {
        let readHtml = ` 
        <div class="col-12 col-md-10 col-lg-12 bg-light read-post">
        <div class="div img-art-principal">
            <img src="${response.urlPhoto}" class="img-fluid" alt="Responsive image">
        </div>
        <div>
            <h1><strong>"${response.title}"</strong></h1>
        </div>
        <div class="div etiquetas">
            <ul>
                <li class="li px-1"><span>${response.tag}</span></li>
            </ul>
        </div>
        <div>
            <img src="${response.urlAuthor}" width="50" alt="user-1" class="rounded-circle border border">
            <p><strong>${response.dateCreated}</strong>  ${response.minsToRead}</p>
        </div>
        <div>
            <p>
            ${response.content}
            </p>
        </div>`
        $('.read-post').html(readHtml)

    }).fail(function (err) {
        console.log(err)
        console.log(err.status)
        console.log(err.statusText)
        console.log('error')
    })
    console.log(url, id)
})

