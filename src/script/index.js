setTimeout(() => {
    const heartIcon = document.querySelectorAll('.heart-icon');

    heartIcon.forEach(function (icon) {
        icon.addEventListener('click', () => {
            icon.classList.toggle('active');
        });
    });
}, 500);
