import Link from 'next/link';
import { formatFullAddress, siteConfig } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__company">
          <h3>{siteConfig.company.footerJuridicalName}</h3>
          <p className="site-footer__cnpj">CNPJ {siteConfig.company.cnpj}</p>
          <p className="site-footer__address">{formatFullAddress(siteConfig.address)}</p>
        </div>

        <div className="site-footer__contact">
          <h4>Contato</h4>
          <ul>
            <li>
              <a href={`tel:${siteConfig.contact.phone}`}>
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </li>
            <li>{siteConfig.contact.serviceHours}</li>
          </ul>
        </div>

        <div className="site-footer__social">
          <h4>Redes sociais</h4>
          <ul className="social-links">
            {Object.entries(siteConfig.social).map(([network, url]) => (
              <li key={network}>
                <a href={url} target="_blank" rel="noreferrer noopener">
                  {network
                    .replace('youtube', 'YouTube')
                    .replace('linkedin', 'LinkedIn')
                    .replace('facebook', 'Facebook')
                    .replace('instagram', 'Instagram')}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__legal">
          <h4>Institucional</h4>
          <ul>
            <li>
              <Link href="/sobre">Sobre nós</Link>
            </li>
            <li>
              <Link href="/politica-privacidade">Política de Privacidade</Link>
            </li>
            <li>
              <Link href="/termos-uso">Termos de Uso</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <small>
          © {new Date().getFullYear()} {siteConfig.company.footerName}. Todos os direitos reservados.
        </small>
      </div>
    </footer>
  );
}
