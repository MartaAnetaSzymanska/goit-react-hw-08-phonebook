const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to your PhoneBook</h1>
      <img src="../images/phonebook_1687024.png" alt="phonebook"></img>
      <a href="https://www.freepik.com/icon/phonebook_1687024">
        Icon by Freepik
      </a>
      <h2>Please log in or register</h2>
    </div>
  );
}
