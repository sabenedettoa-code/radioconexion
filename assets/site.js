(() => {
  const menu = document.getElementById('nav-menu');
  const toggle = document.getElementById('menu-toggle');
  if (menu && toggle) {
    const sync = () => {
      const open = menu.classList.contains('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    };
    toggle.type = 'button';
    toggle.setAttribute('aria-controls', 'nav-menu');
    new MutationObserver(sync).observe(menu, {attributes: true, attributeFilter: ['class']});
    sync();
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.classList.contains('nav-open')) {
        menu.classList.remove('nav-open');
        toggle.textContent = '☰';
        toggle.focus();
      }
    });
  }
  const theme = document.getElementById('dark-mode-toggle');
  if (theme) {
    theme.type = 'button';
    const syncTheme = () => {
      const dark = document.body.classList.contains('dark-mode');
      theme.setAttribute('aria-label', dark ? 'Activar modo claro' : 'Activar modo oscuro');
      theme.setAttribute('aria-pressed', String(dark));
    };
    new MutationObserver(syncTheme).observe(document.body, {attributes: true, attributeFilter: ['class']});
    syncTheme();
  }
  document.querySelectorAll('input:not([type="checkbox"]):not([type="hidden"])').forEach(input => {
    if (!input.labels?.length && !input.hasAttribute('aria-label')) input.setAttribute('aria-label', input.placeholder || 'Correo electrónico');
  });
})();
