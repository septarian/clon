import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Menu />
      <Header />
      <Home />
      <Footer />
  </div>
  );
}

export default App;
