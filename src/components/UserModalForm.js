import * as React from "react";
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

const UserModalForm = ({ users, setUsers, open, setOpen }) => {
  const [alert, setAlert] = useState({state: false, message: ""});
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    nameError: null,
    emailError: null,
    passwordError: null,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleModalClose = () => {
    setOpen(false);
    setValues({
      name: "",
      email: "",
      password: "",
      nameError: null,
      emailError: null,
      passwordError: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.nameError || values.emailError || values.passwordError) return;
    if (users && users.some((u) => u.email === values.email)) {
        setAlert({state:true, message: "User with submitted email already exists!"});
        return;
    }
    let newUser = {
      id: Math.random(),
      name: values.name,
      email: values.email,
      password: values.password,
      isAdmin: false,
    };
    if (users && users.length > 0) {
      setUsers([...users, newUser]);
    } else {
      setUsers([
        {
          newUser,
        },
      ]);
    }
    handleModalClose();
    setAlert({state:true, message:"User sucessfully added."});
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
      <ModalForm title={"User"} open={open} handleModalClose={handleModalClose}>
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
            error={values.nameError}
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
            error={values.emailError}
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
            error={values.passwordError}
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
      <AlertMessage alert={alert} setAlert={setAlert} />
    </>
  );
};

export default UserModalForm;
