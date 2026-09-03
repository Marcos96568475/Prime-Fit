const plans = [
  { name: 'Básico', price: '29,90', description: 'O essencial para começar sua jornada.', benefits: ['Acesso à sala de treino', 'Avaliação inicial', 'Treinos personalizados'] },
  { name: 'Prime', price: '59,90', description: 'Mais acompanhamento para evoluir mais rápido.', featured: true, benefits: ['Tudo do plano Básico', 'Acompanhamento mensal', 'Aulas coletivas inclusas', 'Área exclusiva do aluno'] },
  { name: 'Premium', price: '99,90', description: 'Experiência completa, feita para você.', benefits: ['Tudo do plano Prime', 'Consultoria individual', 'Plano nutricional', 'Prioridade no agendamento'] },
];

export default function Plans() {
  return (
    <section className="section plans-section" id="planos">
      <div className="section-heading"><p className="eyebrow">Planos Prime Fit</p><h2>Escolha seu plano<span>.</span></h2><p>Uma opção para cada momento da sua evolução.</p></div>
      <div className="plans-grid">
        {plans.map((plan) => <article className={`plan-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
          {plan.featured && <div className="plan-badge">Mais escolhido</div>}
          <p className="plan-label">Plano</p><h3>{plan.name}</h3><p className="plan-description">{plan.description}</p>
          <div className="plan-price"><span>R$</span>{plan.price}<small>/mês</small></div>
          <ul>{plan.benefits.map((benefit) => <li key={benefit}><span>✓</span>{benefit}</li>)}</ul>
          <a href="#quero-ser-aluno" className={`button ${plan.featured ? 'button-primary' : 'button-light'}`}>Quero este plano <span>→</span></a>
        </article>)}
      </div>
      <p className="disclaimer">Planos demonstrativos — valores sujeitos a alteração.</p>
    </section>
  );
}