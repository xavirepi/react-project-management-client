import logo from './logo.svg';
import './App.css';
import AddProject from './components/projects/AddProject';
import ProjectList from './components/projects/ProjectList';

const App = () => {
  return (
    <div className="App">
      <AddProject />
      <ProjectList />
    </div>
  );
}

export default App;
