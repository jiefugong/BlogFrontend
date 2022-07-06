import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


const About = () => {
  const [blurb, setBlurb] = useState('');

  useEffect(() => {
    fetch('blurb.txt')
      .then(res => res.text())
      .then(text => setBlurb(text))
      .catch(error => {
        console.log('Could not find local blurb file!')
      })
  }, [])

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center xl:space-y-4 2xl:space-y-8 px-4 py-4">
      <div className="flex flex-col xl:flex-row w-10/12 xl:w-8/12 xl:space-x-12">
        <img
          src="/me.jpeg"
          className="flex w-full xl:w-1/2 object-contain"
        />
        <div className="flex flex-col xl:w-1/2 w-full text-gray-600">
          <ReactMarkdown
            className="whitespace-pre-line text-sm 2xl:text-lg py-4"
            children={blurb}
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({node, ...props}) => <a className="text-blue-500" {...props} />
            }}  
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-10/12 text-sm mt-4 2xl:text-lg text-blue-800 hover:text-blue-500 hover:cursor-pointer">
        <Link className="flex underline" to={'/blog'}>
            Please click here to read some of my random musings!
        </Link>
      </div>
    </div>
  )
}

export default About;
