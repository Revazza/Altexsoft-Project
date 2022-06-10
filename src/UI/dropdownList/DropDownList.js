import React, { useState } from "react";
import styles from "./DropDownList.module.css";

function DropDownList(props) {
  const [showList, setShowList] = useState(false);
  const handleDropDownClick = () => {
    setShowList((prevState) => !prevState);
  };

  const handleListItemClick = (itemName) =>{
    const key = props.name.toLowerCase();
    props.onChangeValue({
      ...props.parentState,
      [key]:itemName,
    })
    setShowList(false);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.list_btn} onClick={handleDropDownClick}>
        <p>{props.name}</p>
        <img
          src="./assets/list_arrow.png"
          alt="arrow"
          style={{ transform: showList && "rotate(-90deg)" }}
        />
      </div>
      {showList && (
        <div className={styles.list}>
          <ul style={{textAlign:props.alignCenter && "center"}}>
            {props.items.map((item) =>{
              return <li key={item.id} id={item.id} onClick={() => handleListItemClick(item.value)}>{item.value}</li>
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownList;
