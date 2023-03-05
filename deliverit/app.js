
const activePage = window.location.pathname
console.log(activePage)

const navLinks = document.querySelectorAll(".menu-items a")
console.log(navLinks)

navLinks.forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add("active")
    }
})