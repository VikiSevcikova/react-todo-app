import React, { useEffect, useReducer } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../Utils";

export const UserContext = React.createContext();

const admin = {
  id: Math.random(),
  name: "Admin",
  email: "admin@gmail.com",
  isAdmin: "true",
  password: "123",
};

const getUsers = () => {
  const users = getFromLocalStorage("users");
  if (!users) {
    return [admin];
  } else if (!users.some((u) => u.email === admin.email && u.isAdmin)) {
    return [...users, admin];
  } else {
    return users;
  }
};

const initialState = {
  users: getUsers(),
  loggedInUser: getFromLocalStorage("loggedInUser"),
  filteredUsers: null
};

const reducer = (userState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...userState,
        users: userState.users
          ? [...userState.users, action.payload]
          : [action.payload],
        // loggedInUser: action.payload,
      };
    case "LOG_IN":
      return {
        ...userState,
        loggedInUser: userState.users.find((u) => {
          return (
            u.email === action.payload.email &&
            u.password === action.payload.password
          );
        }),
      };
    case "LOG_OUT":
      localStorage.removeItem("loggedInUser");
      return {
        ...userState,
        loggedInUser: null,
      };
    case "ADD_USER":
      return {
        ...userState,
        users: userState.users ? [...userState.users, action.payload] : [action.payload],
      };
    case "UPDATE_TODO":
      return {
        ...userState,
        users: userState.users.map(u => {
            if(u.id === action.payload.id){
                return {
                    ...u,
                    name: action.payload.name,
                    email: action.payload.email
                }
            }
            return u;
        })
      };
    case "DELETE_USER":
      return {
        ...userState,
        users: userState.users.filter(u => u.id !== action.payload),
      };
    case "SET_FILTERED_USERS":
    return {
        ...userState,
        filteredUsers: userState.users.filter(u => u.id !== userState.loggedInUser.id),
    };
    default:
      return userState;
  }
};

export const UserProvider = (props) => {
  const [userState, userDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
      saveToLocalStorage('users', userState.users)
  }, [userState.users]);

  useEffect(() => {
    saveToLocalStorage('loggedInUser', userState.loggedInUser)
  }, [userState.loggedInUser]);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;
