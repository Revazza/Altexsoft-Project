export { Switch, Route, useHistory, Redirect } from "react-router-dom";
export { useSelector, useDispatch } from "react-redux";
export { authSliceActions } from "./store/store";
export { default as Home } from "./pages/Home";
export { default as Header } from "./components/header/Header";
export { default as Profile } from "./pages/Profile";
export { getCookie } from "./helperFunctions/HelperFunctions";
export { default as Guests } from "./pages/Guests";
export { default as Notification } from "./UI/notification/Notification";
export {default as Authentication}  from "./pages/Authentication";