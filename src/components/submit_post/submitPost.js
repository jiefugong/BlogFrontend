/*
 * A component that will allow us to submit multiple text snippets
 * and label them as either regular text or code snippets
 */
import { useState, useEffect } from "react";
import classNames from "classnames";

import { API_URL } from "../../constants/constants";


const SubmitPost = () => {
  // The title of the Blog Post
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  // Whether or not uploading our text blocks to the server was successful
  const [uploadSuccessful, setUploadSuccessful] = useState(null);


  const uploadBlogPost = () => {
    if (text.length <= 0) {
      return;
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'text': text,
        'title': title,
      })
    }
    fetch(API_URL + 'submit_post', requestOptions)
      .then(response => {
        if (response.status === 200) {
          setTitle('');
          setText('');
          setUploadSuccessful(true);
        } else {
          setUploadSuccessful(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const renderSubmitTextBlock = () => {
    return (
      <div className="flex flex-col w-full items-center space-y-1">
        <div className="flex w-3/5">
          <label
            htmlFor="text-block"
            className="text-sm font-medium">
              Text
          </label>
        </div>
        <div className="flex w-3/5">
          <textarea
            id="text-block"
            name="text-block"
            type="text"
            rows={6}
            className="py-3 px-4 block w-full text-sm shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    )
  }

  const renderUploadStatus = () => {
    const statusText = (uploadSuccessful ? 
      "Successfully uploaded Blog Post!" : 
      "Could not upload Blog Post, please try again in a moment."
    );
    const classAttributes = classNames("flex", "items-center", "justify-center", "text-sm", "w-1/5", "rounded-md", "py-2", "text-white", {
      "bg-green-400": uploadSuccessful,
      "bg-red-400": !uploadSuccessful,
    })
    return (
      <div className={classAttributes}>
        {statusText}
      </div>
    );
  }

  useEffect(() => {
    setTimeout(() => {
      setUploadSuccessful(null);
    }, 3000)
  }, [uploadSuccessful])

  return (
    <div className="flex flex-col items-center w-full mt-6 space-y-4 text-gray-500">
      { uploadSuccessful !== null && renderUploadStatus() }
      <div className="flex flex-col w-3/5 space-y-2">
        <label
          htmlFor="title"
          className="text-sm font-medium">
            Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          className="px-4 py-3 text-sm rounded-md w-full text-gray-900"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {renderSubmitTextBlock()}
      <div className="flex flex-row-reverse w-3/5 text-white">
        <button
          onClick={uploadBlogPost}
          className="mx-1 px-2 py-1 bg-indigo-700 text-sm rounded-md">
            Submit
        </button>
      </div>
    </div>
  )
}

export default SubmitPost;
