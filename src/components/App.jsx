import { useState } from 'react';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import Modal from './Modal/Modal';
import { TodoList } from './TodoList/TodoList';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <TodoList />
      <input />
      <button onClick={openModal}>Open modal</button>
      {isOpen && (
        <Modal title='Modal' onClose={closeModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, porro quod ipsum laboriosam architecto quam in, labore deserunt natus sapiente
          ducimus modi aut magni dicta. Necessitatibus placeat velit laudantium maiores.
        </Modal>
      )}
    </div>
  );
};
export default App;
