document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul a");

    window.addEventListener("scroll", function() {
        for (const section of document.querySelectorAll("section")) {
            const top = section.offsetTop - 100;

            if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
                navLinks.forEach(link => link.classList.remove("active-link"));

                const correspondingLink = document.querySelector(`nav a[href="#${section.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add("active-link");
                }
            }
        }
    });
});


fetch('data/skills.json')
  .then(response => response.json())
  .then(data => {
    const skills = data.skills;
    Object.keys(skills).forEach(skillCategory => {
      const skillContainer = document.getElementById(skillCategory);
      skills[skillCategory].forEach(skill => {
        const button = document.createElement('button');
        button.textContent = skill;
        button.className = 'text-[#F0F0F0] border-[#D8E9A8] bg-[#1E5128] p-3 font-medium rounded-lg m-2 hover:bg-[#D8E9A8] hover:text-[#1E5128]';
        skillContainer.appendChild(button);
      });
    });
  })
  .catch(error => console.error('Error fetching data:', error));
