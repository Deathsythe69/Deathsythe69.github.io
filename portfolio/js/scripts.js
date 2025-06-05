document.addEventListener('DOMContentLoaded', () => {
    const photoPlaceholder = document.querySelector('.photo-placeholder');

    photoPlaceholder.addEventListener('click', () => {
        if (photoPlaceholder.style.transform === 'scale(1.5)') {
            photoPlaceholder.style.transform = 'scale(1)';
        } else {
            photoPlaceholder.style.transform = 'scale(1.5)';
        }
    });
});