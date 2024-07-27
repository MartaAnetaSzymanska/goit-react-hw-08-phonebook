import PropTypes from "prop-types";
import styles from "./ContactItem.module.scss";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

export const ContactItem = ({ filteredContact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(filteredContact.id));
  };

  return (
    <li className={styles.contactListItem}>
      {filteredContact.name}: {filteredContact.phone}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
};
