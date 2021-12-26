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
import Register from './Pages/Register/Register';
import OrderDetails from './Pages/OrderDetails/OrderDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import OrderGlassDetails from './Pages/OrderGlassDetails/OrderGlassDetails';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import OrderNewProduct from './Pages/OrderNewProduct/OrderNewProduct';
import OrderProductDetails from './Pages/OrderProductDetails/OrderProductDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <CustomNav></CustomNav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="explore" element={<Explore></Explore>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="dashboard" element={<Dashboard></Dashboard>}>
            <Route path="" element={<MyOrders></MyOrders>}></Route>
            <Route path="payment" element={<Payment></Payment>}></Route>
            <Route path="review" element={<Review></Review>}></Route>
            <Route path="addProduct" element={<AdminRoute><AddProduct></AddProduct></AdminRoute>}></Route>
            <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
            <Route path="allOrders" element={<AdminRoute><ManageAllOrders></ManageAllOrders></AdminRoute>}></Route>
            <Route path="manageProducts" element={<AdminRoute><ManageProducts></ManageProducts></AdminRoute>}></Route>
            <Route path="makeAdmin" element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}></Route>
          </Route>
          <Route path="logIn" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="order/:id" element={<PrivateRoute><OrderProduct></OrderProduct></PrivateRoute>}></Route>
          <Route path="orderGlass/:id" element={<PrivateRoute><OrderGlass></OrderGlass></PrivateRoute>}></Route>
          <Route path="orderNewProduct/:id" element={<PrivateRoute><OrderNewProduct></OrderNewProduct></PrivateRoute>}></Route>
          <Route path="orderDetails/:id" element={<PrivateRoute><OrderDetails></OrderDetails></PrivateRoute>}></Route>
          <Route path="orderGlassDetails/:id" element={<PrivateRoute><OrderGlassDetails></OrderGlassDetails></PrivateRoute>}></Route>
          <Route path="orderProductDetails/:id" element={<PrivateRoute><OrderProductDetails></OrderProductDetails></PrivateRoute>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      <Footer></Footer>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
