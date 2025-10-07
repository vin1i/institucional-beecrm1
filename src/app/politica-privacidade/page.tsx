import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade da ${siteConfig.company.name}`,
};

export default function PoliticaPrivacidadePage() {
  const { company, legal, contact } = siteConfig;
  const privacy = legal.privacy;

  return (
    <section className="politica">
      <div className="container">
        <header className="politica__header">
          <h1>Política de Privacidade</h1>
          <p>
            Este documento descreve como a {company.name} trata os dados pessoais
            em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>
          <small>Última atualização: {privacy.lastUpdated}</small>
        </header>

        <div className="politica__content">
          {privacy.sections.map((section) => (
            <article key={section.title} className="politica__section">
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>

        <div className="politica__contact card">
          <h2>Entre em contato</h2>
          <p>
            Em caso de dúvidas sobre esta política ou para exercer seus direitos
            como titular de dados, fale conosco pelo e-mail{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a> ou pelo
            telefone <a href={`tel:${contact.phone}`}>{contact.phone}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
