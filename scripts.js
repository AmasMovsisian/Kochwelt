
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



function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/xovkqgoj", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      window.location.href = "./send_mail.html";
    })
    .catch((error) => {
      console.log(error);
    });
}