$(function () {
    const paintTag = (tag) => {
        console.log(tag)
        let tagHtml = ''
        for (item in tag) {
            // console.log(item, post[item])

            tagHtml += `
            <div class="alert alert-secondary tag">#${tag[item].title}</div>
            `
        }

        $('.tag').html(tagHtml)

    }
    if ($('.tag').length > 0) {
        $.ajax({
            url: "https://retofrontend-213c9-default-rtdb.firebaseio.com/tags/.json",
            method: 'GET'
        }).done(function (response) {
            paintTag(response)

        }).fail(function (err) {
            console.log(err)
            console.log(err.status)
            console.log(err.statusText)
            console.log('error')
        })
    }
})
