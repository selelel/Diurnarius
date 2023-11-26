import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "./pages/createBlogPage";
import Blog from "./pages/blogPage";
import Profile from "./components/profile";
import LogIn from "./components/loginPage";
import Nav from "./components/navigation";
import ArticleIndi from "./pages/individualArticle";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Blog />} /> {/* create new hero page.*/}
        <Route path="/blog" element={<Blog />} />
        <Route path="/:id" element={<ArticleIndi />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
