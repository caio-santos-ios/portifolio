"use client";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Toast, ToastType } from "../widgets/Toast";



export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<ToastType>(null);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );
      setStatus('sucesso');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('erro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="reveal">
        <p className="section-label">Contato</p>
        <h2 className="contact-big">Tem um<br />projeto?<br /><span>Bora!</span></h2>
        <a href="mailto:caio@caiodesenvolvedor.com.br" className="contact-email">
          contato@caiodesenvolvedor.com.br
        </a>
      </div>

      <form className="contact-form reveal" onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-label">Seu nome</label>
          <input className="form-input" name="name" value={form.name} onChange={onChange} placeholder="João Silva" required />
        </div>
        <div className="form-group">
          <label className="form-label">E-mail</label>
          <input className="form-input" name="email" type="email" value={form.email} onChange={onChange} placeholder="joao@empresa.com" required />
        </div>
        <div className="form-group">
          <label className="form-label">Sobre o projeto</label>
          <textarea className="form-textarea" name="message" value={form.message} onChange={onChange} placeholder="Conte um pouco sobre o que você precisa..." required />
        </div>

        <button type="submit" className="form-btn" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar mensagem →'}
        </button>
      </form>

      <Toast type={status} onClose={() => setStatus(null)} />
    </section>
  );
}