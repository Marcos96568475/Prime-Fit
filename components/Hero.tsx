export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> Treine no seu ritmo</p>
          <h1>Evolua. <em>Supere.</em><br />Viva mais forte.</h1>
          <p className="hero-description">Seu próximo nível começa com uma rotina feita para você. Estrutura, energia e propósito para transformar movimento em resultado.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#quero-ser-aluno">Quero ser aluno <span>→</span></a>
            <a className="button button-ghost" href="#planos">Conhecer planos <span>↓</span></a>
          </div>
        </div>
        <div className="hero-stat" aria-label="Informação da Prime Fit">
          <strong>01</strong><span>/03</span><p>Um espaço para<br />a sua melhor versão.</p>
        </div>
      </div>
      <div className="hero-scroll">Role para explorar <span>↓</span></div>
    </section>
  );
}