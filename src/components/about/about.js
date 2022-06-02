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
    <div className="flex flex-col w-full h-screen items-center justify-center space-y-12 px-4">
      <div className="flex flex-row w-8/12 space-x-12">
        <img
          src="/me.jpeg"
          className="flex w-1/2 object-contain"
        />
        <div className="flex flex-col xl:w-1/2 sm:w-full text-gray-600">
          <ReactMarkdown
            className="whitespace-pre-line text-sm py-4"
            children={blurb}
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({node, ...props}) => <a className="text-blue-500" {...props} />
            }}  
          />
        </div>
      </div>
      <div className="flex text-sm text-blue-800 hover:text-blue-500 hover:cursor-pointer">
        <Link to={'/blog'}>
          To learn more about me, please consider reading some of my random musings :-)
        </Link>
      </div>
    </div>
  )
}

export default About;
