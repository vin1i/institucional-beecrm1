import Link from "next/link";
import Image from "next/image";
import { formatFullAddress, siteConfig } from "@/lib/siteConfig";

export default function Home() {
  const { company, about, services, contact, address, cta } = siteConfig;

  return (
    <>
  <section className="hero" style={{paddingBlock: 'var(--spacing-2xl)'}}>
    <div className="container" style={{display: 'flex', alignItems: 'center', gap: 'var(--spacing-xl)', flexWrap: 'wrap'}}>
      <div className="stack" style={{flex: 1, minWidth: '300px'}}>
        <span className="brand__tagline">Desde {company.foundedIn}</span>
        <h1 className="hero__title">{company.name}</h1>
        <p className="hero__subtitle">{company.slogan}</p>
        <p className="section-subtitle">{about.short}</p>
        <div className="hero__cta">
          <Link className="btn btn-primary" href="/contato">
            {cta.primary}
          </Link>
          <Link className="btn btn-outline" href="/sobre">
            {cta.secondary}
          </Link>
        </div>
      </div>
      <div className="hero__image" style={{flex: '0 0 auto'}}>
        <Image 
          src="/images/logo.png" 
          alt="Martins Lemos Comércio Logo" 
          width={300} 
          height={300} 
          priority
          quality={80}
          style={{borderRadius: '50%'}}
        />
      </div>
    </div>
  </section>


      <section id="sobre">
        <div className="container stack">
          <div>
            <h2 className="section-title">Quem somos</h2>
            <p className="section-subtitle">
              {about.detailed[0]}
            </p>
          </div>
          <div className="grid grid--three">
            {about.values.map((value) => (
              <article key={value.title} className="card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos produtos alimentícios de qualidade com atendimento personalizado e preços justos para o seu dia a dia.
          </p>
          <div className="grid grid--three">
            {services.map((service) => (
              <article key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container callout">
          <div>
            <h3>Qualidade e confiança em cada produto</h3>
            <p>
              Trabalhamos com fornecedores de confiança e processos rigorosos de seleção para garantir que você tenha acesso aos melhores produtos alimentícios com frescor e procedência garantidos.
            </p>
          </div>
          <div>
            <ul className="value-list">
              <li>
                <h4>Empresa estabelecida</h4>
                <p>CNPJ {company.cnpj} · {formatFullAddress(address)}</p>
              </li>
              <li>
                <h4>Suporte dedicado</h4>
                <p>{contact.supportMessage}</p>
              </li>
              <li>
                <h4>Atendimento direto</h4>
                <p>
                  <strong>Telefone:</strong> {contact.phone} · <strong>E-mail:</strong> {contact.email}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
