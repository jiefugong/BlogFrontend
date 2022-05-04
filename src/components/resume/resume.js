/*
 * TODO: Determine the best strategy for rendering all of our accomplishments.
 * Options include:
 * 1. Hard-coding each block of text
 * 2. Reading a single text file and parsing it in this component
 * 3. Reading multiple files from a directory
 * - Iterate through each file, throw them into a state array
 *
 */
import ReactMarkdown from "react-markdown"
import classNames from "classnames";

import { RESUME_BLURBS } from "./blurbs/resume";


const Resume = () => {

  const renderResumeLineItems = () => {
    const renderedResume = RESUME_BLURBS.map((blurb) => {
      const colorAccent = classNames("flex", "w-1", blurb.title)
      return (
        <div className="flex w-full xl:w-1/2 space-x-8 mt-8 px-6 xl:px-0">
          <div className={colorAccent}/>
          <div className="flex w-11/12 h-full">
            <ReactMarkdown
              className="text-sm text-gray-500 space-y-2"
              children={blurb.text}
              components={{
                a: ({node, ...props}) => <a className="text-blue-400" {...props} />,
                h2: ({node, ...props}) => <h2 className="flex text-gray-600" {...props} />,
                img: ({node, ...props}) => <img className="h-6 w-6 mr-4" {...props} />,
              }}
            />
          </div>
        </div>
      )
    });
    return renderedResume;
  }

  return (
    <div className="flex flex-col items-center pb-12">
      { renderResumeLineItems() }
    </div>
  )
}

export default Resume;