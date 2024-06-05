import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RouterComponent from './RouterComponent/RouterComponent';
import Layout from './Component/inputComponent/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const location = window.location.pathname;
  const hideNavbar = location === '/login' || location === '/OTPComponent';
  return (
    <div className="App">
      <BrowserRouter>
      <Layout hideNavbar={hideNavbar}>
      <RouterComponent/>
      </Layout>
</BrowserRouter>
    </div>
  );
}

export default App;
