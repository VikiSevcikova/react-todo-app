import {useContext, useEffect} from "react";
import Box from "@mui/material/Box";
import InputField from "./InputField";
import { useState } from "react";
import { Button } from "@mui/material";
import { getFromLocalStorage } from "../Utils";
import ModalForm from "./ModalForm";
import AlertMessage from "./AlertMessage";
import { TodosContext } from "../context/TodosContext";
import { UserContext } from "../context/UserContext";
import { AppContext } from "../context/AppContext";

const TodoModalForm = () => {
  const appContext = useContext(AppContext);
  const { appDispatch } = appContext;

  const userContext = useContext(UserContext);
  const { userState } = userContext;
  const { loggedInUser } = userState;

  const todosContext = useContext(TodosContext);
  const { todosState, todosDispatch } = todosContext;
  const { filteredTodos } = todosState;

  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  useEffect(()=>{
    todosDispatch({
      type: "SET_FILTERED_TODOS",
      payload: loggedInUser.id
    })
  },[]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleModalClose = () => {
    appDispatch({
      type: "CLOSE_MODAL"
    })
    setValues({
      title: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(filteredTodos.some(t=> t.title === values.title)){
      appDispatch({
        type: "SHOW_ALERT",
        payload: "Title has to be unique"
      })
      return; 
    } 
    let newTodo = {
      id: Math.random(),
      title: values.title,
      description: values.description,
      userId: loggedInUser.id,
    };
    todosDispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
    handleModalClose();
    appDispatch({
      type: "SHOW_ALERT",
      payload: "Task was successfully added"
    })
  };

  return (
    <>
    <ModalForm title={'Task'}>
      <Box component="form" onSubmit={handleSubmit} sx={{display:"flex", flexDirection:"column"}}>
        <InputField
          id="title"
          type="text"
          label="Title"
          placeholder="Enter task title here"
          value={values.title}
          handleChange={handleChange}
          error={values.titleError}
        />
        <InputField
          id="description"
          type="text"
          label="Description"
          placeholder="Enter task description here"
          value={values.description}
          handleChange={handleChange}
          error={values.descriptionError}
          multiline={{isMultiline: true, rows: 4}}
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

export default TodoModalForm;
