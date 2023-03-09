console.log("index.js on!!")

let sidebarShow = false;
let sidebar = document.getElementById("sidebar-body");
let burgBtn = document.getElementById("burg-btn");
let closeBtn = document.getElementById("close-btn");

function toggleSidebar(e) {
    sidebarShow = !sidebarShow;

    if (sidebarShow) {
        sidebar.classList.add("open");
        closeBtn.classList.add("open")
        burgBtn.classList.add("open")
    } else {
        sidebar.classList.remove("open");
        closeBtn.classList.remove("open")
        burgBtn.classList.remove("open")
    }

    e.stopPropagation()
}

document.addEventListener("click", function () {
    sidebarShow = false
    sidebar.classList.remove("open");
    closeBtn.classList.remove("open")
    burgBtn.classList.remove("open")
})



