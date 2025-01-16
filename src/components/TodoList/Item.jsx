import s from './TodoList.module.css';
const Item = ({ completed, todo, id }) => {
  return (
    <li className={s.item}>
      <input type='checkbox' checked={completed} />
      <p>{todo}</p>
      <button>Delete</button>
    </li>
  );
};
export default Item;
