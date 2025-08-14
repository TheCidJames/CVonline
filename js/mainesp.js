// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    // Función para crear la barra de navegación
    function createHeader() {
        const headerHTML = `
            <header class="fixed w-full top-0 z-50 bg-gray-950/80 backdrop-blur-sm shadow-lg">
                <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="#" class="text-2xl font-bold hover:text-green-200 transition-colors">
                        <span class="text-white"> <i class="fab fa-jedi-order" style="color: #22c55e;"></i> Luis</span><span class="text-green-500">. Yapura</span>
                    </a>
                    <div class="space-x-4 md:space-x-8 hidden md:flex">
                        <a href="index.html" class="text-white hover:text-green-500 transition-colors"><i class="fas fa-home"></i></a>
                        <a href="index.html#insignias" class="text-white hover:text-green-500 transition-colors">Insignias</a>
                        <a href="formacion.html" class="text-white hover:text-green-500 transition-colors">Formación</a>
                        <a href="experiencia.html" class="text-white hover:text-green-500 transition-colors">Experiencia</a>
                        <a href="proyectos.html" class="text-white hover:text-green-500 transition-colors">Projectos</a>
                        <div class="relative group">
                            <button class="text-white hover:text-green-500 inline-flex transition-colors">
                                <span>Download CV</span>
                                <svg class="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </button>
                            <ul class="absolute hidden text-gray-700 pt-1 group-hover:block w-48 bg-gray-800 rounded-lg shadow-lg z-20">
                                <li><a class="rounded-t-lg hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap text-white" href="cvesp.pdf">Spanish</a></li>
                                <li><a class="hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap text-white" href="cven.pdf">English</a></li>
                            </ul>
                        </div>
                        <a href="indexen.html" class="text-white hover:text-green-500 font-bold inline-flex items-center transition-colors duration-200">
                            <i class="fa-solid fa-language text-white mr-2"></i>
                            <span>English Version</span>
                        </a>
                    </div>
                    <!-- Mobile menu button, hidden by default -->
                    <button id="menu-button" class="md:hidden text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
                <!-- Mobile menu, hidden by default -->
                <div id="mobile-menu" class="hidden md:hidden bg-gray-950/90 text-center fixed w-full z-50">
                    <a href="index.html" class="block py-2 hover:bg-gray-800 transition-colors"><i class="fas fa-home"></i> </a>
                    <a href="index.html#badges" class="block py-2 hover:bg-gray-800 transition-colors">Badges</a>
                    <a href="formacion.html" class="block py-2 hover:bg-gray-800 transition-colors">Education</a>
                    <a href="experiencia.html" class="block py-2 hover:bg-gray-800 transition-colors">Experience</a>
                    <a href="proyectos.html" class="block py-2 hover:bg-gray-800 transition-colors">Projects</a>
                        <details class="relative">
                            <summary class="block py-2 hover:bg-gray-800 transition-colors w-full text-center focus:outline-none cursor-pointer">
                                <span>Descarga CV CV</span>
                                <svg class="fill-current h-4 w-4 ml-2 inline-block transition-transform duration-200" id="cv-dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </summary>
                            <div class="absolute right-0 text-sm bg-gray-800 rounded-lg shadow-lg py-2">
                                <a class="block px-4 py-2 hover:bg-gray-700 transition-colors" href="cvesp.pdf">Español</a>
                                <a class="block px-4 py-2 hover:bg-gray-700 transition-colors" href="cven.pdf">English</a>
                            </div>
                        </details>
                    <a href="indexen.html" class="block py-2 hover:bg-gray-800 transition-colors">English Version</a>

                </div>
            </header>
        `;
        const headerPlaceholder = document.getElementById('main-header');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerHTML;

            // Lógica para el menú móvil
            const menuButton = document.getElementById('menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            if (menuButton && mobileMenu) {
                menuButton.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
            }

            // Ocultar el menú móvil al hacer clic en un enlace
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }
    }

    // Función para crear el pie de página
    function createFooter() {
        const footerHTML = `
            <footer class="bg-gray-950/80 backdrop-blur-sm text-center py-8 relative z-10">
                <div class="flex justify-center space-x-4 mb-4">
                    <!-- Email Icon-->
                    <a href="mailto:yapura.luis@proton.me" target="_blank" class="text-green-400 hover:text-green-200 transition-colors" aria-label="eMail">
                    <i class="fa-solid fa-envelope text-2xl"></i>
                    </a>
                    <!-- WhatsApp Icon -->
                    <a href="https://wa.me/+543512541007" target="_blank" class="text-green-400 hover:text-green-200 transition-colors" aria-label="WhatsApp">
                    <i class="fa-brands fa-whatsapp text-2xl"></i>
                    </a>
                    <!-- LinkedIn Icon -->
                    <a href="https://linkedin.com/in/luis-yapura" target="_blank" class="text-green-400 hover:text-green-200 transition-colors" aria-label="LinkedIn">
                        <i class="fa-brands fa-linkedin-in text-2xl"></i>
                    </a>
                    <!-- GitHub Icon -->
                    <a href="https://github.com/thecidjames" target="_blank" class="text-green-400 hover:text-green-200 transition-colors" aria-label="GitHub">
                        <i class="fa-brands fa-github text-2xl"></i>
                    </a>
                </div>
                <p class="text-gray-500 text-sm">
                    &copy; 2025 Luis Yapura. All rights reserved.
                </p>
                <p></p>
                <p></p>
                <p><i class="fab fa-jedi-order" style="font-size: 2.5rem; color: #22c55e;"></i></p>
            </footer>
        `;
        const footerPlaceholder = document.getElementById('main-footer');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHTML;
        }
    }

    // Llama a las funciones para crear los componentes cuando el DOM esté listo
    createHeader();
    createFooter();
    
    // Asegura que el encabezado permanezca visible al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            header.classList.add('fixed', 'w-full', 'top-0', 'z-50');
        }
    });

    // Script para el efecto de fondo Matrix
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            cols = Math.floor(width / fontSize);
            drops = new Array(cols).fill(1);
        });

        const matrixCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        const fontSize = 16;
        let cols = Math.floor(width / fontSize);
        let drops = new Array(cols).fill(1);

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#00FF41';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = matrixCharacters.charAt(Math.floor(Math.random() * matrixCharacters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        setInterval(draw, 35);
    }
});



