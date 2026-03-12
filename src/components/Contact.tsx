"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log(form); };

  return (
    <section id="contact">
      <div className="reveal">
        <p className="section-label">Contato</p>
        <h2 className="contact-big">Tem um<br/>projeto?<br/><span>Bora!</span></h2>
        <a href="mailto:caio@caiodesenvolvedor.com.br" className="contact-email">
          caio@caiodesenvolvedor.com.br
        </a>
      </div>
      <form className="contact-form reveal" onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-label">Seu nome</label>
          <input className="form-input" name="name" value={form.name} onChange={onChange} placeholder="João Silva" />
        </div>
        <div className="form-group">
          <label className="form-label">E-mail</label>
          <input className="form-input" name="email" type="email" value={form.email} onChange={onChange} placeholder="joao@empresa.com" />
        </div>
        <div className="form-group">
          <label className="form-label">Sobre o projeto</label>
          <textarea className="form-textarea" name="message" value={form.message} onChange={onChange} placeholder="Conte um pouco sobre o que você precisa..." />
        </div>
        <button type="submit" className="form-btn">Enviar mensagem &rarr;</button>
      </form>
    </section>
  );
}
