import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
      </header>
      {children}
      <footer className={styles.footer}>Developed By Ali Hosseini</footer>
    </>
  );
}

export default Layout;
