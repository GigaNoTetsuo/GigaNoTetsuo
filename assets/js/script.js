$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Obaid Sajjad | AI Engineer Portfolio";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: [
        "LLM Fine-Tuning & PEFT",
        "Multi-Agent Systems (LangGraph)",
        "Enterprise RAG Solutions",
        "Autonomous AI Agents",
        "AWS SageMaker & Bedrock",
        "Scalable AI Pipelines"
    ],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->


// Error handling for missing JSON files - removed unused functions
// Skills and projects are now hardcoded in HTML for better performance

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
    setInterval(loader, 500);
}
window.onload = fadeOut;
// pre loader end

// Dark Mode Toggle
(function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
    
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
})();

// Contact Form Handler - Removed (Contact section no longer needed)

// Start of Tawk.to Live Chat

// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .skills-category-card', { interval: 200 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL CERTIFICATION */
srtop.reveal('.certification .cert-card', { interval: 150 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .exp-nav-column', { delay: 200 });
srtop.reveal('.experience .exp-display-column', { delay: 350 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

/* ===== INTERACTIVE EXPERIENCE SLIDER & HOVER ===== */
(function initExperienceInteractive() {
    const expNavItems = document.querySelectorAll('.exp-nav-item');
    const expCards = document.querySelectorAll('.exp-detail-card');
    const expDots = document.querySelectorAll('.exp-dot');
    const expLineFill = document.getElementById('expLineFill');
    const expProgressBar = document.getElementById('expProgressBar');
    const expStatusText = document.getElementById('expStatusText');
    const expStatusBadge = document.querySelector('.exp-banner-status');
    const expDisplay = document.getElementById('expDisplay');

    if (!expNavItems.length || !expCards.length) return;

    let currentIndex = 0;
    const totalItems = expNavItems.length;
    let isHovered = false;
    let progressInterval = null;
    const slideDuration = 4000; // 4 seconds per slide
    const progressUpdateStep = 40; // 40ms updates for fluid progress
    let progressElapsed = 0;

    function setActiveExperience(index, triggeredByHover = false) {
        currentIndex = index;

        // Update Nav items on left
        expNavItems.forEach((item, idx) => {
            if (idx === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update Detail cards on right
        expCards.forEach((card, idx) => {
            if (idx === index) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Update dots
        expDots.forEach((dot, idx) => {
            if (idx === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Update circular line fill height
        if (expLineFill) {
            const fillPercent = totalItems > 1 ? (index / (totalItems - 1)) * 100 : 100;
            expLineFill.style.height = `${fillPercent}%`;
        }

        // Reset progress on slide change
        progressElapsed = 0;
        if (expProgressBar) {
            expProgressBar.style.width = '0%';
        }

        // Update status indicator
        if (expStatusText && expStatusBadge) {
            if (triggeredByHover) {
                const companyName = expNavItems[index].querySelector('.exp-company-name')?.innerText || 'Experience';
                expStatusText.innerText = `Viewing: ${companyName}`;
                expStatusBadge.classList.add('paused');
            } else {
                expStatusText.innerText = 'Auto-sliding Banner';
                expStatusBadge.classList.remove('paused');
            }
        }
    }

    function startAutoSlide() {
        stopAutoSlide();
        if (isHovered) return;

        if (expStatusBadge) expStatusBadge.classList.remove('paused');
        if (expStatusText) expStatusText.innerText = 'Auto-sliding Banner';

        progressElapsed = 0;
        progressInterval = setInterval(() => {
            if (isHovered) return;
            progressElapsed += progressUpdateStep;
            const progressPercent = Math.min((progressElapsed / slideDuration) * 100, 100);
            if (expProgressBar) {
                expProgressBar.style.width = `${progressPercent}%`;
            }
            if (progressElapsed >= slideDuration) {
                progressElapsed = 0;
                const nextIndex = (currentIndex + 1) % totalItems;
                setActiveExperience(nextIndex, false);
            }
        }, progressUpdateStep);
    }

    function stopAutoSlide() {
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
        if (expProgressBar) {
            expProgressBar.style.width = '0%';
        }
    }

    // Attach hover and click listeners to left navigation items
    expNavItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            isHovered = true;
            stopAutoSlide();
            setActiveExperience(index, true);
        });

        item.addEventListener('mouseleave', () => {
            isHovered = false;
            startAutoSlide();
        });

        item.addEventListener('click', (e) => {
            e.preventDefault();
            isHovered = true;
            stopAutoSlide();
            setActiveExperience(index, true);
        });
    });

    // Pause auto-sliding when hovering over the right detail display column
    if (expDisplay) {
        expDisplay.addEventListener('mouseenter', () => {
            isHovered = true;
            stopAutoSlide();
            if (expStatusBadge) expStatusBadge.classList.add('paused');
            if (expStatusText) expStatusText.innerText = 'Banner Paused (Reading)';
        });

        expDisplay.addEventListener('mouseleave', () => {
            isHovered = false;
            startAutoSlide();
        });
    }

    // Attach click to dots
    expDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            isHovered = true;
            stopAutoSlide();
            setActiveExperience(index, true);
        });
    });

    // Initialize first item and start auto-sliding
    setActiveExperience(0, false);
    startAutoSlide();
})();
 