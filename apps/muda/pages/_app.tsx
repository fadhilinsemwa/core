// pages/_app.tsx
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import AuthProvider from '../components/AuthProvider';
import '../app/globals.css'; 

function MyApp({ Component, pageProps }: AppProps) {
  const title = pageProps.title || '';
  return (
    <AuthProvider>
      <Layout title={title}>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
