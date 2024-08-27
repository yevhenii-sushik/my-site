document.addEventListener('DOMContentLoaded', () => {
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.classList.add('hovered');
        });
        icon.addEventListener('mouseout', () => {
            icon.classList.remove('hovered');
        });
    });
});
