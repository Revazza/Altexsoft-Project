import React from "react";
import classes from "./Item.module.css";
import Button from "../../UI/Button";
function Item() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.img_wrapper}>
        <img src="./assets/Rectangle.png" alt="user profile" />
      </div>
      <section className={classes.user_request}>
        <label>Username</label>
        <div className={classes.request_wrapper}>
          <article>
            <p>
              asdlkjspojdposjdpdsjpl;sjd;lsjkdplsjdposjkpodjposdjkposkdposdkposdkposdkpodskpodskposdkpodskpodskpodksslkdlkdsjdskljdslkjdslkdsjlksdjlkdsjlkdjklds
            </p>
          </article>
          <div className={classes.btn_wrapper}>
            <div className={classes.btns}>
              <Button type="button" title="Accept" />
            </div>
            <div className={classes.btns}>
              <Button type="button" title="Decline" className={classes.decline_btn} />
            </div>
          </div>
        </div>

        <p className={classes.checkin_out}>2022.12.03-2023.01.05</p>
      </section>
    </div>
  );
}
export default Item;
