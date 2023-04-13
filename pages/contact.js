import ContactLanding from '@/components/ContactLanding/ContactLanding';
import FormSection from '@/components/FormSection/FormSection';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Conservation Resources Hub - Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContactLanding />
        <FormSection />
      </main>
    </>
  );
}
