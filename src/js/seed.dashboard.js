document.addEventListener('DOMContentLoaded', () => {
    // Background Animation
    let body = document.body;
    let colors = ['#1c1c1c', '#2a2a2a', '#121212'];
    let index = 0;
    
    function changeBackgroundColor() {
        body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }
    
    setInterval(changeBackgroundColor, 5000); // Change color every 5 seconds
    
    // Smooth Scroll
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Header Scroll Animation
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            header.style.padding = '10px 40px';
            header.style.background = 'rgba(28, 28, 28, 0.9)';
        } else {
            header.style.padding = '20px 40px';
            header.style.background = 'linear-gradient(135deg, #1c1c1c, #2a2a2a)';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});
