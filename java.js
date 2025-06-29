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