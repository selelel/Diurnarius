import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "./pages/createBlogPage";
import Home from "./pages/homePage";
import Profile from "./components/profile";
import LogIn from "./pages/loginPage";
import Nav from "./components/navigation";
import ArticleIndi from "./pages/individualArticle";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/:id" element={<ArticleIndi />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
