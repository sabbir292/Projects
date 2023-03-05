let data= [
    {   
        id:1,
        Name: "Lana Rose",
        dp:"./Images/profile-1.jpg",
        story:".Images/story-1.jpg",
        feed:"./Images/feed-1.jpg",
        description:"some random text"
    },
    {   
        id:2,
        Name: "Lana Rose",
        dp:"./Images/profile-2.jpg",
        story:".Images/story-2.jpg",
        feed:"./Images/feed-2.jpg",
        description:"some random text"
    },
    {   
        id:3,
        Name: "Lana Rose",
        dp:"./Images/profile-3.jpg",
        story:".Images/story-3.jpg",
        feed:"./Images/feed-3.jpg",
        description:"some random text"
    },
    {   
        id:4,
        Name: "Lana Rose",
        dp:"./Images/profile-4.jpg",
        story:".Images/story-4.jpg",
        feed:"./Images/feed-4.jpg",
        description:"some random text"
    },
    {   
        id:5,
        Name: "Lana Rose",
        dp:"./Images/profile-5.jpg",
        story:".Images/story-5.jpg",
        feed:"./Images/feed-5.jpg",
        description:"some random text"
    },
    {   
        id:6,
        Name: "Lana Rose",
        dp:"./Images/profile-6.jpg",
        story:".Images/story-6.jpg",
        feed:"./Images/feed-6.jpg",
        description:"some random text"
    },
    {   
        id:7,
        Name: "Lana Rose",
        dp:"./Images/profile-7.jpg",
        story:".Images/story-7.jpg",
        feed:"./Images/feed-7.jpg",
        description:"some random text"
    },
    
]

// UI

const storyContainer = document.querySelector(".story-container")

// Call back function 

document.addEventListener("DOMContentLoaded", showStory(data))

// function body


// function showStory(stories){
//     const showStories = stories.map(story =>{
//         return `<div class="story">
//         <div class="profile-pic">
//             <img src="${story.dp}" alt="">
//         </div>
//         <p class="name">${story.Name}</p>
//     </div>`
// }).join("")
//     storyContainer.innerHTML = showStories
// }

// function showStory(stories){
//     const div = document.createElement("div")
//           div.classList.add("story")
//           div.innerHTML = ` <div class="profile-pic">
//                                 <img src="" alt="">
//                             </div>
//                             <p class="name"></p>`                  
//             storyContainer.appendChild(div)
//             div.style.background = `${stories.story}`
//     console.log(div)
// }

// function body


function showStory(stories){
    const showStories = stories.map(story =>{
        const div = document.createElement("div")
         div.classList.add("story")
          div.innerHTML = ` <div class="profile-pic">
                                <img src="${story.dp}" alt="">
                            </div>
                            <p class="name">${story.Name}</p>`                  
            storyContainer.appendChild(div)
            div.style.background = `${stories.story}`
            console.log(div)

            return ` <div class="profile-pic">
                                <img src="${story.dp}" alt="">
                            </div>
                            <p class="name">${story.Name}</p>` 
            
    
}).join("")
    storyContainer.innerHTML = showStories
}