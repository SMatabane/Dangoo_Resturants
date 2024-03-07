
import './App.css';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Tracking from "./pages/Tracking";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterForm from"./pages/Register";
import AddItems from "./items/AddItems";
import EditItem from "./items/EditItems";
import ViewItems from "./items/ViewItems";
import Management  from "./pages/management";
import Menus from "./pages/Menus";
import Items from './pages/Items';
import FoodItem from './pages/FoodItem';

import Cart  from"./pages/Cart";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/shop" exact element={<Shop/>} />
          <Route path="/management" exact element={<Management/>} />
          <Route path="/menus" exact element={<Menus/>} />
          <Route path="/track" exact element={<Tracking/>} />
          <Route exact path="/additems" element={<AddItems />} />
          <Route exact path="/edititems/:id" element={<EditItem />} />
          <Route exact path="/viewitems/:id" element={<ViewItems />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/items" exact element={<Items/>} />
          <Route path="/fodditem" exact element={<FoodItem/>} />

          <Route path="/register" exact element={<RegisterForm/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
