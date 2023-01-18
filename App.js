
import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import UserPost from './components/UserPost'
import EditPost from './components/EditPost'
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/CreatePost' element={<CreatePost />} />
          <Route exact path='/UserPost' element={<UserPost />} />
          <Route exact path='/EditPost' element={<EditPost />} />
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/Login' element={<Login />} />
          





        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
