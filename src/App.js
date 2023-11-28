import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "./pages/createPage";
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
        <Route path="/diurnarius/" element={<Blog />} />
        <Route path="/diurnarius/blog" element={<Blog />} />
        <Route path="/diurnarius/blog/:id" element={<ArticleIndi />} />
        <Route path="/diurnarius/create" element={<CreateBlog />} />
        <Route path="/diurnarius/profile" element={<Profile />} />
        <Route path="/diurnarius/about" element={<About />} />
        <Route path="/diurnarius/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
