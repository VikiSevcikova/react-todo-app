import { Grid } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import AddButton from "./AddButton";
import User from "./User";
import UserModalForm from "./UserModalForm";

const Users = () => {
  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;
  const { users, filteredUsers } = userState;

  useEffect(() => {
    userDispatch({
      type: "SET_FILTERED_USERS",
    })
  }, [users]);

  return (
    <>
      {filteredUsers && filteredUsers.length !== 0 ? (
        <Grid container spacing={2}>
          {filteredUsers.map((u) => (
            <User key={u.id} user={u}/>
          ))}
        </Grid>
      ) : (
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <span>No User Added Yet</span>
        </Grid>
      )}
      <AddButton />
      <UserModalForm />
    </>
  );
};

export default Users;
