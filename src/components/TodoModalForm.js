import * as React from "react";
import Box from "@mui/material/Box";
import InputField from "./InputField";
import { useState } from "react";
import { Button } from "@mui/material";
import { getFromLocalStorage } from "../Utils";
import ModalForm from "./ModalForm";
import AlertMessage from "./AlertMessage";

const TodoModalForm = ({ todos, setTodos, open, setOpen }) => {
  const [alert, setAlert] = useState({state: false, message: ""});
  const [values, setValues] = useState({
    title: "",
    description: "",
    titleError: null,
    descriptionError: null,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleModalClose = () => {
    setOpen(false);
    setValues({
      title: "",
      description: "",
      titleError: null,
      descriptionError: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = getFromLocalStorage("loggedInUser");
    let newTodo = {
      id: Math.random(),
      title: values.title,
      description: values.description,
      userId: user.id,
    };
    if (todos && todos.length > 0) {
      setTodos([...todos, newTodo]);
    } else {
      setTodos([newTodo]);
    }
    handleModalClose();
    setAlert({state:true, message:"Task sucessfully added."});
  };

  return (
    <>
    <ModalForm title={'Task'} open={open} handleModalClose={handleModalClose}>
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
    <AlertMessage alert={alert} setAlert={setAlert} />
    </>
  );
};

export default TodoModalForm;
