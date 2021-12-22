import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Chats } from "./components/Chats";
import { Login } from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";




function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/chats" element={<Chats />} />
            <Route exact path="/" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
