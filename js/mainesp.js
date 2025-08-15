'use strict';

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Helpers ---------- */
    function ensurePlaceholder(id, prepend = true) {
        let el = document.getElementById(id);
        if (!el) {
            el = document.createElement('div');
            el.id = id;
            if (prepend && document.body.firstChild) document.body.insertBefore(el, document.body.firstChild);
            else document.body.appendChild(el);
        }
        return el;
    }

    function debounce(fn, wait = 150) {
        let t;
        return (...args) => {
            clearTimeout(t);
            t = setTimeout(() => fn(...args), wait);
        };
    }

    /* ---------- Ensure placeholders exist (so file works on any page) ---------- */
    ensurePlaceholder('main-header');
    ensurePlaceholder('main-footer');

    /* ---------- Header & Footer (creación e inyección) ---------- */
    function createHeader() {
        const headerHTML = `
        <header class="fixed w-full top-0 z-50 neon-header">
            <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#" class="text-2xl font-bold hover:text-green-200 transition-colors font-orbitron">
                    <span class="text-white"> <i class="fa-brands fa-jedi-order" style="color: #22c55e;"></i> Luis </span><span class="text-green-500">.Yapura</span>
                </a>
                
                <!-- Menú de escritorio - Versión Español -->
                <div id="menu-es" class="hidden md:flex items-center space-x-4 md:space-x-8">
                    <a href="index.html" class="glitch-text text-white hover:text-green-500" data-text="Inicio">Inicio</a>
                    <a href="index.html#about" class="glitch-text text-white hover:text-green-500" data-text="Sobre Mí">Sobre Mí</a>
                    <a href="index.html#insignias" class="glitch-text text-white hover:text-green-500" data-text="Insignias">Insignias</a>
                    <a href="formacion.html" class="glitch-text text-white hover:text-green-500" data-text="Formación">Formación</a>
                    <a href="experiencia.html" class="glitch-text text-white hover:text-green-500" data-text="Experiencia">Experiencia</a>
                    <a href="proyectos.html" class="glitch-text text-white hover:text-green-500" data-text="Proyectos">Proyectos</a>
                    <div class="relative group">
                        <button class="futuristic-btn px-4 py-1 flex items-center">
                            <i class="fas fa-download mr-2"></i>CV
                        </button>
                        <div class="cv-dropdown-menu absolute right-0 w-48 hidden group-hover:block
                                transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out">
                            <div class="py-1">
                                <a href="cvesp.pdf" class="block px-4 py-2 text-sm text-white hover:text-green-500 transparent-menu-link transition-colors">Español</a>
                                <a href="cven.pdf" class="block px-4 py-2 text-sm text-white hover:text-green-500 transparent-menu-link transition-colors">Inglés</a>
                            </div>
                        </div>
                    </div>
                    
                <!-- Botón para versión en ingles -->
            <a href="indexen.html" class="futuristic-btn px-4 py-1 flex items-center">
                <i class="fas fa-language mr-2"></i>English
            </a>
        </div>
     <!-- Sección derecha en móvil -->
        <div class="flex items-center space-x-4 md:hidden">
            <!-- Botón para cambiar a ingles -->
            <a href="indexen.html" class="text-green-400 focus:outline-none">
                <i class="fas fa-language text-2xl"></i>
            </a>

            <!-- Botón hamburguesa -->
            <button id="hamburger-menu-btn" class="text-green-400 focus:outline-none">
                <i class="fas fa-bars text-2xl"></i>
            </button>
        </div>
            </nav>
        </header>

        <!-- Menú móvil - Versión Española -->
        <div id="mobile-menu" class="fixed top-16 left-0 w-full h-full z-40 bg-gray-950/90 backdrop-blur-md transform -translate-x-full transition-transform duration-300 ease-in-out md:hidden">
            <nav id="mobile-menu-es" class="flex flex-col items-center justify-center h-full space-y-8">
                <a href="index.html" class="text-white text-2xl hover:text-green-500 transition-colors">Inicio</a>
                <a href="index.html#about" class="text-white text-2xl hover:text-green-500 transition-colors">Sobre Mí</a>
                <a href="index.html#insignias" class="text-white text-2xl hover:text-green-500 transition-colors">Insignias</a>
                <a href="formacion.html" class="text-white text-2xl hover:text-green-500 transition-colors">Formación</a>
                <a href="experiencia.html" class="text-white text-2xl hover:text-green-500 transition-colors">Experiencia</a>
                <a href="proyectos.html" class="text-white text-2xl hover:text-green-500 transition-colors">Proyectos</a>
                <!-- Menú CV para la versión móvil -->
                <div class="w-full text-center">
                    <button id="mobile-cv-toggle-btn" class="futuristic-btn px-4 py-1 flex items-center justify-center mx-auto">
                        <i class="fas fa-download mr-2"></i>CV
                    </button>
                    <div id="mobile-cv-dropdown" class="hidden flex flex-col space-y-2 mt-2">
                        <a href="cvesp.pdf" class="block px-4 py-2 text-sm text-white hover:text-green-500 transparent-menu-link transition-colors">Español</a>
                        <a href="cven.pdf" class="block px-4 py-2 text-sm text-white hover:text-green-500 transparent-menu-link transition-colors">Inglés</a>
                    </div>
                </div>
            </nav>
        </div>
        `;
        const headerPlaceholder = document.getElementById('main-header');
        if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
    }

    function createFooter() {
        const footerHTML = `
            <footer class="bg-gray-950/80 backdrop-blur-sm text-center py-8 relative z-10">
                <div class="flex justify-center space-x-4 mb-4">
                    <a href="mailto:yapura.luis@proton.me" target="_blank" class="text-green-400 hover:text-green-200 transition-colors" aria-label="eMail">
                        <i class="fa-solid fa-envelope text-2xl"></i>
                    </a>
                    <a href="https://wa.me/+543512541007" target="_blank" class="text-green-400 hover:text-green-200 transition-colors" aria-label="WhatsApp">
                        <i class="fa-brands fa-whatsapp text-2xl"></i>
                    </a>
                    <a href="https://linkedin.com/in/luis-yapura" target="_blank" class="text-green-400 hover:text-green-200 transition-colors" aria-label="LinkedIn">
                        <i class="fa-brands fa-linkedin-in text-2xl"></i>
                    </a>
                    <a href="https://github.com/thecidjames" target="_blank" class="text-green-400 hover:text-green-200 transition-colors" aria-label="GitHub">
                        <i class="fa-brands fa-github text-2xl"></i>
                    </a>
                </div>
                <p class="text-gray-500 text-sm">
                    &copy; 2025 Luis Yapura. All rights reserved.
                </p>
                <p><i class="fab fa-old-republic" style="font-size: 2.5rem; color: #22c55e;"></i></p>
            </footer>
        `;
        const footerPlaceholder = document.getElementById('main-footer');
        if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
    }

    /* ---------- Create header/footer then translate menu according to saved/detected language ---------- */
    createHeader();
    createFooter();

    /* ---------- Header interactions ---------- */
    (function initHeaderInteractions() {
        const hamburgerBtn = document.getElementById('hamburger-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileCvBtn = document.getElementById('mobile-cv-toggle-btn');
        const mobileCvDropdown = document.getElementById('mobile-cv-dropdown');

        if (hamburgerBtn && mobileMenu) {
            hamburgerBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('-translate-x-full');
            });
        }

        // Toggle para el menú del CV en móvil
        if (mobileCvBtn && mobileCvDropdown) {
            mobileCvBtn.addEventListener('click', () => {
                mobileCvDropdown.classList.toggle('hidden');
            });
        }
    })();

    /* ---------- Insignias collapse ---------- */
    (function initInsigniasToggle() {
        const toggleButton = document.getElementById('toggle-insignias-btn');
        const hiddenInsignias = document.querySelectorAll('.collapsible-insignia');

        if (!toggleButton || hiddenInsignias.length === 0) return;

        // Se usa texto fijo en español
        toggleButton.textContent = 'Ver más';

        toggleButton.addEventListener('click', () => {
            const isExpanded = toggleButton.classList.contains('expanded');

            hiddenInsignias.forEach(insignia => {
                insignia.classList.toggle('hidden');
            });

            if (!isExpanded) {
                toggleButton.classList.add('expanded');
                toggleButton.textContent = 'Ver menos';
            } else {
                toggleButton.classList.remove('expanded');
                toggleButton.textContent = 'Ver más';
            }
        });
    })();

    /* ---------- Hero typing / boot effects (only if #hero exists) ---------- */
    (function initHeroAnimations() {
        const hero = document.getElementById('hero');
        if (!hero) return;

        const elementsToAnimate = [
            document.getElementById('typing-name'),
            document.getElementById('typing-role2'),
            document.getElementById('typing-location')
        ];
        const cehLine = document.getElementById('ceh-line');
        const socialIcons = document.getElementById('social-icons');

        hero.classList.add('crt-boot-effect');

        setTimeout(() => {
            let delay = 0;
            elementsToAnimate.forEach((element, index) => {
                if (!element) { delay += 3000; return; }
                setTimeout(() => {
                    if (element.parentElement) element.parentElement.classList.remove('hidden-initial');
                    element.classList.add('blinking-cursor');
                    if (index === 0) {
                        element.classList.add('typing-animation-name');
                        element.parentElement?.classList.add('matrix-boot-up');
                    } else {
                        element.classList.add('typing-animation-line');
                    }

                    element.addEventListener('animationend', (event) => {
                        if (event.animationName && event.animationName.includes('typing')) {
                            element.classList.remove('blinking-cursor');
                            if (index === elementsToAnimate.length - 1) {
                                setTimeout(() => {
                                    cehLine?.classList.remove('hidden-initial');
                                    cehLine?.classList.add('fade-in', 'matrix-boot-up');
                                    setTimeout(() => {
                                        socialIcons?.classList.remove('hidden-initial');
                                        socialIcons?.classList.add('fade-in');
                                    }, 1000);
                                }, 1000);
                            }
                        }
                    }, { once: true });
                }, delay);
                delay += 3000;
            });
        }, 1000);
    })();

    /* ---------- About section typewriter (only if exists) ---------- */
    (function initAboutTypewriter() {
        const aboutTextElement = document.getElementById('about-text');
        const aboutSection = document.getElementById('about');
        if (!aboutTextElement || !aboutSection) return;

        const text = 'Analista en sistemas y especialista en ciberseguridad con experiencia en hacking ético, auditorías de seguridad, y administración de sistemas y bases de datos. Demostrada competencia en entornos Linux y Windows, virtualización, y sistemas ERP. Apasionado en la identificación y mitigación de vulnerabilidades, respuesta a incidentes y capacitación técnica. Busco aplicar mis conocimientos y pasión por la tecnología para contribuir a proyectos innovadores en el ámbito de la ciberseguridad por lo cual actualmente me encuentro capacitando en un Master Internacional de Ciberseguridad de la mano de el Campus Internacional en Ciberseguridad y la Universidad Catolica San Antonio de Murcia en España.';
    
        function typeWriter(element, text, i = 0) {
            if (!element.classList.contains('typing-container')) {
                element.classList.add('typing-container');
            }
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                setTimeout(() => typeWriter(element, text, i + 1), 25);
            } else {
                element.classList.remove('typing-container');
            }
        }
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutTextElement.innerHTML = '';
                    typeWriter(aboutTextElement, text);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
    
        observer.observe(aboutSection);
    })();
    /* ---------- Matrix background (always try to init) ---------- */
    (function initMatrix() {
        let canvas = document.getElementById('matrix-canvas');
        let createdCanvas = false;
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.id = 'matrix-canvas';
            canvas.style.position = 'fixed';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100vw';
            canvas.style.height = '100vh';
            canvas.style.zIndex = '-1';
            canvas.style.opacity = '0.5';
            document.body.insertBefore(canvas, document.body.firstChild);
            createdCanvas = true;
        }

        const ctx = canvas.getContext && canvas.getContext('2d');
        if (!ctx) return;

        const matrixChars = "アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワンabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()_+=-/[]{}|:;\"'<>,.?~`";
        const fontSize = 10;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let columns = Math.max(1, Math.floor(width / fontSize));
        let drops = new Array(columns).fill(1);

        function setCanvasSize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            columns = Math.max(1, Math.floor(width / fontSize));
            const newDrops = new Array(columns).fill(1);
            for (let i = 0; i < Math.min(drops.length, newDrops.length); i++) {
                newDrops[i] = drops[i];
            }
            drops = newDrops;
        }
        setCanvasSize();

        let lastTime = 0;
        const minInterval = 35;

        function frame(now) {
            requestAnimationFrame(frame);
            if (!lastTime) lastTime = now;
            const elapsed = now - lastTime;
            if (elapsed < minInterval) return;
            lastTime = now;

            ctx.fillStyle = 'rgba(13, 13, 13, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#00ff41';
            ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

            for (let i = 0; i < columns; i++) {
                const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        requestAnimationFrame(frame);

        window.addEventListener('resize', debounce(() => {
            setCanvasSize();
        }, 150));
    })();

    // end DOMContentLoaded

});
