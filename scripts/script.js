window.scrollTo(0, 0);

window.addEventListener('load', () => {
	setTimeout(() => {
		document.getElementById('loading-screen').style.display = 'none';
		document.body.style.overflow = 'auto';
		new PureCounter();
	}, 3000); 
});

document.getElementById('scroll-up').addEventListener('click', () => {
	window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
});
document.getElementById('scroll-down').addEventListener('click', () => {
	window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
});

particlesJS('particles-home', {
	particles: {
		number: { value: 100, density: { enable: true, value_area: 800 } },
		color: { value: "#ffffff" },
		shape: {
			type: "circle",
			stroke: { width: 0, color: "#000000" },
			polygon: { nb_sides: 5 }
		},
		opacity: { value: 0.5, random: false },
		size: { value: 3, random: true },
		line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
		move: {
			enable: true,
			speed: 6,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 1200 }
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: true, mode: "grab" },
			onclick: { enable: true, mode: "push" },
			resize: true
		},
		modes: {
			grab: { distance: 140, line_linked: { opacity: 1 } },
			bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
			repulse: { distance: 200, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 }
		}
	},
	retina_detect: true
});

particlesJS('particles-models', {
	particles: {
		number: { value: 100, density: { enable: true, value_area: 800 } },
		color: { value: "#ffffff" },
		shape: {
			type: "circle",
			stroke: { width: 0, color: "#000000" },
			polygon: { nb_sides: 5 }
		},
		opacity: { value: 0.5, random: false },
		size: { value: 3, random: true },
		line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
		move: {
			enable: true,
			speed: 6,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 1200 }
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: true, mode: "grab" },
			onclick: { enable: true, mode: "push" },
			resize: true
		},
		modes: {
			grab: { distance: 140, line_linked: { opacity: 1 } },
			bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
			repulse: { distance: 200, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 }
		}
	},
	retina_detect: true
});
document.querySelectorAll('.nav-link').forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const targetId = link.getAttribute('href').slice(1);
		const targetSection = document.getElementById(targetId);
		window.scrollTo({
			top: targetSection.offsetTop - document.querySelector('.navbar').offsetHeight,
			behavior: 'smooth'
		});
	});
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
	let currentSection = '';
	sections.forEach(section => {
		const sectionTop = section.offsetTop - document.querySelector('.navbar').offsetHeight - 10;
		if (pageYOffset >= sectionTop) {
			currentSection = section.getAttribute('id');
		}
	});

	navLinks.forEach(link => {
		link.classList.remove('active');
		if (link.getAttribute('href').slice(1) === currentSection) {
			link.classList.add('active');
		}
	});
});

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-visible');
			observer.unobserve(entry.target);
		}
	});
}, {
	threshold: 0.2
});

document.querySelectorAll('section').forEach(section => {
	section.classList.add('fade-in-section');
	observer.observe(section); 
});
$(document).ready(function(){
$(".owl-carousel").owlCarousel({
loop: true,
margin: 5,
nav: false, 
dots: true, 
autoplay: true,
autoplayTimeout: 3000,
autoplayHoverPause: true,
responsive: {
0: {
	items: 1
},
600: {
	items: 2
},
1000: {
	items: 3
}
}
});
});

let slideIndex = 1;
showSlides(slideIndex);

// Function to change the slide (next/previous)
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Function to set a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to display the slides
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    // Wrap around if slideIndex goes out of bounds
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides and deactivate dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Optional: Automatically cycle through slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);