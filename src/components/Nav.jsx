import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const goSubscribe = (e) => {
    e.preventDefault();
    closeMenu();
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('subscribe');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <nav className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/images/Dugout-to-the-boardroom-Logo-2.png" alt="Dugout to the Boardroom" />
        </Link>
        <div className="nav-right">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink>
          <NavLink to="/episodes" className={({ isActive }) => (isActive ? 'active-link' : '')}>Episodes</NavLink>
          <NavLink to="/host" className={({ isActive }) => (isActive ? 'active-link' : '')}>Host</NavLink>
          <a href="/#subscribe" onClick={goSubscribe} className="nav-cta">Subscribe</a>
        </div>
        <button
          type="button"
          className={`nav-burger ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink>
          <NavLink to="/episodes" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>Episodes</NavLink>
          <NavLink to="/host" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>Host</NavLink>
          <a href="/#subscribe" onClick={goSubscribe} className="mobile-menu-cta">Subscribe</a>
        </div>
      </div>
    </>
  );
}
