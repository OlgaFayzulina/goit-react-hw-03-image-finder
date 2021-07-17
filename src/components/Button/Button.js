import PropTypes from "prop-types";
import styles from '../../components/Button/Button.module.css'

const Button = ({ onClick }) => (
  <button 
    type="button"
    className={styles.button}
    data-action="load-more" 
    onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;