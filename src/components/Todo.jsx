import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo-row">
      {/* Columna 1: Nombre */}
      <div
        className={`todo-cell todo-name ${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </div>

      {/* Columna 2: Fecha */}
      <div className="todo-cell todo-date">
        {task.dueDate
          ? new Date(task.dueDate).toLocaleDateString("es-ES")
          : "Sin fecha"}
      </div>

      {/* Columna 3: Editar */}
      <div className="todo-cell todo-action">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="edit-icon"
          title="Editar tarea"
          onClick={() => editTodo(task.id)}
        />
      </div>

      {/* Columna 4: Eliminar */}
      <div className="todo-cell todo-action">
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
