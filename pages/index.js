import Head from 'next/head';
import { Container, Typography, Link } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Your Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h1" component="h1">
          Welcome to <Link href="https://nextjs.org">Next.js!</Link>
        </Typography>

        <Typography variant="body1">
          Get started by editing <code>pages/index.js</code>
        </Typography>
      </main>

      <footer>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </Link>
      </footer>
    </Container>
  );
}
