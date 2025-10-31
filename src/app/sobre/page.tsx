import { formatFullAddress, siteConfig } from "@/lib/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nós",
  description: `${siteConfig.company.name} | ${siteConfig.about.short}`,
};

export default function SobrePage() {
  const { company, about, address } = siteConfig;

  return (
    <section className="sobre">
      <div className="container">
        <header className="sobre__header">
          <span className="brand__tagline">Desde {company.foundedIn}</span>
          <h1>Construímos confiança no comércio alimentício</h1>
          <p className="sobre__intro">{about.short}</p>
        </header>

        <div className="sobre__content">
          {about.detailed.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="sobre__principles">
          <div className="sobre__card">
            <h2>Missão</h2>
            <p>{about.mission}</p>
          </div>
          <div className="sobre__card">
            <h2>Visão</h2>
            <p>{about.vision}</p>
          </div>
        </div>

        <div className="sobre__values">
          <h2>Valores que nos movem</h2>
          <ul>
            {about.values.map((value) => (
              <li key={value.title}>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="sobre__location">
          <h2>Onde estamos</h2>
          <p>{company.name} · CNPJ {company.cnpj}</p>
          <p>{formatFullAddress(address)}</p>
        </div>
      </div>
    </section>
  );
}
