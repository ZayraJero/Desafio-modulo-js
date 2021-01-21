$(function () {
    const paintPost = (post) => {
        console.log(post)
        let postHtml = ''
        let counter = 1
        for (item in post) {
            // console.log(item, post[item])

            if (counter === 1) {
                postHtml += `   
                    <div>
                        <a href="main.html?id=${item}">
                            <img src="${post[item].urlPhoto}" class="ph-post img-fluid" alt="ph-post">
                        </a>
                    </div>`
                counter++
            }
            postHtml += `
            <div class="post-section">
            <div class="post-name-user">
                <img src="${post[item].urlAuthor}" width="35" height="35"
                    class="rounded-circle border border-secondary user-icon" alt="user">
                <div class="name-user">
                    <p class="user-name">${post[item].author}<br>
                        <span class="text-gray">${post[item].dateCreated}</span></p>
                </div>
            </div>

            <div class="title-article">
                <a href="main.html" class="text-decoration-none text-body">
                    <h1>${post[item].title}</h1>
                </a>
                <ul>
                    <li>#${post[item].tag}</li>
                </ul>

                <div class="section-comment">
                    <div class="d-flex wrapper-icon">
                        <div class="reaction-post">
                            <img src="/assets/icon-like.svg" width="23" alt="icon">
                            <p>51 </p>
                            <p class="d-none d-md-block text-space">reactions</p>
                        </div>
                        <div class=" comment-post">
                            <img src="/assets/icon-comment.svg" width="23" alt="icon">
                            <p>4 </p>
                            <p class="d-none d-md-block text-space">comments</p>
                        </div>
                    </div>
                    <div class="d-flex wrapper">
                        <p class="text-read">${post[item].minsToRead}</p>
                        <button class="btn-post rounded">Save</button>
                    </div>
                </div>
            </div>
        </div>
            `
        }

        $('.container-post').append(postHtml)

    }
    if ($('.post').length > 0) {
        $.ajax({
            url: "https://retofrontend-213c9-default-rtdb.firebaseio.com/posts/.json",
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
})



