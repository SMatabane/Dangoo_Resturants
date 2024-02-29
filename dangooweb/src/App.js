
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
import Management  from './pages/management';
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" exact element={<Shop/>} />
          <Route path="/management" exact element={<Management/>} />
          <Route path="/track" exact element={<Tracking/>} />
          <Route exact path="/additems" element={<AddItems />} />
          <Route exact path="/edititems/:id" element={<EditItem />} />
          <Route exact path="/viewitems/:id" element={<ViewItems />} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/register" exact element={<RegisterForm/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
