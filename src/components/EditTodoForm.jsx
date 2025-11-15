import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const EditTodoForm = ({ editTodo, task }) => {
  // Texto y fecha iniciales desde la tarea
  const [value, setValue] = useState(task.task || "");
  const [date, setDate] = useState(task.dueDate ? new Date(task.dueDate) : null);

  // Ref correcto para enfocar el input de texto
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Si cambian las props de task, sincroniza los estados locales
  useEffect(() => {
    setValue(task.task || "");
    setDate(task.dueDate ? new Date(task.dueDate) : null);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    // ✅ pasa texto y fecha al hook
    editTodo(task.id, trimmed, date);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Actualizar tarea"
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
      />

      <DatePicker
        selected={date}
        onChange={(d) => setDate(d)}
        placeholderText="Fecha de vencimiento"
        dateFormat="dd/MM/yyyy"
        className="todo-input"
        isClearable
      />

      <button type="submit" className="todo-btn">
        Actualizar
      </button>
    </form>
  );
};
