import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Filter } from "../components/Filter/Filter";
import { ContactList } from "../components/ContactList/ContactList";
import { selectIsLoading } from "../redux/selectors/contacts.selectors";
import { selectError } from "../redux/selectors/contacts.selectors";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Request in progress</b>}
      <ContactList />
    </>
  );
}
