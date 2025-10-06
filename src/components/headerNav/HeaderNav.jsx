import React, { useEffect, useRef, useState } from 'react';
import './header-nav.css';

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const panelRef = useRef(null);
  const lastActive = useRef(null);
  const linkedInHref = 'https://www.linkedin.com/in/parmjit-gill-b139721b8/';
  const githubHref = 'https://github.com/parmjit-dev';

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      lastActive.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      // move focus to the panel on open
      requestAnimationFrame(() => panelRef.current?.focus());
    } else {
      document.body.style.overflow = '';
      // return focus to the button on close
      requestAnimationFrame(() => btnRef.current?.focus());
    }
    return () => (document.body.style.overflow = '');
  }, [open]);

  // Close on Escape or click outside
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onClick = (e) => {
      if (!panelRef.current || !btnRef.current) return;
      if (panelRef.current.contains(e.target) || btnRef.current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-container">
        <nav className="nav-desktop" aria-label="Primary">
          <a href={linkedInHref} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={githubHref} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </nav>
      </div>

      {/* Mobile toggle */}
      <div className="mobile-container">
        <button
          ref={btnRef}
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          ref={panelRef}
          tabIndex={-1}
          className={`mobile-panel ${open ? 'open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="nav-mobile">
            <a
              onClick={() => setOpen(false)}
              href={linkedInHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              onClick={() => setOpen(false)}
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
