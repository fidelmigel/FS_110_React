import { useEffect, useState } from 'react';
import todosData from './../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';

export const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem('todos'));
    if (savedData?.length) {
      return savedData;
    }
    return [];
  });
  // const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) ?? []);
  const [newValue, setNewValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  const addNewTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      todo: newValue,
      completed: false,
    };
    setTodos(prev => [...prev, newTodo]);
  };

  return (
    <div>
      <div className='flex'>
        <input value={newValue} onChange={e => setNewValue(e.target.value)} className={s.input} />
        <button className='btn border' onClick={addNewTodo}>
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos.map(item => (
          <TodoItem key={item.id} {...item} onDeleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};
