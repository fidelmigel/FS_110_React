import UseContextExample from './UseContextExample/UseContextExample';
import UseMemoExample from './useMemoExample';
import UseRefForwardRefExample from './UseRefForwardRefExample';
import UseRefRenderCountExample from './UseRefRenderCountExample';
import UseRefStoreValueExample from './UseRefStoreValueExample';

const App = () => {
  return (
    <div>
      <h2>Hooks</h2>
      <UseMemoExample />
      <UseRefRenderCountExample />
      <UseRefStoreValueExample />
      <UseRefForwardRefExample />
      <UseContextExample />
    </div>
  );
};
export default App;
