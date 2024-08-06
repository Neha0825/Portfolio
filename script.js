let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >=offset && top <offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add
                ('active');
            })
        }
    })
}
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nehaasharma2501@gmail.com",
        Password : "851660543B3179681037A7F3A75542C119CA",
        To : 'subohi9835@gmail.com',
        From : "nehaasharma2501@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
    message => alert(message)
    );      
}

       