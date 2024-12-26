import ComponentB from './ComponentB';

const ComponentA = ({ auto }) => {
  return (
    <div className='first'>
      <h3>First Component</h3>
      <ComponentB auto={auto} />
    </div>
  );
};
export default ComponentA;
