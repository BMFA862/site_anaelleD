const startButton = document.getElementById('startButton');

if (startButton) {
    startButton.addEventListener('click', () => {
        window.location.href = 'auth1.html';
    });
}

// Détection d'orientation pour mobile
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si c'est un appareil mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (!isMobile) {
        // Ne rien faire sur les ordinateurs
        return;
    }
    
    const overlay = document.getElementById('orientationOverlay');
    const videoContainer = document.getElementById('video-container');
    
    if (!overlay) return;
    
    // Afficher l'overlay au chargement sur mobile
    overlay.classList.add('show');
    
    // Fonction pour vérifier l'orientation
    function checkOrientation() {
        const isLandscape = window.matchMedia("(orientation: landscape)").matches;
        
        if (isLandscape && isMobile) {
            // Masquer l'overlay et lancer fullscreen
            overlay.classList.remove('show');
            
            // Tenter de lancer le fullscreen sur l'iframe
            if (videoContainer) {
                const iframe = videoContainer.querySelector('iframe');
                if (iframe) {
                    setTimeout(() => {
                        iframe.requestFullscreen().catch(err => {
                            console.log('Fullscreen request denied:', err);
                        });
                    }, 500);
                }
            }
        } else {
            // En portrait, afficher l'overlay
            if (isMobile) {
                overlay.classList.add('show');
            }
        }
    }
    
    // Vérifier l'orientation initiale
    checkOrientation();
    
    // Écouter les changements d'orientation
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);
});
