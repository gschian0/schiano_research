import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styles2 from "../styles/theme.js"
import Link from "next/link"
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
       
        <h3>a gennaro schiano company funded by the schiano family + odd music jobs &  consulting</h3>
       

        <p className={styles.description}>
          the seemingly unknown local leader in independent research{' '}
         <br></br>
          <code className={styles.code}>zen mind = beginners mind</code>
          <code className={styles.code}> body & soul</code>
        </p>

        <br></br>
        <br></br>
        <code>
          !apt-get update && apt-get install gas
        </code>
        <code>
          [#######################]progress=100%
          <br></br>
          gennaro adam schiano : INSTALLATION COMPLETE
        </code>
        <br></br>
        <code>
          $whoami
        </code>
       
       <div >
        <h1 className="text-xl max-w-xl">gennaro adam schiano :</h1>
        <p className="max-w-xl">a muti-disciplinary NEW mixed media artist. Focused on do it yourself solutions that empower himself and others with the same tools
        and information 
         that corporate industry leaders use to influence trends and automate growth. <br></br> With knowledge of the past and present in multiple technical and creative industries, 
         he is able to create a vision of the future 
         by navigating current research data and technological breakthroughs that allow us to shape the future not just react to it. <br></br>
        </p>
       
       </div>

      
 





        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h2>Who & Why ? &rarr;</h2>
            <p>Experience the UNIQUE MIND of Gennaro Schiano</p>
           
          </Link>

          <Link href="/goals" className={styles.card}>
            <h2>Organizational Goals &rarr;</h2>
            <p> Is there really hope in a unified theory of everything?</p>
            <p>can we have fun while learning?</p>
          </Link>

          <Link
            href="https://www.instagram.com/twobitvision"
            className={styles.card}
          >
            <h2>Gallery &rarr;</h2>
            <p>View Past, Present and Future work in REAL TIME.</p>
          </Link>

          <Link
            href="https://medium.com/@gennaroschiano"
            className={styles.card}
          >
            <h2>Articles &rarr;</h2>
            <p>
              Published Reaserch
            </p>
          </Link>
        </div>
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


