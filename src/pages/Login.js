import styles from "../style/style.module.css";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useState } from "react";
import { Typography } from "@mui/material";
import InputField from "../components/InputField";
import { Link, useHistory } from "react-router-dom";
import AlertMessage from "../components/AlertMessage";

const Login = ({ users }) => {
  const history = useHistory();
  const [alert, setAlert] = useState({state: false, message: ""});

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    emailError: null,
    passwordError: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = users?.find(
      (u) => u.email === values.email && u.password === values.password
    );
    console.log(user);
    if (user) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        })
      );
      history.push("/");
    } else {
      setAlert({...alert, state:true, message:"Invalid email or password."})
    }
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
    <div className={styles.loginContainer}>
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader
          className={styles.cardHeader}
          titleTypographyProps={{fontWeight:700, marginBottom: 2, variant:"h6" }}
          title="Hey, Welcome. Login to access Task Management"
        />
        <Box component="form" onSubmit={handleSubmit}>
          <CardContent>
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
              Login
            </Button>
            <Typography>
              Not a member yet?
              <Link to="/signup">Sign up</Link>
            </Typography>
          </CardActions>
        </Box>
      </Card>
      <AlertMessage alert={alert} setAlert={setAlert} />
    </div>
  );
};

export default Login;
