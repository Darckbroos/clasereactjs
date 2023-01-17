import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingf';
import TaskListComponent from './components/container/task_listo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* COmponetne propio greeting.jsx*/}
        {/*<Greeting name="ctm"></Greeting>*/}
        {/* Componente de ejemplo funcional*/}
       {/* <Greetingf name=" que sucede"></Greetingf>*/}
       {/* Componente de listado de tareas*/}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
