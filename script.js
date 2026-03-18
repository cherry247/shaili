function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function updateSectionArrows(){
    const sectionMap = {
      profile: { top: false, bottom: true },
      about: { top: true, bottom: true },
      experience: { top: true, bottom: true },
      projects: { top: true, bottom: true },
      contact: { top: true, bottom: false }
    };

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            const section = entry.target;
            const name = section.id;
            const topArrow = section.querySelector('.arrow-top');
            const bottomArrow = section.querySelector('.arrow-bottom');
            if(entry.isIntersecting){
                const config = sectionMap[name] || { top: true, bottom: true };
                if(topArrow) topArrow.classList.toggle('visible', config.top);
                if(bottomArrow) bottomArrow.classList.toggle('visible', config.bottom);
            } else {
                if(topArrow) topArrow.classList.remove('visible');
                if(bottomArrow) bottomArrow.classList.remove('visible');
            }
        });
    }, { root: null, threshold: 0.6 });

    sections.forEach(section => observer.observe(section));
}

updateSectionArrows();