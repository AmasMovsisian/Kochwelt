
function showSidebar(event){
  event.preventDefault();
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = "flex";
}

function hideSidebar(event){
  event.preventDefault();
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = "none";
}