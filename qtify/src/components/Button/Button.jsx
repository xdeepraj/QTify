import Button from "@mui/material/Button";
import styles from "./Button.module.css";

const BasicButtons = ({ text }) => {
  return (
    <Button variant="contained" color="secondary" className={styles.button}>
      {text}
    </Button>
  );
};

export default BasicButtons;
