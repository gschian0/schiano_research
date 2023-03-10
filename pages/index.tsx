import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styles2 from "../styles/theme.js"
import Link from "next/link";

const Home: NextPage = () => {
  return (

      
   
    
    <div className={styles.container}>
      <Head>
        <title>schiano research</title>
        <meta name="description" content="self verified leader in information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        >        <Image src="/bud_in_cave_logo.png"
        width={50}
        height={50}
        
        alt="logo"></Image>
        </Link>

        <h1 className={styles.title}>
          <Link href="/info">schiano research</Link>
        </h1>
        <Link href="mailto:gschiano@me.com">gschiano@me.com</Link>

        <p className={styles.description}>
          the local leader in independent research{' '}
         <br></br>
          <code className={styles.code}>zen mind = beginners mind</code>
          <code className={styles.code}> body & soul</code>
        </p>

      </main>

      <footer className={styles.footer}>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
           <code>zen 2023 burnt into the web by GENNARO SCHIANO @ schiano_research</code>
          </span>
        </Link>
      </footer>
    </div>
  )
}

export default Home
