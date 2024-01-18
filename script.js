// JavaScript for theme toggle
document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');

    themeSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-theme');
    });
});