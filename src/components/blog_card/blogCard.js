import { Link } from 'react-router-dom';


const BlogCard = ({title, uuid}) => {

  return (
    <div className="flex w-full justify-center py-2">
      <div className="flex flex-col w-3/5 rounded-md space-y-1 text-gray-500">
        <div className="flex w-full text-sm items-center">
          Feb 14, 2019
        </div>
        <Link
          to={"/post/" + uuid}
          className="flex w-full text-xl text-blue-500 items-center hover:cursor-pointer">
            {title}
        </Link>
      </div>
    </div>
  )
};

export default BlogCard;