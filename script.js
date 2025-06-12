document.addEventListener('DOMContentLoaded', function() {
    // Efeito Parallax
    const parallax = document.querySelector('.parallax');
    const layers = document.querySelectorAll('.parallax-layer');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        layers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed'));
            const yPos = -(scrollTop * speed);
            layer.style.transform = `translate3d(0, ${yPos}px, 0) ${layer === layers[0] ? 'scale(2)' : layer === layers[1] ? 'scale(1.5)' : ''}`;
        });
    });

    // Efeito de digitação para a carta
    const letterParagraphs = document.querySelectorAll('.letter-content p');
    letterParagraphs.forEach((p, index) => {
        p.style.animationDelay = `${index * 0.5}s`;
    });

    // Criar pétalas caindo
    const petalsContainer = document.querySelector('.petals');
    const petalImages = [
        'https://img.freepik.com/fotos-premium/linda-petala-de-rosa-vermelha-isolada-em-branco_392895-66456.jpg',
        'https://img.freepik.com/fotos-premium/linda-petala-de-rosa-vermelha-isolada-em-branco_392895-66456.jpg',
        'https://img.freepik.com/fotos-premium/linda-petala-de-rosa-vermelha-isolada-em-branco_392895-66456.jpg'
    ];
    
    function createPetal() {
        const petal = document.createElement('div');
        petal.style.position = 'absolute';
        petal.style.width = `${Math.random() * 20 + 10}px`;
        petal.style.height = petal.style.width;
        petal.style.backgroundImage = `url(${petalImages[Math.floor(Math.random() * petalImages.length)]})`;
        petal.style.backgroundSize = 'contain';
        petal.style.backgroundRepeat = 'no-repeat';
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.top = '-50px';
        petal.style.opacity = Math.random() * 0.7 + 0.3;
        petal.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        
        petalsContainer.appendChild(petal);
    }
    
    // Adiciona a animação de queda
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(${Math.random() * 360}deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Cria várias pétalas
    for (let i = 0; i < 20; i++) {
        createPetal();
    }
});

// Adicione isso ao final do seu script.js
document.addEventListener('DOMContentLoaded', function() {
    // Corações flutuantes
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = '0';
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        heart.style.animation = `floatHeart ${Math.random() * 10 + 5}s linear forwards`;
        heart.style.zIndex = '9999';
        document.body.appendChild(heart);
        
        // Remove o coração após animação
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }, 300);
    
    // Adiciona a animação de coração flutuante
    const heartStyle = document.createElement('style');
    heartStyle.textContent = `
        @keyframes floatHeart {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(heartStyle);
    
    // Efeito de brilho nos títulos
    const titles = document.querySelectorAll('h1, h2');
    titles.forEach(title => {
        title.classList.add('heart-beat');
    });
});