import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import MoreWatches from './Pages/MoreWatches/MoreWatches';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AddProduct from './Pages/AddProduct/AddProduct';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Payment from './Pages/Payment/Payment';
import Booking from './Pages/Booking/Booking';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddReview from './Pages/Home/Reviews/AddReview/AddReview';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';


function App() {
  return (
    <div className="App">
      <AuthProvider>
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/morewatches'>
                <MoreWatches></MoreWatches>
              </Route>
              <PrivateRoute path='/booking/:bookingId'>
                <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path='/addproduct'>
                <AddProduct></AddProduct>
              </PrivateRoute>
              <PrivateRoute path='/makeadmin'>
                <MakeAdmin></MakeAdmin>
              </PrivateRoute>
              <PrivateRoute path='/payment'>
                <Payment></Payment>
              </PrivateRoute>
              <PrivateRoute path='/myorders'>
                <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute path='/addreview'>
                <AddReview></AddReview>
              </PrivateRoute>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>
              <Route path='*'>
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
