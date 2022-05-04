import { Routes, Route } from 'react-router';
import './App.css';

import About from './components/about/about';
import BlogPost from './components/blog_post/blogPost';
import Header from './components/header/header';
import Home from './components/home/home';
import Login from './components/login/login';
import Resume from './components/resume/resume';
import SubmitPost from './components/submit_post/submitPost';

import { GlobalProvider } from './context/globalState';


function App() {
  return (
    <div className="flex flex-col items-center bg-blue-50 w-screen min-h-screen text-white font-sans">
      <Header/>
      <hr className="w-3/5 border-slate-300 mb-2"/>

      <GlobalProvider>
        <Routes>
          <Route
            path="/"
            element={<About/>}
          />
          <Route
            path="/posts"
            element={<Home/>}
          />
          <Route
            exact path="/post/:postId"
            element={<BlogPost/>}
          />
          <Route
            exact path="/submit_post"
            element={<SubmitPost/>}
          />
          <Route
            path="/accomplishments"
            element={<Resume/>}
          />
          <Route
            path="/login"
            element={<Login/>}
          />
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
