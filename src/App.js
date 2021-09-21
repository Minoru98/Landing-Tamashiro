//import './assets/logo192.png';
import './App.css';
//Components
import NavBar from './components/NavBar/NavBar';
import ListProducts from './components/ListProducts/ListProducts';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListProducts/>
    </div>
  );
}

export default App;