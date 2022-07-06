import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

import { API_URL } from "../../constants/constants";


const BlogPost = () => {
  let params = useParams();
  const postId = params.postId;

  const navigate = useNavigate();
  const [post, setPost] = useState('');

  useEffect(() => {
    const getBuildUrl = API_URL + 'get_post/' + postId;
    fetch(getBuildUrl)
      .then(response => response.json())
      .then(data => {
        setPost(data.post);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  const renderBlogPost = () => {
    return (
      <div className="flex text-sm">
        <ReactMarkdown
          className="list-decimal w-full space-y-4"
          children={post.text}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '');
              console.log(match);
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
          remarkPlugins={[remarkGfm]}/>
      </div>
    )
  }

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-10/12 xl:w-1/2 space-y-4 text-gray-800 my-12">
        <div
          className="mb-2 text-blue-400 hover:text-blue-500 hover:cursor-pointer"
          onClick={() => navigate(-1)}>
            Back
        </div>
        <div className="text-4xl tracking-tight">
          {post.title}
        </div>
        { renderBlogPost() }
      </div>
    </div>
  )
};

export default BlogPost;