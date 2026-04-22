
// 🔥 Scroll Animation
const observer = new IntersectionObserver((entries) => {
if (entry.isIntersecting) {
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
   }       
    });
});

const elements = document.querySelectorAll(".hidden");
elements.forEach(el => observer.observe(el));
