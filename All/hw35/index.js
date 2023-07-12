const input = document.getElementById('thisInput');
const sidebar = document.getElementById('sidebar');

input.onmouseenter = () => {
  sidebar.style.display = 'block';
};

input.onmouseleave = () => {
  sidebar.style.display = 'none';
};