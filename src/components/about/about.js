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
    <div className="flex flex-col px-8 xl:w-3/5 xl:flex-row xl:space-x-12 sm:w-full mt-8 xl:mt-12">
      <div className="flex xl:w-1/2 sm:w-full h-full">
        <img
          src="/me.jpeg"
          className="object-cover w-full"/>
      </div>
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
  )
}

export default About;
