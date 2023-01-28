import { useState } from "react";
import { DropdownProps } from "../../../utils/type";

export default function Dropdown({ title, content }: DropdownProps) {
  const [toggle, setToggle] = useState(false);

  const activateCollapse = () => {
    setToggle((prevValue) => !prevValue);
  };

  return (
    <div className="collapse-container">
      <div onClick={activateCollapse} className="collapse-title">
        <h2>{title}</h2>
        <img
          src="/Images/downArrow.svg"
          alt="arrow"
          className={toggle ? " active-arrow" : "unactive"}
        />
      </div>
      <div className={toggle ? "collapse-txt active-txt" : "collapse-txt"}>
        {content}
      </div>
    </div>
  );
}
