import './App.css';
import PatientManagement from './component/PatientManagement/PatientManagement';
import ReducerCount from './component/ReducerCount/ReducerCount';

function App() {
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
