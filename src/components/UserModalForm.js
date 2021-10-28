import { useContext } from "react";
import Box from "@mui/material/Box";
import InputField from "./InputField";
import { useState } from "react";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import ModalForm from "./ModalForm";
import AlertMessage from "./AlertMessage";
import { UserContext } from "../context/UserContext";
import { AppContext } from "../context/AppContext";

const UserModalForm = () => {
  const appContext = useContext(AppContext);
  const { appDispatch } = appContext;

  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;
  const { users } = userState;

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleModalClose = () => {
    appDispatch({
        type: "CLOSE_MODAL"
    })
    setValues({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.nameError || values.emailError || values.passwordError) return;
    if (users && users.some((u) => u.email === values.email)) {
      appDispatch({
        type: "SHOW_ALERT",
        payload: "User with submitted email already exists",
      });
      return;
    }
    let newUser = {
      id: Math.random(),
      name: values.name,
      email: values.email,
      password: values.password,
      isAdmin: false,
    };
    userDispatch({
      type: "ADD_USER",
      payload: newUser,
    });
    handleModalClose();
    appDispatch({
        type: "SHOW_ALERT",
        payload: "User was sucessfully added",
      });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <ModalForm title={"User"}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <InputField
            id="name"
            type="name"
            label="Name"
            placeholder="Enter your name here"
            value={values.name}
            handleChange={handleChange}
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon color="secondary" />
                </InputAdornment>
              ),
            }}
          />
          <InputField
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email here"
            value={values.email}
            handleChange={handleChange}
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="secondary" />
                </InputAdornment>
              ),
            }}
          />
          <InputField
            id="password"
            type={values.showPassword ? "text" : "password"}
            label="Password"
            placeholder="Enter your password here"
            value={values.password}
            handleChange={handleChange}
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="secondary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    color="secondary"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              sx={{ width: "50%", marginBottom: "8px", alignItems: "center" }}
              color="secondary"
              size="medium"
              variant="contained"
            >
              Create
            </Button>
          </Box>
        </Box>
      </ModalForm>
      <AlertMessage />
    </>
  );
};

export default UserModalForm;
