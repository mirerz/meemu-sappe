// main.js - Interactive elements for Meemu Sappe Campaign Website

document.addEventListener('DOMContentLoaded', () => {
    console.log('Meemu Sappe Website Initialized');

    // Scroll Animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll, .album-item, .news-item');
        
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 50;
            
            if (isVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for animation
    document.querySelectorAll('.animate-on-scroll, .album-item, .news-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger once on load

    // Ticker Logic (Duplicate content for seamless loop)
    const tickerContent = document.querySelector('.ticker-content');
    if (tickerContent && !tickerContent.dataset.duplicated) {
        const spans = Array.from(tickerContent.querySelectorAll('span'));
        spans.forEach(span => {
            const clone = span.cloneNode(true);
            tickerContent.appendChild(clone);
        });
        tickerContent.dataset.duplicated = "true";
    }

    // Tab Switching for Media Hub
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update content (this is a simple placeholder for real data)
            console.log(`Switching to tab: ${tabId}`);
            // In a real app, you'd swap content visibility or fetch data
        });
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            // Suggesting a menu could open here, but for now we'll just animate the burger
            console.log('Mobile menu toggled');
        });
    }

    // CTA Button interactions
    const joinBtns = document.querySelectorAll('.btn-primary');
    joinBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.textContent.includes('Join')) {
                // e.preventDefault();
                console.log('Join movement clicked');
            }
        });
    });
});
