const hide = document.getElementById('hideBtn');
const show = document.getElementById('show');
const sidebar = document.getElementById('sidebar');

const sidebarState = localStorage.getItem('sidebarState');

// Apply the stored state if it exists
if (sidebarState === 'hidden') {
    sidebar.style.marginLeft = '0px';
} else {
    sidebar.style.marginLeft = '-400px';
}

show.addEventListener('click', () => {
    if(sidebar.style.marginLeft == '-400px')
        sidebar.style.marginLeft = '0px';
    else sidebar.style.marginLeft = '-400px';
});
hide.addEventListener('click', () => {
    sidebar.style.marginLeft = '-400px';
});