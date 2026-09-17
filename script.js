// wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('odieBtn');

  if (!btn) return;

  // Mouse entering (hover start)
  btn.addEventListener('mouseenter', () => {
    btn.classList.add('hovered');
  });

  // Mouse leaving (hover end)
  btn.addEventListener('mouseleave', () => {
    btn.classList.remove('hovered', 'clicked');
  });

  // Mouse click down
  btn.addEventListener('mousedown', () => {
    btn.classList.remove('hovered');
    btn.classList.add('clicked');
  });

  // Mouse release
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('clicked');
    btn.classList.add('hovered');
  });
});