import phonebookImage from "../images/phonebook_1687024.png";

export default function Home() {
  return (
    <div>
      <h1>Welcome to your PhoneBook</h1>
      <img src={phonebookImage} alt="phonebook"></img>
      <a href="https://www.freepik.com/icon/phonebook_1687024">
        Icon by Freepik
      </a>
      <h2>Please log in or register</h2>
    </div>
  );
}
