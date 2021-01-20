$(function (post) {

    let url = new URLSearchParams(location.search)
    let id = url.get('id')

    $.ajax({
        url: `https://retofrontend-213c9-default-rtdb.firebaseio.com/posts/${id}.json`,
        method: 'GET'
    }).done(function (response) {
        let readHtml = ` 
        <div class="col-12 col-md-10 col-lg-12 g-white read-post">
        <div class="div img-art-principal">
            <img src="${response.urlPhoto}" class="img-fluid" alt="Responsive image">
        </div>
        <div class="p-3">
            <h1><strong>"${response.title}"</strong></h1>
       
        <div class="div etiquetas">
            <ul>
                <li class="li px-1"><span>${response.tag}</span></li>
            </ul>
        </div>
       
           <p> <img src="${response.urlAuthor}" width="50" class="rounded-circle border border"> ${response.author} <span class="text-muted">${response.dateCreated} ${response.minsToRead}</span></p>

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
})