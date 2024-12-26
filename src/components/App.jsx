import Header from './Header/Header';
import UseContextExample from './UseContextExample/UseContextExample';
import UseMemoExample from './useMemoExample';
import UseRefForwardRefExample from './UseRefForwardRefExample';
import UseRefRenderCountExample from './UseRefRenderCountExample';
import UseRefStoreValueExample from './UseRefStoreValueExample';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <UseMemoExample />
        {/* <UseRefRenderCountExample /> */}
        {/* <UseRefStoreValueExample /> */}
        {/* <UseRefForwardRefExample /> */}
        {/* <UseContextExample /> */}
      </main>
    </div>
  );
};
export default App;
