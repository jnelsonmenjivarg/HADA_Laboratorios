import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  // ➕ Agregar nueva tarea con fecha
  const addTodo = (task, dueDate) => {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: task.trim(),
        completed: false,
        isEditing: false,
        dueDate: dueDate || new Date(), // Si no se selecciona, usar hoy
      },
    ]);
  };


  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const editTodo = (id, newValue, newDate) => {
    if (newValue === undefined) {
      // Modo edición ON/OFF
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? { ...todo, isEditing: !todo.isEditing }
            : todo
        )
      );
    } else {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? { 
                ...todo, 
                task: newValue.trim(), 
                dueDate: newDate || todo.dueDate, 
                isEditing: false 
              }
            : todo
        )
      );
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, toggleComplete, editTodo, deleteTodo };
};
