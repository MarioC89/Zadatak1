import './App.css';
import Prva from "./components/Prva";
import Treca from "./components/Treca";

function App() {
  return (
    <div className="App">
      <Prva title="neki props"/>
      <Treca />
      <Prva title=" i opet prva komponenta"/>

    </div>
  );
}

export default App;
