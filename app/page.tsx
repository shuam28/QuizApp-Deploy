import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            By <span className={styles.logo}><img src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} /></span>
          </a>
        </div>
        <div>
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            <span className={styles.logo}><img src="/nextjs.svg" alt="Next.js Logo" className={styles.nextLogo} /></span>
          </a>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <p className={styles.description}>Get started by editing <code className={styles.code}>app/page.tsx</code></p>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Docs &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://nextjs.org/templates" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Templates &rarr;</h3>
            <p>Explore starter templates for Next.js.</p>
          </a>

          <a href="https://vercel.com/new" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
