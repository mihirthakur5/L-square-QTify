import React, { useState } from "react";
import styles from "./PageButton.module.css";

const PageButton = ({ show }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {show && (
        <button onClick={toggle}>{isOpen ? "Collapse" : "Show all"}</button>
      )}
    </>
  );
};

export default PageButton;
