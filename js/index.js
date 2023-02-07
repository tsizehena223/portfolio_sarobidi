// Envoi mail

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,
    };


    const serviceId = "service_6ioosjb";
    const templateId = "template_0svbuf6";

    emailjs.send(serviceId, templateId, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                document.getElementById("subject").value = "";
                console.log(res);
                alert("Message envoyé avec succès! Merci :)");
            }
        )
        .catch((err) => console.log(err));
}
