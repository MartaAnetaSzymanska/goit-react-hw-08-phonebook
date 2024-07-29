import css from "./Welcome.module.scss";
export const Welcome = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <h1>Welcome to your PhoneBook</h1>
        <h2>Please log in or register</h2>
      </div>
    </div>
  );
};
