import styles from '../styles/home.module.css';

function Home() {
  return (
    <div className={styles.app}>
      <div className={styles['app-header']}>
        <img src="/logo.svg" className={styles['app-logo']} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles['app-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default Home;
