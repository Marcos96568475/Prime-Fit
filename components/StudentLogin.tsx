'use client';

export default function StudentLogin() {
  return (
    <section className="section student-section" id="sou-aluno">
      <div className="student-intro"><p className="eyebrow">Área do aluno</p><h2>Seu treino.<br /><em>Seu espaço.</em></h2><p>Entre para acompanhar sua jornada, seus treinos e sua evolução. Em breve, tudo em um só lugar.</p></div>
      <form className="login-form" onSubmit={(event) => event.preventDefault()}>
        <h3>Olá, aluno</h3><p>Acesse sua conta Prime Fit</p>
        <label htmlFor="login">Login</label><input id="login" name="login" type="tel" placeholder="Seu telefone sem DDD" autoComplete="username" />
        <label htmlFor="password">Senha</label><input id="password" name="password" type="password" placeholder="Sua senha" autoComplete="current-password" />
        <button type="submit" className="button button-primary">Entrar <span>→</span></button>
        <button type="button" className="forgot-password">Esqueci minha senha</button>
      </form>
    </section>
  );
}