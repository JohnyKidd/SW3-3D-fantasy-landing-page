const showcaseButton = document.getElementById("showcaseButton")
const postButton = document.getElementById("postButton")
const subscribetButton = document.getElementById("subscribeButton")
const pageTopButton = document.getElementById("logo")

showcaseButton.addEventListener("click", ()=>{
    document.getElementById("recentLine").scrollIntoView({ behavior: 'smooth', block: 'start'})
})

postButton.addEventListener("click", ()=>{
    document.getElementById("posts").scrollIntoView({ behavior: 'smooth', block: 'start'})
})

subscribeButton.addEventListener("click", ()=>{
    document.getElementById("subForm").scrollIntoView({ behavior: 'smooth', block: 'start'})
})

pageTopButton.addEventListener("click", ()=>{
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
})