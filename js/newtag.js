let tagObject = {
    title: 'discuss'
}
$.ajax({
    url: "https://retofrontend-213c9-default-rtdb.firebaseio.com/tags/.json",
    method: 'POST',
    data: JSON.stringify(tagObject)
}).done(function (response) {
    console.log(response)
}).fail(function (err) {
    console.log(err)
})