import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styles2 from "../styles/theme.js"

const Home: NextPage = () => {
  return (

      
   
    
    <div className={styles.container}>
      <Head>
        <title>schiano research</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image src="/bud_in_cave_logo.png"
        width={50}
        height={50}
        alt="logo"></Image>
        <h1 className={styles.title}>
          <a href="/info">schiano research</a>
        </h1>
    <a href="mailto:gschiano@me.com">gschiano@me.com</a>

        <p className={styles.description}>
          the local leader in independent research{' '}
         <br></br>
          <code className={styles.code}>zen mind = beginners mind</code>
          <code className={styles.code}> body & soul</code>
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>Who & Why ? &rarr;</h2>
            <p>Experience the UNIQUE MIND of Gennaro Schiano</p>
           
          </a>

          <a href="/goals" className={styles.card}>
            <h2>Organizational Goals &rarr;</h2>
            <p> Is there really hope in a unified theory of everything?</p>
            <p>can we have fun while learning?</p>
          </a>

          <a
            href="https://www.instagram.com/twobitvision"
            className={styles.card}
          >
            <h2>Gallery &rarr;</h2>
            <p>View Past, Present and Future work in REAL TIME.</p>
          </a>

          <a
            href="https://medium.com/@gennaroschiano"
            className={styles.card}
          >
            <h2>Articles &rarr;</h2>
            <p>
              Published Reaserch
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
           <code>zen 2023 burnt into the web by GENNARO SCHIANO @ schiano_research</code>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

