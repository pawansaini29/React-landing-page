import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({duration:1000});



function App() {
  return (
    <div className="App">
    <Home/>      
    </div>
  );
}

export default App;
