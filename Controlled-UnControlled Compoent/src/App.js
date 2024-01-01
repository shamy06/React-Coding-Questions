import './App.css';
import ControlledForm from './Component/ClassControlledForm';
import UnControlledForm from './Component/ClassUnControlledForm';
import ControlledCheckbox from './Component/ControlledCheckbox';
import UncontrolledCheckbox from './Component/UncontrolledCheckbox';

function App() {
  return (
    <>
    <ControlledForm/>
    <UnControlledForm/>
    <ControlledCheckbox/>
    <UncontrolledCheckbox/>
    </>
  );
}

export default App;