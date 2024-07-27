import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors";
import { ContactItem } from "../ContactItem/ContactItem";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectFilter);

  return (
    <ul>
      {contacts.map(
        (contact) =>
          contact.name.toLowerCase().includes(filterText.toLowerCase()) && (
            <ContactItem key={contact.id} filteredContact={contact} />
          ),
      )}
    </ul>
  );
};
