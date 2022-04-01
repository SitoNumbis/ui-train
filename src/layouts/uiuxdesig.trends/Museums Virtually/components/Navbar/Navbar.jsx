import React from "react";

// icons
import { BsList, BsBell, BsChevronDown } from "react-icons/bs";

// emotion
import { css } from "@emotion/css";

const Navbar = () => {
  const notificationCss = css({
    border: "none",
    background: "none",
    fontSize: 15,
    color: "#626262",
    padding: "10px",
    marginTop: 5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e3e3e3",
    },
    height: 37,
  });

  const textListCss = css({
    border: "none",
    background: "none",
    fontSize: 15,
    color: "#bdbbbb",
    padding: 10,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  });

  const drawerButton = css({
    border: "none",
    background: "none",
    fontSize: 20,
    color: "#626262",
    padding: "10",
    cursor: "pointer",
    marginTop: 5,
    height: 37,
    "&:hover": {
      backgroundColor: "#e3e3e3",
    },
  });

  const spanCss = css({
    marginTop: 5,
    marginLeft: 5,
  });

  const container = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  });

  return (
    <div className={container}>
      <button onClick={null} className={drawerButton}>
        <BsList />
      </button>
      <button onClick={null} className={textListCss}>
        Europe
        <span className={spanCss}>
          <BsChevronDown />
        </span>
      </button>
      <button onClick={null} className={notificationCss}>
        <BsBell />
      </button>
    </div>
  );
};

export default Navbar;
