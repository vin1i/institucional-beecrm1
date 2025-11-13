'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Contato', href: '/contato' },
];

const legalLinks = [
  { label: 'Privacidade', href: '/politica-privacidade' },
  { label: 'Termos', href: '/termos-uso' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__content">
        <Link href="/" className="brand" aria-label={siteConfig.company.logoAlt}>
          <Image 
            src="/images/martins_logo.png" 
            alt="Martins Lemos Comércio Logo" 
            width={48} 
            height={48} 
            quality={90}
            className="brand__logo"
            priority
          />
          <div className="brand__text">
            <span className="brand__title">{siteConfig.company.name}</span>
            <span className="brand__tagline">{siteConfig.company.slogan}</span>
          </div>
        </Link>

        <button
          className={`menu-toggle ${isMenuOpen ? 'menu-toggle--active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav aria-label="Navegação principal" className={`site-nav ${isMenuOpen ? 'site-nav--open' : ''}`}>
          <div className="site-nav__main">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu} aria-hidden="true" />
      )}
    </header>
  );
}
