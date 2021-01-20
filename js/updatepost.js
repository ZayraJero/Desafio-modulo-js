// const replaceUser = (id) => {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             console.log(JSON.parse(this.response))
//         } else if (this.readyState === 4 && this.status === 404) {
//             console.error(JSON.parse(this.response))
//             return false
//         }
//     }

//     xhttp.open('PUT', `https://retofrontend-213c9-default-rtdb.firebaseio.com/posts/${id}.json`)
//     xhttp.send(
//         JSON.stringify({
//             author: "Ryan",
//             content: "<p>(Just a short post give a quick read) Hey there, Refactoring is the process of restructuring existing code (changing the factoring) without changing its external behavior. So, I present you 6 tips for Refactoring code. </p> <hr> <h3>1. Remove duplication</h3> Being new to development I spent a lot of my initial days trying to map out my plan for learning. This included the basics but I also kept seeing a lot of information about learning a JavaScript framework. How to choose one left me a bit perplexed as it seemed to be based mainly on what companies I might want to work for or what projects I was involved with at the time. I resolved therefore to approach my development learning solely by concentrating on learning vanilla JavaScript. As you can probably tell by the title of this post I am now learning React. I got involved, although only briefly, with a project being built using React. I was working on developing code in React with next to no knowledge about how React works or even the main purpose of using this framework. That being said I began reading as much as I could and started building my own SPA using React.",
//             dateCreated: "19 ene",
//             minsToRead: "2 min read",
//             tag: "<a>react</a> <a>beginners</a> <a>javascript</a> <a>webdev</a>",
//             title: "My journey through React",
//             urlAuthor: "https://res.cloudinary.com/practicaldev/image/fetch/s--l31oIMxq--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/466547/f4186145-4ce4-4b05-987d-e943ae726a15.JPEG",
//             urlPhoto: ""
//         })
//     )
// }

// const replaceId = (id) => {
//     let object= {
//         title: 'My journey through React',
//         content: "<p>(Just a short post give a quick read) Hey there, Refactoring is the process of restructuring existing code (changing the factoring) without changing its external behavior. So, I present you 6 tips for Refactoring code. </p> <hr> <h3>1. Remove duplication</h3> Being new to development I spent a lot of my initial days trying to map out my plan for learning. This included the basics but I also kept seeing a lot of information about learning a JavaScript framework. How to choose one left me a bit perplexed as it seemed to be based mainly on what companies I might want to work for or what projects I was involved with at the time. I resolved therefore to approach my development learning solely by concentrating on learning vanilla JavaScript. As you can probably tell by the title of this post I am now learning React. I got involved, although only briefly, with a project being built using React. I was working on developing code in React with next to no knowledge about how React works or even the main purpose of using this framework. That being said I began reading as much as I could and started building my own SPA using React.",
//         author: 'Ryan',
//         urlAuthor: 'https://res.cloudinary.com/practicaldev/image/fetch/s--l31oIMxq--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/466547/f4186145-4ce4-4b05-987d-e943ae726a15.JPEG',
//         dateCreated: '19 ene',
//         urlPhoto: 'otro',
//         tag: "<a>react</a> <a>beginners</a> <a>javascript</a> <a>webdev</a>",
//         minsToRead: '2 min read'
//     }
//     $.ajax({
//         url: `https://retofrontend-213c9-default-rtdb.firebaseio.com/posts/${id}.json`,
//         method: 'PUT',
//         data: JSON.stringify(object)
//     }).done(function (response) {
//         console.log(response)
//     }).fail(function (err) {
//         console.log(err)
//     })
// }

