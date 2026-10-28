document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Mobile Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um item no mobile
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // 2. Filtro de Projetos por Categoria
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Alterar botão ativo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Mostrar/ocultar cards
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === category) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // 3. Simulação de Envio de Formulário com Validação
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                formStatus.style.color = '#16a34a';
                formStatus.innerText = 'Obrigado, ' + name + '! Sua mensagem foi enviada com sucesso.';
                
                // Limpa o formulário após o envio
                contactForm.reset();

                setTimeout(() => {
                    formStatus.innerText = '';
                }, 5000);
            } else {
                formStatus.style.color = '#dc2626';
                formStatus.innerText = 'Por favor, preencha todos os campos.';
            }
        });
    }
});