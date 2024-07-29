import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Filter } from "../components/Filter/Filter";
import { ContactList } from "../components/ContactList/ContactList";
import { selectIsLoading } from "../redux/selectors/contacts.selectors";
import { selectError } from "../redux/selectors/contacts.selectors";
import { fetchContacts } from "../redux/operations/contacts.operations";
import css from "./Contacts.module.scss";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <div>
        <div className={css.background}>
          <ContactForm />
          <Filter />
          {isLoading && !error && <b>Request in progress</b>}
          <ContactList />
        </div>
      </div>
    </div>
  );
}
