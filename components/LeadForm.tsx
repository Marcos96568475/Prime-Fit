'use client';

import { FormEvent, useState } from 'react';
import { submitLead } from '@/lib/leads';

type FormState = { fullName: string; phone: string; frequency: string; goal: string };

export default function LeadForm() {
  const [form, setForm] = useState<FormState>({ fullName: '', phone: '', frequency: '', goal: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }));
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setError('');
    if (!form.fullName.trim() || !form.phone.trim() || !form.frequency || !form.goal.trim()) { setStatus('error'); setError('Preencha todos os campos para continuar.'); return; }
    setStatus('loading'); await submitLead(form); setStatus('success');
  };
  const phone = (value: string) => value.replace(/\D/g, '').slice(0, 11).replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
  return (
    <section className="section lead-section" id="quero-ser-aluno">
      <div className="lead-intro"><p className="eyebrow">Comece hoje</p><h2>Quero ser<br /><em>aluno.</em></h2><p>Conte um pouco sobre você. Nossa equipe vai entrar em contato para entender seus objetivos e ajudar você a começar.</p><div className="lead-note"><span>↗</span><p>Sem compromisso.<br />Só o primeiro passo.</p></div></div>
      <form className="lead-form" onSubmit={handleSubmit} noValidate>
        {status === 'success' ? <div className="form-success" role="status"><span>✓</span><h3>Cadastro recebido.</h3><p>Obrigado pelo interesse. A equipe Prime Fit entrará em contato em breve.</p></div> : <>
          <div className="form-header"><span>01 — seus dados</span><span>Todos os campos são obrigatórios</span></div>
          <label htmlFor="fullName">Nome completo</label><input id="fullName" value={form.fullName} onChange={(e) => update('fullName', e.target.value)} placeholder="Como podemos chamar você?" required />
          <label htmlFor="phone">Telefone</label><input id="phone" value={form.phone} onChange={(e) => update('phone', phone(e.target.value))} inputMode="tel" placeholder="(00) 00000-0000" required />
          <label htmlFor="frequency">Frequência de atividade física</label><select id="frequency" value={form.frequency} onChange={(e) => update('frequency', e.target.value)} required><option value="">Selecione uma opção</option><option>De 1 - 3 Dias</option><option>De 3 - 5 Dias</option><option>Todos os dias</option></select>
          <label htmlFor="goal">Qual seu objetivo?</label><textarea id="goal" value={form.goal} onChange={(e) => update('goal', e.target.value)} placeholder="O que você quer conquistar?" rows={3} required />
          {error && <p className="form-error" role="alert">! {error}</p>}
          <button className="button button-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Enviando...' : 'Enviar cadastro'} <span>→</span></button>
        </>}
      </form>
    </section>
  );
}