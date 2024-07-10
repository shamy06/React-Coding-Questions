import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProtectedRoute from "./component/ProtectedRoute";
import Products from "./component/Products";
import Products from "./component/Products";

function App() {
  return (
    <Router>
        <Routes>
          <Route element={<ProtectedRoute/>}>
              <Route path='/' element={<Users/>} />
              <Route path='/products' element={<Products/>} />
          </Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </Router>
  );
}