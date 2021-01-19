let userObject = {
    title: 'My journey through React',
    content: "Being new to development I spent a lot of my initial days trying to map out my plan for learning. This included the basics but I also kept seeing a lot of information about learning a JavaScript framework. How to choose one left me a bit perplexed as it seemed to be based mainly on what companies I might want to work for or what projects I was involved with at the time. I resolved therefore to approach my development learning solely by concentrating on learning vanilla JavaScript. As you can probably tell by the title of this post I am now learning React. I got involved, although only briefly, with a project being built using React. I was working on developing code in React with next to no knowledge about how React works or even the main purpose of using this framework. That being said I began reading as much as I could and started building my own SPA using React. The goal of this post is to be the beginning of my documentation of my journey in learning React. I am sure there will be posts documenting both successes and failures. Hopefully these will give me a good way to track my progress. This first post I'll concentrate on perhaps one of the most difficult aspects I've come across to date, namely trying to learn React using functional components and hooks when so many of the tutorials out there are based on class based components. I realize the official documentation talks about class based components still being used throughout the dev world, particularly in legacy apps. However, as a new developer I've been trying to keep myself from burning out, getting stuck in tutorial hell, etc. With that in mind I felt that learning both class based components and hooks would tax me a bit and lead to frustration so I decided to concentrate on building my entire project using functional components and hooks. The first one I really grasped properly was useState(), which seems at first glance to be really simple. However, I spent a lot of time trying to get my project to recognize my changes to the state of an item, and am still in fact trying to grasp changing the state of one sibling based on the value of another sibling. This is not documented well, at least in my searching, when using hooks rather than this.state. I have, however, successfully done this once, so I consider that a win. I was able to manipulate the value of sibling 'B' based on the value of sibling 'A' with a fairly simple if/else statement in a useEffect() hook. Now to repeat this in a more complex manner...",
    author: 'Ryan',
    urlAuthor: 'https://res.cloudinary.com/practicaldev/image/fetch/s--l31oIMxq--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/466547/f4186145-4ce4-4b05-987d-e943ae726a15.JPEG',
    dateCreated: '19 ene 2020',
    urlPhoto: '',
    tag: 'react beginners javascript webdev',
    minsToRead: '2 min read'
}
$.ajax({
    url: "https://retofrontend-213c9-default-rtdb.firebaseio.com/posts/.json",
    method: 'POST',
    data: JSON.stringify(userObject)
}).done(function (response) {
    console.log(response)
}).fail(function (err) {
    console.log(err)
})
