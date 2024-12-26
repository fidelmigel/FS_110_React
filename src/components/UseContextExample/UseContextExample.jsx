import ComponentA from './ComponentA';

const UseContextExample = ({ auto }) => {
  return (
    <div className='parent'>
      <h2>useContext Example</h2>
      <ComponentA auto={auto} />
    </div>
  );
};
export default UseContextExample;
