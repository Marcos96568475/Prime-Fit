import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prime Fit | Transforme sua rotina, alcance seu objetivo',
  description: 'Planos fitness para quem quer evoluir com saúde, força e acompanhamento na Prime Fit.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}