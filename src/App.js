import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RouterComponent from './RouterComponent/RouterComponent';
import Layout from './Component/inputComponent/Layout';

function App() {
  const location = window.location.pathname;
  const hideNavbar = location === '/login' || location === '/OTPComponent';
  return (
    <div className="App">
      <Layout hideNavbar={hideNavbar}>
      <RouterComponent/>
      </Layout>
    </div>
  );
}

export default App;
