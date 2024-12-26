import ComponentC from './ComponentC';

const ComponentB = ({ auto }) => {
  return (
    <div className='second'>
      <h3>Second Component</h3>
      <ComponentC auto={auto} />
    </div>
  );
};
export default ComponentB;
