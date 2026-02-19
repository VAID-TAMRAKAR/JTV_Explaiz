/* ========================================
    USER CONFIGURATION (EDIT THIS PART ONLY)
    ========================================
*/
const config = {
    // 1. Paste your Channel Banner Image URL here
    bannerUrl: "https://image2url.com/r2/default/images/1771340904133-e70acd1d-bcd8-4fea-82ad-4e61df9cd893.jpg", 
    
    // 2. Paste your Channel Logo Image URL here
    logoUrl: "https://image2url.com/r2/default/images/1771340676429-29f202be-7ec9-4180-81f8-2a8923e79ede.jpg"
};

/* ======================================== */

const normalizeUrl = (url) => {
    if (!url || typeof url !== 'string') return '';
    const trimmed = url.trim();
    if (!trimmed) return '';
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
};

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Apply Configuration ---
    
    // Set Logo
    const logoImg = document.getElementById('channelLogo');
    if (logoImg) logoImg.src = config.logoUrl;

    // Set Banner
    const bannerImg = document.getElementById('channelBanner');
    if (bannerImg) bannerImg.src = config.bannerUrl;

    // --- Mobile Menu Logic ---
    const mobileBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // Simple toggle for mobile view
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'white';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            }
        });
    }

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});