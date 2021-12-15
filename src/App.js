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
import OrderProduct from './Pages/OrderProduct/OrderProduct';
import About from './Pages/About/About';

import Payment from './Pages/Dashboard/Payment/Payment';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Review from './Pages/Dashboard/Review/Review';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import OrderGlass from './Pages/OrderGlass/OrderGlass';

function App() {
  return (
    <div className="App">
      <Router>
      <CustomNav></CustomNav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="explore" element={<Explore></Explore>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="dashboard" element={<Dashboard></Dashboard>}>
            <Route path="payment" element={<Payment></Payment>}></Route>
            <Route path="review" element={<Review></Review>}></Route>
            <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
            <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
            <Route path="allOrders" element={<ManageAllOrders></ManageAllOrders>}></Route>
          </Route>
          <Route path="logIn" element={<Login></Login>}></Route>
          <Route path="order/:id" element={<OrderProduct></OrderProduct>}></Route>
          <Route path="orderGlass/:id" element={<OrderGlass></OrderGlass>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
