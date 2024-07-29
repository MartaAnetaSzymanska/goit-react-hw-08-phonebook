import { useSelector } from "react-redux";
import {
  selectContacts,
  selectFilter,
} from "../../redux/selectors/contacts.selectors";
import { ContactItem } from "../ContactItem/ContactItem";
import css from "./ContactList.module.scss";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectFilter);

  return (
    <div className={css.container}>
      <ul>
        {contacts.map(
          (contact) =>
            contact.name.toLowerCase().includes(filterText.toLowerCase()) && (
              <ContactItem key={contact.id} filteredContact={contact} />
            ),
        )}
      </ul>
    </div>
  );
};
