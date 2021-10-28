import { useState, useContext } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../Utils';
import Grid from '@mui/material/Grid';
import AddButton from './AddButton';
import { useEffect } from 'react';
import Todo from './Todo';
import TodoModalForm from './TodoModalForm';
import { TodosContext } from '../context/TodosContext';
import { UserContext } from '../context/UserContext';
import { AppContext } from '../context/AppContext';

const Todos = () => {
  const userContext = useContext(UserContext);
  const { userState } = userContext;
  const { loggedInUser } = userState;

  const todosContext = useContext(TodosContext);
  const { todosState, todosDispatch } = todosContext;
  const { todos, filteredTodos } = todosState;

  useEffect(()=>{
    todosDispatch({
      type: "SET_FILTERED_TODOS",
      payload: loggedInUser.id
    })
  },[todos])

  return (
    <>
      {filteredTodos && filteredTodos.length !== 0 ? 
        <Grid
            container
            spacing={2}
          >
            {filteredTodos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </Grid>
        :
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          height= "100%"
        >
          <span>No Tasks Added Yet</span>
      </Grid>
      }
      <AddButton />
      <TodoModalForm />
    </>     
  );
};

export default Todos;
