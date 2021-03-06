import React from "react";
import classes from "./Item.module.css";
import {
  useDispatch,
  useHttp,
  Card,
  Button,
  notificationActions,
} from "./imports";

function Item(props) {
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();
  const guest = props.guest;
  const startDate = new Date(guest?.stayFrom).toISOString().split("T")[0];
  const endDate = new Date(guest?.stayTo).toISOString().split("T")[0];

  const imgSrc = guest.guestPicture64?.userHeader + guest.guestPicture64?.userPicture;
  
  const handleConfigureGuestStatus = async (choice) => {
    const response = await sendRequest(
      `https://localhost:7043/api/Booking/GuestStatus/${guest.bookingId}?i=${choice}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (!response.errorMsg) {
      dispatch(
        notificationActions.showNotification({
          type: "success",
          msg: response.data,
        })
      );
    } else {
      dispatch(
        notificationActions.showNotification({
          type: "error",
          msg: response.errorMsg,
        })
      );
    }
    props.onChangeStatus();
  };
  return (
    <Card className={classes.wrapper}>
      <div className={classes.img_wrapper}>
        <img src={imgSrc ? imgSrc:'./assets/Rectangle.png'} alt="user profile" />
      </div>
      <section className={classes.user_request}>
        <label>
          {guest?.firstname} {guest.lastname}
        </label>
        <div className={classes.request_wrapper}>
          <div className={classes.checkin_out}>
            <p>
              <span>From:</span> {startDate}
            </p>
            <p id={classes.secondP}>
              <span>To:</span> {endDate}
            </p>
          </div>
          {guest?.guestStatusEnum === 1 && (
            <div className={classes.declined}>
              <StatusButton title="Declined" />
            </div>
          )}
          {guest?.guestStatusEnum === 2 && (
            <div className={classes.accepted}>
              <StatusButton title="Accepted" />
            </div>
          )}
          {guest?.guestStatusEnum === 3 && (
            <div className={classes.not_possible}>
              <StatusButton title="Not Possible"/>
            </div>
          )}
          {guest?.guestStatusEnum === 0 && (
            <div className={classes.btn_wrapper}>
              <div className={classes.btns}>
                <Button
                  type="button"
                  title="Accept"
                  onClick={() => handleConfigureGuestStatus(2)}
                />
              </div>
              <div className={classes.btns}>
                <Button
                  type="button"
                  title="Decline"
                  className={classes.decline_btn}
                  onClick={() => handleConfigureGuestStatus(1)}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </Card>
  );
}
export default Item;

const StatusButton = (props) => {
  return (
    <React.Fragment>
      <Button
        type="button"
        title={props.title}
        className={props.className}
      ></Button>
    </React.Fragment>
  );
};
