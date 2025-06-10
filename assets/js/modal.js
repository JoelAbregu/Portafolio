document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeBtn = document.querySelector('.close-modal');

    // Asume que todos los enlaces a video tienen la clase 'open-video-modal'
    document.querySelectorAll('.open-video-modal').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            // Aquí pon el link real de tu video mp4
            const videoSrc = this.getAttribute('data-video');
            modalVideo.querySelector('source').src = videoSrc;
            modalVideo.load();
            modal.style.display = 'flex';
            modalVideo.play();
        });
    });

    // Cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.querySelector('source').src = '';
    }

    closeBtn.addEventListener('click', closeModal);

    // Cierra si hacen click fuera del contenido
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Opcional: cierra con la tecla Esc
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});