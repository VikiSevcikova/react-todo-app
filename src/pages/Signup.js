import styles from "../style/style.module.css";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useContext, useState } from "react";
import { Typography } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import InputField from "../components/InputField";
import AlertMessage from "../components/AlertMessage";
import { UserContext } from "../context/UserContext";
import { AppContext } from "../context/AppContext";

const Signup = () => {
  const history = useHistory();
  const appContext = useContext(AppContext);
  const { appDispatch } = appContext;

  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;
  const { users } = userState;

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.nameError || values.emailError || values.passwordError) return;
    if (users && users.some((u) => u.email === values.email)) {
        appDispatch({
            type: "SHOW_ALERT",
            payload: "User with submitted email already exists"
        })
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
        type: "SIGN_UP",
        payload: newUser,
    });

    history.push("/");
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
    <div className={styles.signupContainer}>
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader
          className={styles.cardHeader}
          titleTypographyProps={{fontWeight:700, marginBottom: 2, variant:"h6" }}
          title="Hey, Welcome. Signup to access Task Management"
        />
        <Box component="form" onSubmit={handleSubmit}>
          <CardContent>
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
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "10px",
            }}
          >
            <Button
              type="submit"
              sx={{ width: "50%", marginBottom: "8px" }}
              color="secondary"
              size="medium"
              variant="contained"
            >
              Signup
            </Button>
            <Typography>
              Already a member?
              <Link to="/login">Login</Link>
            </Typography>
          </CardActions>
        </Box>
      </Card>
      <AlertMessage />
    </div>
  );
};

export default Signup;
