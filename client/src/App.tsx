import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import BlogCreatePage from './pages/BlogCreatePage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
import BlogListPage from './pages/BlogListPage';
import BlogDetailsPage from "./pages/BlogDetailsPage";
import CreateBlogPage from "./pages/CreateBlogPage";  //for the create blog page
import EditBlogPage from './pages/EditBlogPage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
   <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
       <Route path="/new" element={<PrivateRoute><BlogCreatePage /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/blogs" element={<BlogListPage />} />
     <Route path="/blogs/:id" element={<BlogDetailsPage />} />
   <Route path="/blogs/create" element={<CreateBlogPage />} /> 
  <Route path="/blogs/:id/edit" element={<EditBlogPage />} />
   {/* <Route path="/blogs/:id/edit" element={<EditBlogPage />} /> */}

      </Routes>
    </Router>
  );
};

export default App;
