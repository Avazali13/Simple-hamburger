// const buttons=document.querySelector(".baton")
const navs=document.querySelector(".nav")


baton.addEventListener("click",()=>{
    if(navs.classList.contains("hidden")){
    navs.classList.remove("hidden")
} else{
    navs.classList.add('hidden')
}
})
