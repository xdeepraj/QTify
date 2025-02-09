import React, { useState } from "react";

import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import BasicModal from "../BasicModal/BasicModal";

function Navbar({ searchData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);

  // console.log("searchData in navbar:", searchData);

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">
          <Logo />
        </Link>
        <Search
          placeholder="Search a song of your choice"
          searchData={searchData}
        />
        <Button text={"Give Feedback"} onClick={handleOpen} />
      </nav>
      <BasicModal open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
