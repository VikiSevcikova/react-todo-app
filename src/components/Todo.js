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
import { TodosContext } from "../context/TodosContext";
import { AppContext } from "../context/AppContext";

const Todo = ({ todo }) => {
  const appContext = useContext(AppContext);
  const { appDispatch } = appContext;

  const todosContext = useContext(TodosContext);
  const { todosState, todosDispatch } = todosContext;
  const { filteredTodos } = todosState;

  const [isEditable, setIsEditable] = useState(false);

  const [values, setValues] = useState({
    title: todo.title,
    description: todo.description,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleDelete = () => {
    todosDispatch({
      type: "DELETE_TODO",
      payload: todo.id,
    });
    appDispatch({
      type: "SHOW_ALERT",
      payload: "Task was successfully deleted",
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (values.titleError && values.descriptionError) return;
    if(filteredTodos.some(t=> t.title === values.title && t.id !== todo.id)) {
      appDispatch({
        type: "SHOW_ALERT",
        payload: "Title has to be unique",
      });
      return; 
    }
    todosDispatch({
      type: "UPDATE_TODO",
      payload: { id: todo.id, title: values.title, description: values.description },
    });
    appDispatch({
      type: "SHOW_ALERT",
      payload: "Task was successfully updated",
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
            <Typography sx={{ fontSize: 20, fontWeight:500 }} gutterBottom>
              {todo.title}
            </Typography>
            <Typography variant="body2">{todo.description}</Typography>
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
                id="title"
                type="text"
                label="Title"
                placeholder="Enter task title here"
                value={values.title}
                handleChange={handleChange}
              />
              <InputField
                id="description"
                type="text"
                label="Description"
                placeholder="Enter task description here"
                value={values.description}
                handleChange={handleChange}
                multiline={{isMultiline: true, rows: 4}}
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
                  disabled={values.titleError && values.descriptionError}
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

export default Todo;
