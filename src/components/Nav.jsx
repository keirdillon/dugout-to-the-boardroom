import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goSubscribe = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('subscribe');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="nav-logo">
        <img src="/images/Dugout-to-the-boardroom-Logo-2.png" alt="Dugout to the Boardroom" />
      </Link>
      <div className="nav-right">
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink>
        <NavLink to="/episodes" className={({ isActive }) => (isActive ? 'active-link' : '')}>Episodes</NavLink>
        <NavLink to="/host" className={({ isActive }) => (isActive ? 'active-link' : '')}>Host</NavLink>
        <a href="/#subscribe" onClick={goSubscribe} className="nav-cta">Subscribe</a>
      </div>
    </nav>
  );
}
