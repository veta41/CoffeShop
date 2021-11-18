
import { Route } from 'react-router';
// import axios from 'axios';
import {  Header } from './components';
import { Cart, Home } from './pages';






function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home  />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
