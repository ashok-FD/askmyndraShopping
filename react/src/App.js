import React from 'react';
import './App.css';
import Header from './components/Navbar/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Profile/Register';
import Login from "./components/Profile/Login";
import Carousel from "./components/slider/Carousel";
import ProfilePage from './components/Profile/ProfilePage';
import Gallery from './components/Gallery/Gallery';
import Product from './components/products/Product';
import ProductDetail from './components/products/productDetail/ProductPage';
import { BrowserRouter as Router,Route ,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Carousel} />
      <Route exact path="/" component={Gallery} />
      <Route exact path="/mens" component={Product} />
      <Switch>
        <Route path="/mens/:code" component={ProductDetail} />
      </Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/" component={Footer} />
    </Router>
  );
}
export default App;
