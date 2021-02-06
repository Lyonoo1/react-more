import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter,Link,Route, Router} from 'react-router-dom'
import Index from './pages/Index'
import Home from './pages/Home'
function App() {
  return (
    <div>

      
        <BrowserRouter>
        <div> <Link to='/home'>Home</Link></div>
        <div><Link to='/index'>index</Link></div>
          <Route component={Home} exact path = '/home'/>
          <Route component={Index}  path = '/index'/>
          </BrowserRouter>
    </div>
  );
}

export default App;
