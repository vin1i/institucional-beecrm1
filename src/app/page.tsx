import Link from "next/link";
import { formatFullAddress, siteConfig } from "@/lib/siteConfig";

export default function Home() {
  const { company, about, services, contact, address } = siteConfig;

  return (
    <>
  <section className="container hero">
  <div className=" hero__wrapper">
    <div className="stack">
      <span className="brand__tagline">Desde {company.foundedIn}</span>
      <h1 className="hero__title">{company.name}</h1>
      <p className="hero__subtitle">{company.slogan}</p>
      <p className="section-subtitle">{about.short}</p>
      <div className="hero__cta">
        <Link className="btn btn-primary" href="/contato">
          Fale com nossa equipe
        </Link>
        <Link className="btn btn-outline" href="/sobre">
          Conheça a Bee Labs
        </Link>
      </div>
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
            Oferecemos soluções completas em marketing digital e tecnologia, com processos estruturados e foco em resultados mensuráveis para o seu negócio.
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
            <h3>Transparência e profissionalismo em cada projeto</h3>
            <p>
              Trabalhamos com processos claros, documentação completa e comunicação transparente para garantir que sua empresa tenha uma presença digital sólida e confiável.
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
