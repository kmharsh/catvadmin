import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RouterComponent from './RouterComponent/RouterComponent';
import Layout from './Component/inputComponent/Layout';
import { BrowserRouter, useLocation } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  const hideNavbar = location.pathname === '/login' || location.pathname === '/OTPComponent';

  return (
    <Layout hideNavbar={hideNavbar}>
      <RouterComponent />
    </Layout>
  );
}

export default App;
