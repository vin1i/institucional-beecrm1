import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description: `Entre em contato com a ${siteConfig.company.name}`,
};

export default function ContatoPage() {
  const { contact, company } = siteConfig;

  return (
    <section>
      <div className="container stack">
        <div className="contact-hero">
          <h1 className="section-title">Entre em contato</h1>
          <p>
            Fale com a equipe da {company.name}. {contact.supportMessage}
          </p>
        </div>

        <div className="contact-wrapper">
          <aside className="contact-card">
            <h3>Informações diretas</h3>
            <ul>
              <li>
                <strong>E-mail:</strong>{" "}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <strong>Telefone:</strong>{" "}
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </li>
              <li>
                <strong>Horário de atendimento:</strong> {contact.serviceHours}
              </li>
              <li>{contact.supportMessage}</li>
            </ul>
          </aside>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
