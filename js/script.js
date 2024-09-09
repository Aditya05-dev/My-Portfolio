let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top<offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// send email 
function sendMail()
{
    let parms = {
        name : document.getElementById("name").Value,
        email : document.getElementById("email").Value,
        phoneNumber : document.getElementById("phoneNumber").Value,
        subject : document.getElementById("subject").Value,
        message : document.getElementById("message").Value,
    }

emailjs.send("service_j31fzir","template_or937c9",parms).then(alert("Email Sent!!"))

}
