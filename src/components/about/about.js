import { useState, useEffect } from "react";

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
    <div className="flex w-3/5 mt-12">
      <div className="flex w-1/2 h-full">
        <img
          src="/me.jpeg"
          className="object-cover w-full"/>
      </div>
      <div className="flex flex-col w-1/2 mt-6 text-gray-600">
        <ReactMarkdown
          className="whitespace-pre-line text-sm px-8 py-2"
          children={blurb}
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({node, ...props}) => <a className="text-blue-500" {...props} />
          }}  
        />
      </div>
    </div>
  )
}

export default About;
