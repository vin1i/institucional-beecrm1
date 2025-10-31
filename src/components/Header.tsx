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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__content">
        <Link href="/" className="brand" aria-label={siteConfig.company.logoAlt} style={{flexDirection: 'row', alignItems: 'center', gap: '0.75rem'}}>
          <Image 
            src="/images/martinscomerciologo.png" 
            alt="Martins Lemos Comércio Logo" 
            width={100} 
            height={100} 
            quality={80}
            className="brand__logo"
          />
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <span className="brand__title">{siteConfig.company.name}</span>
            <span className="brand__tagline">{siteConfig.company.slogan}</span>
          </div>
        </Link>

        <nav aria-label="Navegação principal" className={`site-nav ${isMenuOpen ? 'site-nav--open' : ''}`}>
          <div className="site-nav__main">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="site-nav__legal">
            <ul>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </nav>

        <button
          className={`menu-toggle ${isMenuOpen ? 'menu-toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="menu-overlay" onClick={toggleMenu} aria-hidden="true" />
      )}
    </header>
  );
}
