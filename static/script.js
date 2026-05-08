// Initialize Lucide Icons
lucide.createIcons();

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Image Preloader Logic
const heroFrames = Array.from({ length: 30 }, (_, i) => 
    `https://raw.githubusercontent.com/david-hckh/portfolio-next/main/public/sequence-1/${(i + 1).toString().padStart(3, '0')}.webp`
);

const morphFrames = Array.from({ length: 30 }, (_, i) => 
    `https://raw.githubusercontent.com/david-hckh/portfolio-next/main/public/sequence-2/${(i + 1).toString().padStart(3, '0')}.webp`
);

const allFrames = [...heroFrames, ...morphFrames];
const loadedImages = {};

function preloadImages(urls, onProgress, onComplete) {
    let loadedCount = 0;
    const totalCount = urls.length;

    urls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            loadedCount++;
            loadedImages[url] = img;
            onProgress(Math.floor((loadedCount / totalCount) * 100));
            if (loadedCount === totalCount) onComplete();
        };
        img.onerror = () => {
            loadedCount++;
            onProgress(Math.floor((loadedCount / totalCount) * 100));
            if (loadedCount === totalCount) onComplete();
        };
    });
}

// Loading Screen Handler
const loaderProgress = document.getElementById('loader-progress');
const loaderBar = document.getElementById('loader-bar');
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');

preloadImages(allFrames, 
    (progress) => {
        loaderProgress.textContent = `${progress}%`;
        loaderBar.style.width = `${progress}%`;
    }, 
    () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.style.opacity = '1';
                initAnimations();
            }, 1000);
        }, 500);
    }
);

// Animations Initialization
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Canvas Scroll Animation
    const heroCanvas = document.getElementById('hero-canvas');
    const heroCtx = heroCanvas.getContext('2d');

    function renderHeroFrame(index) {
        const url = heroFrames[Math.floor(index)];
        const img = loadedImages[url];
        if (!img) return;

        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;
        
        if (heroCanvas.width !== canvasWidth || heroCanvas.height !== canvasHeight) {
            heroCanvas.width = canvasWidth;
            heroCanvas.height = canvasHeight;
        }

        const imgWidth = img.width;
        const imgHeight = img.height;
        const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
        const x = (canvasWidth / 2) - (imgWidth / 2) * scale;
        const y = (canvasHeight / 2) - (imgHeight / 2) * scale;

        heroCtx.clearRect(0, 0, canvasWidth, canvasHeight);
        heroCtx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
    }

    // Initial render
    renderHeroFrame(0);

    const heroTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        }
    });

    // Update canvas frame
    const heroData = { frame: 0 };
    heroTimeline.to(heroData, {
        frame: heroFrames.length - 1,
        duration: 0.8,
        ease: "none",
        onUpdate: () => {
            renderHeroFrame(heroData.frame);
        }
    }, 0);

    // Canvas transforms (rotateX, scale, y, opacity)
    heroTimeline.to(heroCanvas, {
        opacity: 0,
        startAt: { opacity: 1 },
        scrollTrigger: {
            trigger: "#hero",
            start: "70% top",
            end: "95% top",
            scrub: true,
        }
    }, 0);

    // Navbar Logo Scroll to Top
    const logoLink = document.getElementById('navbar-logo');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            lenis.scrollTo('#hero', {
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        });
    }

    gsap.to(heroCanvas, {
        scale: 0.8,
        rotateX: -20,
        y: -100,
        scrollTrigger: {
            trigger: "#hero",
            start: "80% top",
            end: "bottom top",
            scrub: true,
        }
    });

    // Hero Text Animations
    gsap.to("#hero-text", {
        opacity: 0,
        scale: 0.8,
        y: -100,
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "30% top",
            scrub: true,
        }
    });

    gsap.to("#scroll-indicator", {
        opacity: 0,
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "10% top",
            scrub: true,
        }
    });

    // About Section Reveals
    gsap.from(".reveal-left", {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
        }
    });

    gsap.from(".reveal-right", {
        opacity: 0,
        scale: 0.9,
        y: 100,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
        }
    });

    // Experience Cards Reveal
    gsap.utils.toArray(".experience-card").forEach(card => {
        gsap.from(card, {
            opacity: 0,
            x: -50,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
            }
        });
    });

    // Stats Counters
    gsap.utils.toArray(".stat-card").forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: i * 0.2,
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
            }
        });
    });

    // Achievement List Reveal
    gsap.utils.toArray(".achievement-item").forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
            }
        });
    });

    // Project Cards 3D Effect
    gsap.utils.toArray(".project-card").forEach(card => {
        const inner = card.querySelector('.relative.z-10');
        
        gsap.fromTo(card, 
            { rotateX: 15, scale: 0.9, opacity: 0 },
            { 
                rotateX: -15, 
                scale: 1, 
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            }
        );
    });

    // Morph Canvas Scroll Animation
    const morphCanvas = document.getElementById('morph-canvas');
    const morphCtx = morphCanvas.getContext('2d');

    function renderMorphFrame(index) {
        const url = morphFrames[Math.floor(index)];
        const img = loadedImages[url];
        if (!img) return;

        const canvasWidth = morphCanvas.clientWidth;
        const canvasHeight = morphCanvas.clientHeight;
        morphCanvas.width = canvasWidth;
        morphCanvas.height = canvasHeight;

        const imgWidth = img.width;
        const imgHeight = img.height;
        const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
        const x = (canvasWidth / 2) - (imgWidth / 2) * scale;
        const y = (canvasHeight / 2) - (imgHeight / 2) * scale;

        morphCtx.clearRect(0, 0, canvasWidth, canvasHeight);
        morphCtx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
    }

    renderMorphFrame(0);

    const morphData = { frame: 0 };
    gsap.to(morphData, {
        frame: morphFrames.length - 1,
        ease: "none",
        scrollTrigger: {
            trigger: morphCanvas.closest('section'),
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: () => {
                renderMorphFrame(morphData.frame);
            }
        }
    });

    gsap.to("#morph-text", {
        opacity: 1,
        scrollTrigger: {
            trigger: morphCanvas.closest('section'),
            start: "top 20%",
            end: "bottom 80%",
            scrub: true,
        }
    });

    // Skills Reveal
    gsap.utils.toArray(".skill-item").forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: (i % 4) * 0.05,
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
            }
        });
    });

    gsap.from(".education-reveal", {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: ".education-reveal",
            start: "top 85%",
        }
    });

    gsap.from(".research-reveal", {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: ".research-reveal",
            start: "top 85%",
        }
    });

    gsap.from(".video-reveal", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        scrollTrigger: {
            trigger: ".video-reveal",
            start: "top 80%",
        }
    });

    // Footer Reveal
    gsap.from(".footer-reveal", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
            trigger: "footer",
            start: "top 80%",
        }
    });

    gsap.from(".social-reveal", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        scrollTrigger: {
            trigger: "footer",
            start: "top 80%",
        }
    });
}

// Window resize handler for canvases
window.addEventListener('resize', () => {
    // Redraw current frames or let GSAP handle it on next scrub
});
