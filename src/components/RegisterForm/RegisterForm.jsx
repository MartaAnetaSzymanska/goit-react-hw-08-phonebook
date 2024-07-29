import { useDispatch } from "react-redux";
import { register } from "../../redux/operations/auth.operations";
import css from "./RegisterForm.module.scss";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    );
    form.reset();
  };

  return (
    <div className={css.background}>
      <div className={css.container}>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.label}>
            Username
            <input type="text" name="name" />
          </label>
          <label className={css.label}>
            Email
            <input type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
