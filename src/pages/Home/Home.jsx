import Modal from '../../components/Modal/Modal';
import { useToggle } from '../../hooks/useToggle';

const Home = () => {
  const { isOpen, openModal, closeModal } = useToggle();
  const { isOpen: isOpenEditModal, openModal: openEditModal, closeModal: closeEditModal } = useToggle();

  return (
    <div>
      Home
      <button onClick={openEditModal}>Open edit modal</button>
      <button onClick={openModal}>Open</button>
      {isOpen && <Modal onClose={closeModal} />}
      {isOpenEditModal && <Modal onClose={closeEditModal} title='Edit modal' />}
    </div>
  );
};
export default Home;
