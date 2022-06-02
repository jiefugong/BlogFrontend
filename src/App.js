import { Routes, Route } from 'react-router';

import About from './components/about/about';
import BlogPost from './components/blog_post/blogPost';
import Blog from './components/blog/blog';
import Login from './components/login/login';
import SideBar from './components/sidebar/sidebar';
import SubmitPost from './components/submit_post/submitPost';
import Projects from './components/projects/projects';

import { GlobalProvider } from './context/globalState';


function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen text-white font-sans">
      <GlobalProvider>
        <SideBar/>
        <Routes>
          <Route
            path="/"
            element={<About/>}
          />
          <Route
            path="/blog"
            element={<Blog/>}
          />
          <Route
            exact path="/blog/:postId"
            element={<BlogPost/>}
          />
          <Route
            exact path="/submit_post"
            element={<SubmitPost/>}
          />
          <Route
            path="/login"
            element={<Login/>}
          />
          <Route
            path="/projects"
            element={<Projects/>}
          />
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
