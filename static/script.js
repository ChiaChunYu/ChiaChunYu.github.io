let currentLanguage = localStorage.getItem('lang') || 'en';


function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-en], [data-zh]').forEach(element => {
        if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else if (lang === 'zh') {
            element.textContent = element.getAttribute('data-zh');
        }
    });

    document.querySelectorAll('.language-switch button').forEach(button => {
        if (button.textContent.toLowerCase() === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    document.documentElement.lang = lang;
}

function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-toggle');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    switchLanguage(currentLanguage);
    const themeBtn = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
    } else {
        themeBtn.textContent = '🌙';
    }

    document.body.classList.add('fade-in');
    setTimeout(() => {
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-in-loaded');
    }, 10);
}); 