import { useId } from 'react';

const CustomInput = ({ idx }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>TEXT INPUT LABEL</label>
      <input type='text' placeholder={`Ingredient #${idx}`} id={id} />
    </div>
  );
};
export default CustomInput;
