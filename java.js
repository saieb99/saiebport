function sendMail(){
    let parms = {
    name :document.getElementById("name").value,
    email :document.getElementById("email").value,
    subject :document.getElementById("subject").value,
    message :document.getElementById("message").value,
}

emailjs.send("service_a7tjtat","template_wvq5l6v",parms).then(alert("email sent!!"))
}

function sendEmail(){
    let parms = {
    email :document.getElementById("email").value,
    }
    emailjs.send("service_a7tjtat","template_wvq5l6v",parms).then(alert("email sent!!"))
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'

}
function hideSidebar(){
     const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome  " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}

function myFunction() {
  document.getElementById("sec5").reset();
}