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
