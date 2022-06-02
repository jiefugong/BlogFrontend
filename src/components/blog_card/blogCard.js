import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

import { API_URL } from '../../constants/constants';
import { GlobalContext } from '../../context/globalState';


const BlogCard = ({title, uuid, created, removeBlogPost}) => {

  const [confirmDelete, setConfirmDelete] = useState(false);
  const { loggedIn } = useContext(GlobalContext);

  const deletePost = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    const endpoint = API_URL + 'delete_post/' + uuid;
    fetch(endpoint, requestOptions)
      .then(response => {
        if (response.status === 200) {
          removeBlogPost(uuid);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const confirmDeleteFlow = () => {
    return (
      <div className="flex w-full text-xs space-x-4">
        <div className="flex">
          Are you sure you'd like to delete this post?
        </div>
        <div
          className="flex hover:cursor-pointer"
          onClick={deletePost}>
            Yes
        </div>
        <div
          className="flex hover:cursor-pointer"
          onClick={() => setConfirmDelete(false)}>
            No
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full justify-center py-2">
      <div className="flex flex-col w-full rounded-md space-y-1 text-gray-500">
        <div className="flex w-full text-sm items-center">
          {created}
        </div>
        <Link
          to={"/blog/" + uuid}
          className="flex w-full text-md text-blue-500 items-center hover:cursor-pointer">
            {title}
        </Link>
        { loggedIn && !confirmDelete &&
          <div
            className="flex w-full text-red-400 text-xs hover:cursor-pointer"
            onClick={() => setConfirmDelete(true)}>
              Delete Post
          </div>
        }
        { confirmDelete && confirmDeleteFlow() }
      </div>
    </div>
  )
};

export default BlogCard;