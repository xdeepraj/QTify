import Button from "@mui/material/Button";
import styles from "./Button.module.css";

const BasicButtons = ({ text, onClick }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      className={styles.button}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default BasicButtons;
