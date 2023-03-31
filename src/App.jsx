import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css"
import Auth from "./pages/auth/Auth";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";

function App() {
  const user = useSelector(state => state.authReducer.authData)

  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/auth" /> }/>
            <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;