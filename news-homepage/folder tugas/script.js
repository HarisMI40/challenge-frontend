let menu_icon = document.getElementById("menu_icon")
let sidebar = document.getElementById("sidebar");
let close_menu = document.getElementById("close_menu");
let modal = document.getElementById("modal");


menu_icon.onclick = function () {
  if(sidebar.classList.contains("sidebar-collapse")){
    sidebar.classList.remove("sidebar-collapse")
    modal.style.display="block";
  }
}
close_menu.onclick = function () {
  if(!sidebar.classList.contains("sidebar-collapse")){
    sidebar.classList.add("sidebar-collapse");
    modal.style.display="none";  
  }
}

