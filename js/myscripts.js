document.addEventListener('click', event => {
    if (event.target.closest('[data-contrast]')) {
        const contrast = window.sessionStorage.getItem('contrast') || '';
        
        if (contrast === 'high') {
            window.sessionStorage.removeItem('contrast');
            document.body.classList.remove('high-contrast');
            menu.classList.remove('mm-menu--theme-white-contrast');
            menu.classList.add('mm-menu--theme-white');
        } else {
            window.sessionStorage.setItem('contrast', 'high');
            document.body.classList.add('high-contrast');
            menu.classList.add('mm-menu--theme-white-contrast');
            menu.classList.remove('mm-menu--theme-white');
        }
    }
});
