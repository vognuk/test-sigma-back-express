import axios from "axios";
import authActions from "./authActions";
import { toast, ToastContainer } from "react-toastify";

axios.defaults.baseURL = "https://testsigma.herokuapp.com" //"http://localhost:3000";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post("/api/users/register", credentials);
    token.set(response.data.token);
    toast.success("You are registered!");
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
    if (error.message.includes("409")) {
      toast.error("User is already exist!");
    } else {    
      toast.error(error.message);
    }
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post("/api/users/login", credentials);
    token.set(response.data.token);
    toast.success("You are logged in!");
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
    if (error.message.includes("401")) {
      toast.error("Wrong email or password!");
    } else { 
      toast.error(error.message);
    }
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post("/api/users/logout");
    token.unset();
    dispatch(authActions.logoutSuccess());
    console.log("ok")
  } catch (error) {
    console.log(
      "Добавить уведомление об ошибке выхода и ее причине(из ответа сервера)",
      error.message
    );
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get("/users/current");
    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default { register, logOut, logIn, getCurrentUser };
