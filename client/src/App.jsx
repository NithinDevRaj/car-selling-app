import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ListView from "./pages/ListViewUser";
import Profile from "./pages/Profile";
import Table from "./components/admin/Table";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import Dashboard from "./pages/admin/Dashboard";
import VerifyListing from "./components/admin/VerifyListing";
import Footer from "./components/Footer";

const App = () => {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Dashboard />}>
          {/* <Route path="*" element={<Navigate to="/admin/user" />} /> */}
          <Route path="/admin/user" element={<Table />} />
          <Route path="/admin/listing" element={<VerifyListing />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listing/:listingId" element={<Listing />} />

        <Route element={<PrivateRoute />}>
          <Route path="/properties" element={<ListView />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default App;
