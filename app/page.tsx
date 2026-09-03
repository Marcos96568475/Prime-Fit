import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Plans from '@/components/Plans';
import StudentLogin from '@/components/StudentLogin';
import LeadForm from '@/components/LeadForm';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Plans />
        <StudentLogin />
        <LeadForm />
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <span className="brand footer-brand">Prime<span>Fit</span></span>
          <p>Movimento que transforma.</p>
          <small>© {new Date().getFullYear()} Prime Fit. Todos os direitos reservados.</small>
        </div>
      </footer>
    </>
  );
}