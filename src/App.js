import './categories.styles.scss'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/routes/Home';
import Navigation from './components/routes/navigation/Navigation';
import Authentication from './components/routes/authentication/Authentication';
import Shop from './components/routes/shop/Shop';
import Checkout from './components/routes/checkOut/Checkout';
import { checkUserSession } from './store/user/user.action';
const App = ()=> {
  const dispatch = useDispatch();
  useEffect(()=>{
   
    dispatch(checkUserSession())
},[dispatch])
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' Component={Navigation} >
            <Route index Component={Home} />
            <Route path='shop/*' Component={Shop} />
            <Route path='auth' Component={Authentication} />
            <Route path='checkout' Component={Checkout} /> 
          </Route>
        </Routes>
      </div>
    </Router>   
  );
}

export default App;
