import { useContext } from 'react';
import { userContext } from '../App';

const ComponentC = ({ auto }) => {
  const context = useContext(userContext);
  return (
    <div className='target'>
      <h2>This is target component</h2>

      <h2>Auto: {auto}</h2>
      <h3>
        Model: {context.model} {context.engine}
      </h3>
    </div>
  );
};
export default ComponentC;
