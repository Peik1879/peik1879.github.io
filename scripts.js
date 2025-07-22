// GSAP Animation Setup
gsap.registerPlugin(ScrollTrigger);

console.log("🎮 Peik1879 Portfolio mit GSAP lädt...");

// Loading Animation
window.addEventListener('load', () => {
  console.log("🚀 Seite geladen - starte Animationen");
  
  // Animate page entrance
  gsap.from('body', {
    duration: 1,
    opacity: 0,
    ease: 'power2.out'
  });
  
  console.log("✅ Portfolio mit GSAP erfolgreich geladen!");
});

// Navbar Animation
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 100) {
      gsap.to(navbar, {
        duration: 0.3,
        background: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(20px)',
        ease: 'power2.out'
      });
    } else {
      gsap.to(navbar, {
        duration: 0.3,
        background: 'rgba(10, 10, 10, 0.9)',
        backdropFilter: 'blur(10px)',
        ease: 'power2.out'
      });
    }
  }
});

// Mobile Navigation Toggle with Animation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isActive = navLinks.classList.contains('active');
    
    if (!isActive) {
      navLinks.classList.add('active');
      navToggle.classList.add('active');
      
      // Animate menu open
      gsap.from('.nav-links a', {
        duration: 0.5,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
      });
    } else {
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: target,
        ease: 'power2.inOut'
      });
    }
  });
});

// Hero Section Entrance Animations
gsap.timeline()
  .from('.hero-title', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power3.out'
  })
  .from('.hero-subtitle', {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.8')
  .from('.hero-description', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.6')
  .from('.hero-cta', {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.4')
  .from('.scroll-indicator', {
    duration: 0.8,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.2');

// Parallax Effect for Hero Background
gsap.to('.hero', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  },
  yPercent: -30,
  ease: 'none'
});

// Hero Content Floating Animation
gsap.to('.hero-content', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  },
  y: -80,
  ease: 'none'
});

// Section Title Animations
gsap.utils.toArray('.section-title').forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    },
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  });
});

// Timeline Animations with Stagger
gsap.utils.toArray('.timeline-item').forEach((item, index) => {
  const isEven = index % 2 === 0;
  
  console.log(`🎯 Animiere Timeline Item ${index + 1}`);
  
  gsap.fromTo(item, 
    { 
      opacity: 0, 
      x: isEven ? -150 : 150, 
      rotation: isEven ? -5 : 5,
      scale: 0.9
    },
    {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      },
      duration: 1.2,
      opacity: 1,
      x: 0,
      rotation: 0,
      scale: 1,
      ease: 'power3.out',
      delay: index * 0.1
    }
  );
  
  // Hover animation for timeline items
  item.addEventListener('mouseenter', () => {
    gsap.to(item, {
      duration: 0.3,
      scale: 1.02,
      y: -5,
      ease: 'power2.out'
    });
  });
  
  item.addEventListener('mouseleave', () => {
    gsap.to(item, {
      duration: 0.3,
      scale: 1,
      y: 0,
      ease: 'power2.out'
    });
  });
});

// Project Cards Animation
gsap.utils.toArray('.project-card').forEach((card, index) => {
  console.log(`🎯 Animiere Project Card ${index + 1}`);
  
  gsap.fromTo(card,
    { 
      opacity: 0, 
      y: 100, 
      rotation: 2,
      scale: 0.9
    },
    {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      opacity: 1,
      y: 0,
      rotation: 0,
      scale: 1,
      ease: 'power3.out',
      delay: index * 0.2
    }
  );
  
  // Enhanced hover animation for project cards
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      duration: 0.4,
      scale: 1.05,
      y: -15,
      rotationY: 5,
      ease: 'power2.out'
    });
    
    const img = card.querySelector('.project-image img');
    if (img) {
      gsap.to(img, {
        duration: 0.4,
        scale: 1.1,
        ease: 'power2.out'
      });
    }
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      duration: 0.4,
      scale: 1,
      y: 0,
      rotationY: 0,
      ease: 'power2.out'
    });
    
    const img = card.querySelector('.project-image img');
    if (img) {
      gsap.to(img, {
        duration: 0.4,
        scale: 1,
        ease: 'power2.out'
      });
    }
  });
});

// Skills Animation with Progressive Bar Filling
gsap.utils.toArray('.skill-item').forEach((skill, index) => {
  const progressBar = skill.querySelector('.skill-progress');
  const skillValue = progressBar.getAttribute('data-skill');
  
  gsap.from(skill, {
    scrollTrigger: {
      trigger: skill,
      start: 'top 85%',
      end: 'bottom 15%',
      toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    x: -50,
    opacity: 0,
    ease: 'power3.out',
    delay: index * 0.1
  });
  
  // Animate skill bars with counter
  gsap.fromTo(progressBar, 
    { width: '0%' },
    {
      scrollTrigger: {
        trigger: skill,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      duration: 2,
      width: skillValue + '%',
      ease: 'power3.out',
      delay: index * 0.1 + 0.5
    }
  );
});

// Resume Section Animation
gsap.from('.resume-item', {
  scrollTrigger: {
    trigger: '.resume-content',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  },
  duration: 1,
  y: 60,
  opacity: 0,
  stagger: 0.2,
  ease: 'power3.out'
});

// Contact Section Animation
gsap.from('.contact-item', {
  scrollTrigger: {
    trigger: '.contact-content',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  },
  duration: 1,
  x: -80,
  opacity: 0,
  stagger: 0.15,
  ease: 'power3.out'
});

gsap.from('.impressum', {
  scrollTrigger: {
    trigger: '.contact-content',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  },
  duration: 1,
  x: 80,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.3
});

// Button Hover Animations
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, {
      duration: 0.3,
      scale: 1.05,
      y: -3,
      ease: 'power2.out'
    });
  });
  
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      duration: 0.3,
      scale: 1,
      y: 0,
      ease: 'power2.out'
    });
  });
});

// Cursor Animation (GTA-Style Effect)
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-outline"></div>';
document.body.appendChild(cursor);

// Cursor movement with GSAP
document.addEventListener('mousemove', (e) => {
  gsap.to('.cursor-dot', {
    duration: 0.1,
    x: e.clientX,
    y: e.clientY,
    ease: 'power2.out'
  });
  
  gsap.to('.cursor-outline', {
    duration: 0.3,
    x: e.clientX,
    y: e.clientY,
    ease: 'power2.out'
  });
});

// Cursor hover effects
document.querySelectorAll('a, button, .btn, .project-card, .timeline-item').forEach(element => {
  element.addEventListener('mouseenter', () => {
    gsap.to('.cursor-outline', {
      duration: 0.3,
      scale: 1.5,
      borderColor: '#00ff88',
      ease: 'power2.out'
    });
    gsap.to('.cursor-dot', {
      duration: 0.3,
      scale: 2,
      backgroundColor: '#00ff88',
      ease: 'power2.out'
    });
  });
  
  element.addEventListener('mouseleave', () => {
    gsap.to('.cursor-outline', {
      duration: 0.3,
      scale: 1,
      borderColor: 'rgba(0, 255, 136, 0.5)',
      ease: 'power2.out'
    });
    gsap.to('.cursor-dot', {
      duration: 0.3,
      scale: 1,
      backgroundColor: '#00ff88',
      ease: 'power2.out'
    });
  });
});

// Typewriter Effect for Hero Subtitle
function typeWriter(element, text, speed = 80) {
  element.innerHTML = '';
  
  gsap.to({}, {
    duration: text.length * speed / 1000,
    ease: 'none',
    onUpdate: function() {
      const progress = this.progress();
      const currentLength = Math.floor(progress * text.length);
      element.innerHTML = text.substring(0, currentLength) + 
        (progress < 1 ? '<span class="cursor-blink">|</span>' : '');
    }
  });
}

// Initialize typewriter effect
setTimeout(() => {
  const subtitle = document.querySelector('.hero-subtitle');
  if (subtitle) {
    const originalText = subtitle.textContent;
    typeWriter(subtitle, originalText, 80);
  }
}, 2500);

// Scroll-triggered text reveals
gsap.utils.toArray('.timeline-content, .project-content, .resume-item').forEach(element => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
      end: 'bottom 10%',
      toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'power2.out'
  });
});

// Page transition effect
function pageTransition() {
  const tl = gsap.timeline();
  
  tl.to('.page-transition', {
    duration: 0.5,
    x: '0%',
    ease: 'power2.inOut'
  })
  .to('.page-transition', {
    duration: 0.5,
    x: '100%',
    ease: 'power2.inOut'
  }, '+=0.2');
}

// Console Welcome Message (GTA Style)
console.log(`%c
██████╗ ███████╗██╗██╗  ██╗ ██╗ █████╗ ███████╗ █████╗ 
██╔══██╗██╔════╝██║██║ ██╔╝███║██╔══██╗╚════██║██╔══██╗
██████╔╝█████╗  ██║█████╔╝ ╚██║╚█████╔╝    ██╔╝╚██████║
██╔═══╝ ██╔══╝  ██║██╔═██╗  ██║██╔══██╗   ██╔╝  ╚═══██║
██║     ███████╗██║██║  ██╗ ██║╚█████╔╝   ██║   █████╔╝
╚═╝     ╚══════╝╚═╝╚═╝  ╚═╝ ╚═╝ ╚════╝    ╚═╝   ╚════╝ 

🎮 GSAP Portfolio v2.0 - Peik1879
Entwickelt mit ❤️ und GSAP-Power!
`, 'color: #00ff88; font-family: monospace; font-size: 12px;');

// Performance optimization
ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
});

// Refresh ScrollTrigger on window resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});

// Clean up on page unload
window.addEventListener('beforeunload', () => {
  ScrollTrigger.killAll();
});