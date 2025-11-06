


//dark light mode toggle
let darkModeIcon = document.querySelector('#dark-mode-icon');
darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode'); 
}                                                                                                                                                                                              

//sticky navbar

let header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 50);
});



//service section dynamic content


const serviceData = {
    services: [
        { name: "Web Development", icon: 'bx-code-alt', description: "Custom web application development using modern frameworks." },
        { name: "AI Development", icon: 'bxs-chip', description: "Integration of machine learning models for intelligent features." },
        { name: "Tester", icon: 'bxs-bug', description: "Comprehensive testing and QA to ensure robust, bug-free applications." },
        { name: "UI/UX Design", icon: 'bx-palette', description: "Creating intuitive and engaging user interfaces and experiences." }
    ]
};

const servicesContainer = document.querySelector('.services-container');

servicesContainer.innerHTML = "";

serviceData.services.forEach(service => {
    const serviceBox = document.createElement('div');
    serviceBox.classList.add('service-box');
    serviceBox.innerHTML = `
        <i class='bx ${service.icon}' ></i>
        <h3>${service.name}</h3>
        <p>${service.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas placeat amet quasi minus praesentium similique, ducimus et enim odit ullam autem ipsa neque perferendis maxime adipisci quo at! Nobis non dolorum delectus eaque id, suscipit blanditiis omnis aperiam quia? Optio atque laudantium facere, reprehenderit omnis repellat dolore perferendis totam nihil nesciunt facilis pariatur reiciendis ea iure esse tempora corrupti explicabo labore.</p>
        <a href="#" class="btn">Read More</a>
    `;
    servicesContainer.appendChild(serviceBox);
});

// Scroll Reveal Animation
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });  


//menu icon toggle

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); 
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//remove menu icon and navbar when click navbar link (scroll)

window.onscroll = () =>{
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//hardcoded data for skills will be replaced by API data in future

const data = {
    skills: [
        { name: "HTML", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80" },
        { name: "CSS", img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=80" },
        { name: "JavaScript", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" },
        { name: "React", img: "https://images.unsplash.com/photo-1523475496153-3d6ccf0fbbf3?auto=format&fit=crop&w=800&q=80" },
        { name: "Node.js", img: "https://images.unsplash.com/photo-1610484825726-66ad91f44373?auto=format&fit=crop&w=800&q=80" },
        { name: "MongoDB", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80" }
    ]
};


const container = document.querySelector('.projects-container');
container.innerHTML = "";

data.skills.forEach(skill => {
    const div = document.createElement('div');
    div.classList.add('project-box');

    // background image
    div.style.backgroundImage = `url(${skill.img})`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";

    // overlay content
    div.innerHTML = `
    <div class="overlay">
      <h3>${skill.name}</h3>
      <div class="visible-only-on-hover"> 
      <h4>Project Description Here</h4>
      <div class="icons"> 
        <svg id="linkOutIcon" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" width="30" height="30">
    <path id="arrow" d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3z"/>
    <path id="box" d="M5 5h6v2H7v10h10v-4h2v6H5z"/>
  </svg>
</div>
        </div>
    </div>
  `;

    container.appendChild(div);
});
