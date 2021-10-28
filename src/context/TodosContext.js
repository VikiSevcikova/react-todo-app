import React, { useEffect, useReducer } from "react";
import { getFromLocalStorage } from "../Utils";

export const TodosContext = React.createContext();

const initialState = {
  todos: getFromLocalStorage("todos"),
  filteredTodos: null
};

const reducer = (todosState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...todosState,
        todos: todosState.todos ? [...todosState.todos, action.payload] : [action.payload],
      };
    case "UPDATE_TODO":
      return {
        ...todosState,
        todos: todosState.todos.map(t => {
            if(t.id === action.payload.id){
                return {
                    ...t,
                    title: action.payload.title,
                    description: action.payload.description
                }
            }
            return t;
        })
      };
    case "DELETE_TODO":
      return {
        ...todosState,
        todos: todosState.todos.filter(t => t.id !== action.payload),
      };
    case "SET_FILTERED_TODOS":
    return {
        ...todosState,
        filteredTodos: todosState.todos ? todosState.todos.filter(t => t.userId === action.payload) : [],
    };
    default:
      return todosState;
  }
};

export const TodosProvider = (props) => {
  const [todosState, todosDispatch] = useReducer(reducer, initialState);

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todosState.todos));
  }, [todosState.todos]);

  return (
    <TodosContext.Provider value={{ todosState, todosDispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
};

export const TodosConsumer = TodosContext.Consumer;
