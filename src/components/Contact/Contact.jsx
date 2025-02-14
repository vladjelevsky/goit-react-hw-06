import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.contactInfo}>
        <p className={css.info}>
          <FaUser className={css.contactIcon} />
          {name}
        </p>
        <p className={css.info}>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button className={css.deleteBtn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
