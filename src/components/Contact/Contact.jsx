import styles from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { deleteContact } from "../../services/api";

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.users);

  return (
    <li key={id} className={styles.Contact__item}>
      {name}: {number}
      <button
        className={styles.Contact__button}
        type="button"
        onClick={() => dispatch(deleteContact({ token, id }))}
      >
        Remove
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
