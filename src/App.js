import './App.css';
import Home from './Pages/Home/Home/Home';
import CustomNav from './Pages/Shared/CustomNav/CustomNav';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <CustomNav></CustomNav>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
