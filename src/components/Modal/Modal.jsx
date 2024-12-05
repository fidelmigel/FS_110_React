const Modal = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Це частина компонента, котра є у кожного екземпляра</p>

      {/* Унікальна частина, яка буде завжди різна */}

      <div>{props.children}</div>
    </div>
  );
};
export default Modal;
