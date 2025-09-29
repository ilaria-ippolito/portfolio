// src/utils/scrollToSection.js
export function scrollToSection({ event, id, setMenuOpen, location, navigate }) {
  event.preventDefault();
  if (setMenuOpen) setMenuOpen(false);
  if (location && location.pathname !== '/') {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const top = Math.max(
          0,
          el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8
        );
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
  } else {
    const el = document.getElementById(id);
    if (el) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const top = Math.max(
        0,
        el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8
      );
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
