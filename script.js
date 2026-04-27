document.addEventListener("DOMContentLoaded", () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('open');
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Performance Metrics Fetcher
    async function fetchPerformanceMetrics() {
        try {
            const [profileRes, indicatorsRes] = await Promise.all([
                fetch('https://ratings.gtccopy.com/api/rating/1/profile/5588?widget_key=social_platform_ratings'),
                fetch('https://ratings.gtccopy.com/api/reports/5322/indicators?widget_key=social_platform_ratings')
            ]);

            if (!profileRes.ok || !indicatorsRes.ok) throw new Error('API fetch failed');

            const profileData = await profileRes.json();
            const indicatorsData = await indicatorsRes.json();

            // Update UI
            updateMetric('return-total', profileData.returnAllTime);
            updateMetric('return-day', profileData.returnDay);
            updateMetric('max-drawdown', indicatorsData.maxDrawdown);
            updateMetric('max-profit', indicatorsData.maxProfit);

            // Update progress fill
            const totalReturn = parseFloat(profileData.returnAllTime);
            const fillElement = document.getElementById('return-total-fill');
            if (fillElement) {
                fillElement.style.width = Math.min(totalReturn, 100) + '%';
            }

        } catch (error) {
            console.error('Error fetching performance metrics:', error);
            // Fallback values if API fails
            updateMetric('return-total', '26.22');
            updateMetric('return-day', '4.26');
            updateMetric('max-drawdown', '13.02');
            updateMetric('max-profit', '37.55');
        }
    }

    function updateMetric(id, value) {
        const element = document.getElementById(id);
        if (element) {
            // Animate number if possible, or just set it
            element.innerText = parseFloat(value).toFixed(2);
        }
    }

    // Fetch on load
    fetchPerformanceMetrics();

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sending...';
            btn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                btn.innerText = 'Request Sent!';
                btn.style.backgroundColor = '#28a745';
                btn.style.borderColor = '#28a745';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                }, 3000);
            }, 1500);
        });
    }
});
