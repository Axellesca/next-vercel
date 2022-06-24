import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

export const MainLayout: FC<any> = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home App</title>
        <meta name="description" content="Home App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
