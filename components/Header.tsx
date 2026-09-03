'use client';

import { useState } from 'react';

const links = [
  { href: '#planos', label: 'Planos' },
  { href: '#sou-aluno', label: 'Sou aluno' },
  { href: '#quero-ser-aluno', label: 'Quero ser aluno' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="Prime Fit, início">Prime<span>Fit</span></a>
        <button className={`menu-toggle ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>
          <span /><span /><span />
        </button>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        </nav>
      </div>
    </header>
  );
}