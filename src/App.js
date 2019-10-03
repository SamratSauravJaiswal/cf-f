// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// import Navbar from './components/Navbar';
// import Offers from './components/Offers';
// import Footer from './components/Footer';
// import CreateYourPrint from './components/CreateYourPrint';

// import CanvasPrint from './pages/canvasPrint';
// import uploadImage from './pages/uploadImage';
// import Cart from './pages/Cart';
// import Login from './pages/Login';
// import create from './pages/create';
// import register from './pages/register';
// import checkout from './pages/checkout';
// import summary from './pages/summary';
// import PaymentComplete from './pages/PaymentComplete';

// import About from './pages/about';
// import Home from './pages/home';
// import calatog from './pages/calatog';
// import category from './pages/category';
// import CartLayout from './pages/cartLayout';

// import ThemeProvider, { ThemeContext } from './themeContext';

// function App() {
//   return (
//     <Router>
//       <Offers />
//       <Navbar />
//       <Route exact path='/' component={Home} />
//       <Route exact path='/catalog' component={calatog} />
//       <Route exact path='/category' component={category} />

//       <div className='container'>
//         <Route exact path='/about' component={About} />
//         <ThemeProvider>
//           <Route exact path='/checkout' component={checkout} />
//           <Route exact path='/CreateYourPrint' component={CreateYourPrint} />
//           <Route exact path='/CanvasPrint' component={CanvasPrint} />
//           <Route exact path='/Cart' component={Cart} />
//           <Route exact path='/uploadImage' component={uploadImage} />
//           <Route exact path='/CartLayout' component={CartLayout} />
//         </ThemeProvider>

//         <Route exact path='/Login' component={Login} />
//         <Route exact path='/create' component={create} />
//         <Route exact path='/register' component={register} />
//         <Route exact path='/summary' component={summary} />
//         <Route exact path='/payment-complete' component={PaymentComplete} />
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Footer from './components/Footer';
import CreateYourPrint from './components/CreateYourPrint';

import CanvasPrint from './pages/canvasPrint';
import uploadImage from './pages/uploadImage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import create from './pages/create';
import register from './pages/register';
import checkout from './pages/checkout';
import summary from './pages/summary';
import PaymentComplete from './pages/PaymentComplete';

import About from './pages/about';
import Home from './pages/home';
import singleCanvasPrints from './pages/singleCanvasPrints';
import largeCanvasPrints from './pages/largeCanvasPrints';
import acrylicPremiumPrints from './pages/acrylicPremiumPrints';
import floatingFrameCanvas from './pages/floatingFrameCanvas';
import canvasCollages from './pages/canvasCollages';
import canvasSplitImage from './pages/canvasSplitImage';
import canvasWallDisplays from './pages/canvasWallDisplays';
import category from './pages/category';

import ThemeProvider, { ThemeContext } from './themeContext';

function App() {
  return (
    <Router>
      <Offers />
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/catalog' component={singleCanvasPrints} />
      <Route exact path='/category' component={category} />

      <div className='container'>
        <Route exact path='/about' component={About} />
        <ThemeProvider>
          <Route exact path='/CreateYourPrint' component={CreateYourPrint} />
          <Route exact path='/singleCanvasPrints' component={singleCanvasPrints} />
          <Route exact path='/largeCanvasPrints' component={largeCanvasPrints} />
          <Route exact path='/acrylicPremiumPrints' component={acrylicPremiumPrints} />
          <Route exact path='/floatingFrameCanvas' component={floatingFrameCanvas} />
          <Route exact path='/canvasCollages' component={canvasCollages} />
          <Route exact path='/canvasSplitImage' component={canvasSplitImage} />
          <Route exact path='/canvasWallDisplays' component={canvasWallDisplays} />
          <Route exact path='/CanvasPrint' component={CanvasPrint} />
          <Route exact path='/Cart' component={Cart} />
          <Route exact path='/uploadImage' component={uploadImage} />
          <Route exact path='/checkout' component={checkout} />
        </ThemeProvider>

        <Route exact path='/Login' component={Login} />
        <Route exact path='/create' component={create} />
        <Route exact path='/register' component={register} />
        <Route exact path='/summary' component={summary} />
        <Route exact path='/payment-complete' component={PaymentComplete} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
