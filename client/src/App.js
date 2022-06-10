import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar.jsx";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { Context } from "./context/Context";
import { 
  BrowserRouter as Router,
  Routes as Switch,
  Route 
} from "react-router-dom";

// "proxy": "http://localhost:5000/api/"

function App() {
  const { user } = useContext(Context);
  return (
    <>
    <Router>
      <TopBar />
      <Switch>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/post/:postId" element={<Single/>}></Route>
          <Route path="/register" element={user ? <Home /> : <Register />}>
          </Route>
          <Route path="/login" element={user ? <Home /> : <Login />}>
          </Route>
          <Route path="/write" element={user ? <Write /> : <Register />}>
          </Route>
          <Route path="/settings" element={user ? <Settings /> : <Register />}>
          </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;