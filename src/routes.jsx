import { createBrowserRouter } from "react-router-dom";

import Home from './Home';
import Booking from './Booking';
import Gallery from './components/Gallery';
import Login from './Login';
import Signin from './Signin';
import Aboutus from './Aboutus';
import Services from './Services';
import App from './App';
import Admindashboard from "./Adminportal/Admindashboard";
import ProductList from "./Adminportal/Products/ProductList";
import Addproduct from "./Adminportal/Products/Addproduct";
import BookingList from "./Adminportal/Bookings/BookingList";
import BookingDetails from "./Adminportal/Bookings/BookingDetails";
import SalesReport from './Adminportal/Reports/SalesReport';
import ProductsPage from "./Adminportal/Products/ProductsPage";

import Cart from './Cart';

const  router=createBrowserRouter(
    [     {
    path: "/",         
    element: <App />,   
    children: [
        { path:'/', element: <Home/>},
        {path:'/Booking', element: <Booking/> },
        {path:'/Gallery',element:<Gallery/>},
        {path:"/Aboutus", element : <Aboutus/>},
        {path:"/Services",element:<Services/>},
        {path:'/Login', element: <Login/>},
        {path:'/Signin', element: <Signin/>},
        {path:'/BookingDetails',element: <BookingDetails/>},
        {path: '/BookingList',element: <BookingList/>},
        {path: '/Addproduct',element:<Addproduct/>},
        {path:"/ProductsPage",element:<ProductsPage/>},
        {path: '/SalesReport',element:<SalesReport/>},
        {path:'/admin',element:<Admindashboard/>},
        { path: '/BookingDetails/:id', element: <BookingDetails/> },
       
        {path:'/Cart', element:<Cart/>},
      
       
    ]}]
)

export default router;