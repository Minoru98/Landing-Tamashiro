//import './assets/logo192.png';
import './App.css';
//Components
import ListProducts from './components/ListProducts/ListProducts';
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <CartWidget/>
      <ListProducts></ListProducts>  
      <ItemCount></ItemCount> 

    </div>
  );
}

export default App;
