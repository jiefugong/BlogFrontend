import { useState, useEffect } from "react";

import { API_URL } from "../../constants/constants";

import BlogCard from "../blog_card/blogCard";


const Home = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const removeBlogPost = (uuid) => {
    const newBlogPosts = blogPosts.filter((post) => post.uuid !== uuid);
    setBlogPosts(newBlogPosts);
  }

  useEffect(() => {
    fetch(API_URL + 'get_posts')
      .then(response => response.json())
      .then(data => {
        if (data.all_posts && data.all_posts.length > 0) {
          setBlogPosts(data.all_posts);          
        } else{
          console.log('Returned empty response when trying to fetch all blog posts')
        }
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <div className="flex flex-col w-full items-center space-y-4">
      {blogPosts.map((post) => {
        return (
          <BlogCard
            title={post.title}
            uuid={post.uuid}
            created={post.created}
            removeBlogPost={removeBlogPost}
            key={post.uuid} 
          />
        )
      })}
    </div>
  )

};

export default Home;
