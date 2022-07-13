import React from "react";
import classes from "./ApartmentLayout.module.css";
import HotelAttributes from "./HotelAttributes";
import {
  GoogleMapReact,
  Button,
  useFetch,
  getCookie,
  useDispatch,
  notificationActions,
} from "../../imports";
import jwt from "jwt-decode";
const ApartmentLayout = (props) => {
  const dispatch = useDispatch();
  const token = getCookie("token");
  const { data } = useFetch(
    `https://localhost:7043/api/Apartment/${props.apartmentID}`
  );
  let lat = 0;
  let lng = 0;
  if (data) {
    let coordinates = data.apartmentCoordinates.split(" ");
    lat = +coordinates[0];
    lng = +coordinates[1];
  }
  const imgSrc =
    data?.apartmentPicture.apartmentHeader +
    data?.apartmentPicture.apartmentPicture;
  const handleDeleteHotel = async () => {
    const response = await fetch(
      `https://localhost:7043/api/Apartment/${jwt(token).UserId}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization:`Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      dispatch(
        notificationActions.showNotification({
          type: "success",
          msg: 'Hotel Removed',
        })
      );
      props.onHotelDelete({ changed: "Apartment", value: null });
    }
  };
  const apartmentClasses = props.hideApartment
    ? `${classes.wrapper} ${classes.hideApartment}`
    : `${classes.wrapper}`;

  return (
    <div className={apartmentClasses}>
      <div className={classes.info_wrapper}>
        <div className={classes.img_wrapper}>
          <img
            src={imgSrc ? imgSrc : "./assets/Rectangle.png"}
            alt="Your Hotel"
          />
        </div>
        <section className={classes.hotel_information}>
          <div className={classes.attributes_wrapper}>
            <HotelAttributes
              attribute="City"
              atrInfo={data?.city}
              id={classes.firstAttribute}
            />
            <HotelAttributes attribute="Address" atrInfo={data?.address} />
            <HotelAttributes
              attribute="Center In"
              atrInfo={`${data?.distanceToCenter}m`}
            />
            <HotelAttributes attribute="Beds" atrInfo={data?.bedsNumber} />
            <HotelAttributes
              attribute="Description"
              atrInfo={data?.apartmentDescription}
            />
          </div>
        </section>
      </div>
      <div className={classes.map_wrapper}>
        <GoogleMapReact center={{ lat, lng }} defaultZoom={16}>
          <MapPin lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
      <div className={classes.delete_btn}>
        <Button
          type="button"
          title="Delete Apartment"
          onClick={handleDeleteHotel}
        />
      </div>
    </div>
  );
};

const MapPin = (props) => {
  return <img src="./assets/pin.png" alt="pin" />;
};

export default ApartmentLayout;
