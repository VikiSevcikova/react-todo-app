import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../Utils";
import AddButton from "./AddButton";
import User from "./User";
import UserModalForm from "./UserModalForm";

const Users = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState(getFromLocalStorage("users"));
  const [filteredUsers, setFilteredUsers] = useState(null);

  useEffect(() => {
    if (user) setFilteredUsers(users.filter((u) => u.id !== user.id));
    saveToLocalStorage("users", users);
  }, [users]);

  return (
    <>
      {filteredUsers && filteredUsers.length !== 0 ? (
        <Grid container spacing={2}>
          {filteredUsers.map((u) => (
            <User key={u.id} user={u} users={users} setUsers={setUsers} />
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
      <AddButton setOpen={setOpen} open={open} />
      <UserModalForm
        users={users}
        setUsers={setUsers}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default Users;
