import { Toaster } from "react-hot-toast";
// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./views/components/CommonComponents/Footer/Footer";
import Navbar from "./views/components/CommonComponents/Header/Navbar";
import HomeCategorySection from "./views/components/HomeComponents/HomeCategoryAndProductSection/HomeCategorySection/HomeCategorySection";
import HomeProductsSection from "./views/components/HomeComponents/HomeCategoryAndProductSection/HomeProductSection/HomeProductsSection";
import HomeContactSection from "./views/components/HomeComponents/HomeContactSection/HomeContactSection";
import HomeServiceSection from "./views/components/HomeComponents/HomeServiceSection/HomeServiceSection";
import DashboardHome from "./views/components/dashboard/home/DashboardHome";
import About from "./views/pages/About/About";
import Login from "./views/pages/Authentication/Login/Login";
import Signup from "./views/pages/Authentication/SignUP/Signup";
import Cart from "./views/pages/Cart/Cart";
import CheckOut from "./views/pages/CheckOut/CheckOut";
import CookiesPolicy from "./views/pages/CookiesPolicy/CookiesPolicy";
import Home from "./views/pages/Home/Home";
import Profile from "./views/pages/Profile/Profile";
import TermsAndConditions from "./views/pages/TermsAndConditions/TermsAndConditions";
import WishList from "./views/pages/WishList/WishList";
const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {/* Render specific components for the Dashboard layout if needed */}
      {children}
    </div>
  );
};
function App() {
  return (
    <div className="ecommercebg">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/signup"
            element={
              <MainLayout>
                <Signup />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/login"
            element={
              <MainLayout>
                <Login />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/services"
            element={
              <MainLayout>
                <HomeServiceSection />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/contact"
            element={
              <MainLayout>
                <HomeContactSection />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/termsAndConditions"
            element={
              <MainLayout>
                <TermsAndConditions />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/cookiesPolicy"
            element={
              <MainLayout>
                <CookiesPolicy />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/products"
            element={
              <MainLayout>
                <HomeCategorySection />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/category/:categoryId"
            element={
              <MainLayout>
                <HomeProductsSection />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/checkout"
            element={
              <MainLayout>
                <CheckOut />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/account"
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/cart"
            element={
              <MainLayout>
                <Cart />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/wishList"
            element={
              <MainLayout>
                <WishList />
              </MainLayout>
            }
            exact
          />
          <Route
            path="/dashboard/*"
            element={
              <DashboardLayout>
                <DashboardHome />
              </DashboardLayout>
            }
          />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
