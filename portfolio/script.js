const grid = document.getElementById('panel-grid');


// Create panels
for (let i = 0; i < 36; i++) {
    const panel = document.createElement('div');
    panel.className = 'panel';

    const panelInner = document.createElement('div');
    panelInner.className = 'panel-inner';

    const panelFront = document.createElement('div');
    panelFront.className = 'panel-content panel-front';

    const panelBack = document.createElement('div');
    panelBack.className = 'panel-content panel-back';

    panelInner.appendChild(panelFront);
    panelInner.appendChild(panelBack);
    panel.appendChild(panelInner);
    grid.appendChild(panel);
}

updateProjectDetails();
document.body.style.overflow = 'hidden';


// Flip animation on page load
window.addEventListener('load', () => {
    const panels = document.querySelectorAll('.panel-inner');
    const centerMessage = document.getElementById('center-message');
    const bannerImage = document.getElementById('banner-image');
    const bannerLight = document.getElementById('banner-light');
    const message = centerMessage.querySelector("h3");
    const image = document.getElementById('picture');
    const navbar = document.getElementById('navbar')

    panels.forEach((panel, index) => {
        setTimeout(() => {
            panel.classList.add('flipped');
            if (index === panels.length - 1) {
                setTimeout(() => {
                    if (window.innerWidth >= 1200) {
                        bannerImage.style.opacity = '1';
                        bannerLight.style.opacity = '1';
                        bannerLight.style.animation = 'lightFlicker 5s ease-out forwards';
                    }
                    centerMessage.style.opacity = '1';
                    document.body.style.overflow = 'auto';
                }, 1000);
            }
        }, index * 100);
    });
    
    waitForBanner(bannerImage).then(() => {
        setTimeout(() => {
            message.style.opacity = '1';
            image.style.opacity = '1';
            navbar.classList.add('slide-in');
            navbar.style.opacity = '1';
        }, 4250);
    });
});
// Wait for banner to resolve its animation
function waitForBanner(banner) {
    return new Promise((resolve) => {
        if (window.innerWidth < 1200) {
            resolve();
            return;
        }
        const checkBanner = setInterval(() => {
            if (banner.style.opacity === '1') {
                clearInterval(checkBanner);
                resolve();
            }
        }, 100);
    });
}

  

// Scroll-based overlay and project animations
const overlay = document.getElementById('overlay');
const projects = document.querySelectorAll('.project');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Overlay opacity
    let opacity = Math.min((scrollY / windowHeight) * 0.8, 1);
    overlay.style.opacity = opacity;

    // Project reveal animations 
    projects.forEach((project, index) => {
        const projectTop = project.getBoundingClientRect().top;
        const revealPoint = windowHeight * 0.8;

        if (projectTop < revealPoint) {
            const delay = index * 200; // Stagger the reveal
            setTimeout(() => {
                project.style.opacity = '1';
            }, delay);
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Update navbar style on scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    if (scrollY >= windowHeight) {
        navbar.classList.add('inverted');
        navbar.style.backgroundColor = 'rgba(230, 230, 230, 0.9)';
    } else {
        navbar.classList.remove('inverted');
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});

// Update project details if mobile
function updateProjectDetails() {
    const projectDetails = document.querySelectorAll('.project-details p');
    const isMobile = window.innerWidth < 600;

    projectDetails.forEach((paragraph, index) => {
        if (isMobile) {
            switch (index) {
                case 0:
                    paragraph.textContent = 'My first 3D project using the Godot 4.3 engine. A Zelda-inspired action-adventure game featuring a shop system, collectibles, puzzles, and robust combat.';
                    break;
                case 1:
                    paragraph.textContent = 'My first 2D game project using the Godot 4.0 engine. The game includes rain effects, objectives, enemy variety, and a final boss.';
                    break;
                case 2:
                    paragraph.textContent = 'A fully functional chess application built with Pygame, featuring check detection, AI opponents, and customizable time controls.';
                    break;
                case 3:
                    paragraph.textContent = 'Senior project for NSIN and the DoD optimizing algorithms like DQN for advanced battle aids against drone swarms.';
                    break;
                case 4:
                    paragraph.textContent = 'A collaborative Express.js project using MongoDB, Heroku, and Rainforest API to create a shared cart system.';
                    break;
                default:
                    break;
        }
    }
    else {
        switch (index) {
            case 0:
                paragraph.textContent = 'My first 3D project using the Godot 4.3 engine. A Zelda-inspired action-adventure game that features engaging combat mechanics including lock on targeting, robust enemy ai and pathfinding, cutscenes, collectibles and a reimagined dungeon crawling experience. Includes controller support and resolution options.';
                break;
            case 1:
                paragraph.textContent = 'My first 2D game project using the Godot 4.0 engine. The game is a top down sci fi shooter that includes power ups, rain effects, exposition, objectives, enemy variety and a final boss.';
                break;
            case 2:
                paragraph.textContent = 'A fully functional chess application built with Pygame, featuring check detection, AI opponents, and customizable time controls.';
                break;
            case 3:
                paragraph.textContent = 'Senior project for NSIN and the DoD optimizing algorithms for advanced battle management aids against drone swarms. My task specifically involved ensuring the functionality and optimization of the Deep Q Network as well as assisting in the development of the GUI using CustomTkinter, to visualize and adjust the drones spawn parameters, ranges, and typing.';
                break;
            case 4:
                paragraph.textContent = 'A collaborative Express.js project that aimed to create a shared cart system between members of a household using Rainforest API. My responsibilies included ensuring all api calls were being sent and recieved correctly, docker containerization, database management through MongoDB and web launch via Heroku.';
                break;
            default:
                break;
            }
        }
    });
}

window.addEventListener('resize', updateProjectDetails);