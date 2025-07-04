import Head from 'next/head';
import Dashboard from '../components/Dashboard';

export default function DashboardPage() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Dashboard />
    </div>
  );
}