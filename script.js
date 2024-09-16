function showPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});