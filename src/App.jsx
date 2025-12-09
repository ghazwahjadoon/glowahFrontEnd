import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ProductProvider } from "./Adminportal/Products/productContext.jsx";
// Load your Stripe publishable key
const stripePromise = loadStripe("pk_test_51SWd0wH43nwKxiso63OMYCXF3ail1VRWTi4K4Xv07Fcn4hBUvDaQOKO7asRtVBlMCVXqTgTs9UVVPVycmhN1x1N400qAHOx6oI");

function App() {
  return (
    <>
      <ProductProvider>
      <Navbar />
      <div className="container-fluid my-0 mz-0 p-0">
        <Elements stripe={stripePromise}>
          <Outlet />
        </Elements>
      </div>
      <Footer />
    </ProductProvider>
    </>
  );
}

export default App;
