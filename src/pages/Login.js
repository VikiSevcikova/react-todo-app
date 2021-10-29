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

import { useContext, useState } from "react";
import { Link, Typography } from "@mui/material";
import InputField from "../components/InputField";
import { Link as RouterLink, useHistory } from "react-router-dom";
import AlertMessage from "../components/AlertMessage";
import { UserContext } from "../context/UserContext";
import { AppContext } from "../context/AppContext";
import { useStyles } from "../style/Theme";

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const appContext = useContext(AppContext);
  const { appDispatch } = appContext;

  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;
  const { users } = userState;

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = users?.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (user) {
        userDispatch({
            type: "LOG_IN",
            payload: { email: values.email, password: values.password },
        }); 
      history.push("/");
    } else {
        appDispatch({
            type: "SHOW_ALERT",
            payload: "Invalid email or password"
        })
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
    <Box container className={classes.loginContainer} sx={{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", height:"100vh"}}>
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader
          sx={{textAlign:"center"}}
          className={classes.cardHeader}
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
              <Link component={RouterLink} to="/signup">Signup</Link>
            </Typography>
          </CardActions>
        </Box>
      </Card>
      <AlertMessage />
    </Box>
  );
};

export default Login;
