import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
