import './App.css';
import Home from './Pages/Home/Home/Home';
import CustomNav from './Pages/Shared/CustomNav/CustomNav';
import Footer from './Pages/Shared/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Explore from './Pages/Explore/Explore/Explore';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
      <CustomNav></CustomNav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/explore" element={<Explore></Explore>}></Route>
          <Route path="/about" element={<Home></Home>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/logIn" element={<Login></Login>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
