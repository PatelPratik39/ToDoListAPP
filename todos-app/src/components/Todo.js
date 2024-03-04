import styles from "../style.module.css";

const Todo = ({ todoItem, todoList, setTodoList }) => {
  const deleteTodo = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
    // todoList.filtr((item) => item.id !== todoItem.id);
  };
  return (
    <div>
      <div className={styles.todoitem}>
        <h3 className={styles.todoname}>{todoItem.name}</h3>
        <button className={styles.deleteButton} onClick={deleteTodo}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Todo;
