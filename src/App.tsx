import './App.css';
import HeroMessage from './components/HeroMessage/HeroMessage';
import Phone from './components/Phone/Phone';
import Shape from './components/Shape/Shape'

function App() {
  return (
    <div className="App">
      <Shape />
      <Phone />   
      <HeroMessage />   
    </div>
  );
}

export default App;
