import s from './TodoList.module.css';
export const TodoItem = ({ id, completed, todo, onDeleteTodo }) => {
  return (
    <li className={s.item}>
      <input type='checkbox' />
      <span>{todo}</span>
      <button onClick={() => onDeleteTodo(id)} className='btn border'>
        Delete
      </button>
    </li>
  );
};
