import { useState, useEffect } from "react";

import { API_URL } from "../../constants/constants";

import BlogCard from "../blog_card/blogCard";


const Blog = () => {
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
    <div className="flex flex-col w-full h-screen items-center">
      <div className="flex flex-col w-2/3 xl:w-1/2 space-y-2 xl:space-y-4 mt-12">
        <div className="text-gray-700">
          <p className="text-4xl 2xl:text-6xl">
            Unique Thoughts
          </p>
          <p className="text-sm 2xl:text-lg">
            (from a unique male asian-american software engineer in the bay area)
          </p>
        </div>
        <div/>        
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
        <div className="py-2"/>
      </div>
    </div>
  )

};

export default Blog;
