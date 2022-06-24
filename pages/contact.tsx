import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout>
      <h1 className="title">
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/pricing">Pricing</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/contact.js</code>
      </p>
    </MainLayout>
  );
}