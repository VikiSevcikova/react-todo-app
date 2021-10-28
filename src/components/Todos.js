import * as React from 'react';
import { useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../Utils';
import Grid from '@mui/material/Grid';
import AddButton from './AddButton';
import { useEffect } from 'react';
import Todo from './Todo';
import TodoModalForm from './TodoModalForm';

const Todos = ({user}) => {
  const [todos, setTodos] = useState(getFromLocalStorage("todos"));
  const [filteredTodos, setFilteredTodos] = useState(null);

  const [open, setOpen] = useState(false);

  useEffect(()=>{
    if(user && todos) setFilteredTodos(todos.filter(t => t.userId === user.id));
    saveToLocalStorage("todos", todos);
  },[todos])

  return (
    <>
      {filteredTodos && filteredTodos.length !== 0 ? 
        <Grid
            container
            spacing={2}
          >
            {filteredTodos.map(todo => <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>)}
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
      <AddButton setOpen={setOpen}/>
      <TodoModalForm todos={todos} setTodos={setTodos} open={open} setOpen={setOpen}/>
    </>     
  );
};

export default Todos;
