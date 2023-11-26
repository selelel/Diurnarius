import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "./pages/createBlogPage";
import Blog from "./pages/blogPage";
import Profile from "./components/profile";
import Nav from "./components/navigation";
import ArticleIndi from "./pages/individualArticle";
import About from "./pages/aboutPage";
import Contact from "./pages/contactPage";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<ArticleIndi />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
