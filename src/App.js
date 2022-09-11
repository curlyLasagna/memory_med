import './App.css';
import PatientPicture from './components/PatientPicture'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <PatientPicture />
      </header>
    </div>
  );
}

export default App;
