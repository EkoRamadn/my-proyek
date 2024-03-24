// import {clik,scrl} from "./function.js";

// 
const moreBtn = document.querySelectorAll(".more")

moreBtn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        // alert("hello")
        e.target.parentElement.parentElement.classList.toggle("active")
    })
})

// button menu
const tgel = document.getElementById("tgel")
let navigasi = document.getElementById("navigasi")

tgel.addEventListener("click",(e)=>{
    navigasi.classList.toggle("active")
    })


// header outo fixed
window.addEventListener("scroll",(e)=>{
    let nav = document.querySelector("#nav")
    let ofset = Math.floor(window.scrollY)
    if(ofset > 10){
        nav.classList.add("active")
        // alert("hello")
    }else{
        nav.classList.remove("active")
    }
})   
    

const listCategory = document.querySelectorAll(".category li")
listCategory.forEach((link)=>{
    select(link,listCategory)
})

const listNavigation = document.querySelectorAll(" ul > li > a") 
listNavigation.forEach((link)=>{
    select(link,listNavigation)
})

function select(link,list){
    link.addEventListener("click",(e)=>{
        list.forEach((links)=>{
            links.classList.remove("active")
        })
        e.target.classList.toggle("active")
    })
}

