// Sidebar Toggle Menu
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.sidebar-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const menu = this.nextElementSibling;
            
            if (menu && menu.classList.contains('sidebar-menu')) {
                menu.classList.toggle('open');
            }
        });
    });
    
    // Open first menu by default
    if (toggleButtons.length > 0) {
        toggleButtons[0].classList.add('active');
        const firstMenu = toggleButtons[0].nextElementSibling;
        if (firstMenu) {
            firstMenu.classList.add('open');
        }
    }
});
