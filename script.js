function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    const links = document.querySelectorAll('nav a');
    
    pages.forEach(p => p.classList.remove('active'));
    links.forEach(l => l.classList.remove('active'));
    
    document.getElementById(pageName).classList.add('active');
    event.target.classList.add('active');
}