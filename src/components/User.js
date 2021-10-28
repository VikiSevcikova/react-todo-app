import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputField from "./InputField";
import { Button } from "@mui/material";
import { UserContext } from "../context/UserContext";
import { AppContext } from "../context/AppContext";

const User = ({user}) => {
  const [isEditable, setIsEditable] = useState(false);

  const appContext = useContext(AppContext);
  const { appDispatch } = appContext;

  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;
  const { users } = userState;

  const [values, setValues] = useState({
    name: user.name,
    email: user.email,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleDelete = () => {
    userDispatch({
      type: "DELETE_USER",
      payload: user.id
    });
    appDispatch({
      type: "SHOW_ALERT",
      payload: "User was successfully deleted"
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (values.nameError && values.emailError) return;
    if(users.some(u => u.email === values.email && u.id !== user.id)) {
      appDispatch({
        type: "SHOW_ALERT",
        payload: "User with submitted email already exists"
      });
      return;
    }
    userDispatch({
      type: "UPDATE_USER",
      payload: {id: user.id, name: values.name, email: values.email}
    })
    appDispatch({
      type: "SHOW_ALERT",
      payload: "User was successfully updated"
    });
    setIsEditable(false);
  };

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card sx={{ minHeight: 250 }}>
        {!isEditable ? (
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }} gap={1}>
              <Button
                onClick={() => setIsEditable(true)}
                size="small"
                color="warning"
                variant="contained"
                aria-label="edit"
              >
                <EditIcon />
              </Button>
              <Button
                onClick={handleDelete}
                size="small"
                color="error"
                variant="contained"
                aria-label="delete"
              >
                <DeleteIcon />
              </Button>
            </Box>
            <Typography sx={{ fontSize: 20, fontWeight:700}} gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body2">{user.email}</Typography>
          </CardContent>
        ) : (
          <CardContent>
            <Box
              onSubmit={handleUpdate}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
              gap={1}
              component="form"
            >
              <InputField
                id="name"
                type="text"
                label="Name"
                placeholder="Enter user's name here"
                value={values.name}
                handleChange={handleChange}
              />
              <InputField
                id="email"
                type="email"
                label="Email"
                placeholder="Enter user's email here"
                value={values.email}
                handleChange={handleChange}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <Button
                  type="submit"
                  sx={{ marginBottom: "8px", alignItems: "center" }}
                  size="medium"
                  variant="contained"
                  color="secondary"
                >
                  Update
                </Button>
                <Button
                  onClick={() => setIsEditable(false)}
                  sx={{ marginBottom: "8px", alignItems: "center" }}
                  size="medium"
                  variant="contained"
                  color="error"
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </CardContent>
        )}
      </Card>
    </Grid>
  );
};

export default User;
